const express = require('express');

// Controller
const {
  createUser,
  loginUser,
  userHistory,
  getAllUsers,
  logoutUser,
} = require('../controllers/user.controller');

const router = express.Router();

router.post('/signup', createUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.get('/', getAllUsers);

router.get('/:id/history', userHistory);

module.exports = { usersRouter: router };
