const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'your_secret_key'; // Kunci rahasia JWT (ganti dengan yang kuat!)

function generateToken(payload) {
  const iat = Math.floor(Date.now() / 1000); // Waktu token dibuat
  const exp = iat + (60 * 60); // Waktu token kadaluarsa (1 jam)
  const token = jwt.sign({ ...payload, iat, exp }, secretKey);
  return token;
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return null; // Token tidak valid atau kadaluarsa
  }
}

function authenticate(req, res, next) {
  const token = req.cookies.token; // Ambil token dari cookie
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  req.user = decoded; // Simpan informasi user di request
  next(); // Lanjutkan ke handler berikutnya
}

module.exports = { generateToken, verifyToken, authenticate };