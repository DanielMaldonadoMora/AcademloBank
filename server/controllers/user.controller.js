//aqui solo usar async y await
const { User } = require('../models/user.model');
const { Transfer } = require('../models/transfers.model');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    res.status(200).json({
      users,
    });
  } catch (error) {}
};

const createUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    const accountNumber = Math.floor(100000 + Math.random() * 900000);
    const newUser = await User.create({
      name,
      accountNumber,
      password,
    });

    console.log(name, accountNumber, password);
    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { accountNumber, password } = req.body; // { id, postId, comentId }
    const user = await User.findOne({ where: { accountNumber } });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }
    if (user.password === password) {
      user.update({ status: 'login' });
      res.status(200).json({ user });
    }
  } catch (error) {
    console.log(error);
  }
};
const logoutUser = async (req, res) => {
  try {
    const { id } = req.body; // { id, postId, comentId }
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    user.update({ status: 'logout' });
    res.status(200).json('logout');
  } catch (error) {
    console.log(error);
  }
};

const userHistory = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!(user.status === 'login')) {
      // await User.update({name},{where:{id}})
      return res.status(404).json({
        status: 'error',
        message: 'User logout',
      });
    }
    const transfers = await Transfer.findAll({
      where: { senderUserId: user.accountNumber },
    });
    if (!transfers) {
      return res.status(404).json({
        status: 'error',
        message: 'transfers not found',
      });
    }
    res.status(200).json(transfers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  loginUser,
  logoutUser,
  userHistory,
};
