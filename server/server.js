const express = require('express');
const server = express();
const authRoutes = require('./routes/auth');

server.use(express.json());

server.use('/auth', authRoutes);

server.get('/', (req, res) => {
  res.send({ message: 'Welcome to the server!' });
});

module.exports = server;
