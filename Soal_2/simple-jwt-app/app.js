const express = require('express');
const cookieParser = require('cookie-parser');
const { authenticate } = require('./auth');
const user = require('./user');

const app = express();
app.use(express.json()); // Untuk parsing body JSON
app.use(cookieParser()); // Untuk parsing cookie

// Routes
app.post('/login', user.login);
app.post('/logout', user.logout);

app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected resource', user: req.user });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});