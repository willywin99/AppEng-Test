const { generateToken } = require('./auth');
const { v4: uuidv4 } = require('uuid');

// Contoh data user (ganti dengan database)
const users = {
  admin: { password: 'password' },
};

function login(req, res) {
  const { username, password } = req.body;

  const user = users[username];
  if (user && user.password === password) {
    const payload = {
      id: uuidv4(),
      username: username,
    };
    const token = generateToken(payload);

    res.cookie('token', token, { httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production' });
    return res.json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
}

function logout(req, res) {
  res.clearCookie('token');
  return res.json({ message: 'Logout successful' });
}

module.exports = { login, logout };