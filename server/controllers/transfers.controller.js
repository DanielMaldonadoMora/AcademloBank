const { Transfer } = require('../models/transfers.model');
const { User } = require('../models/user.model');

const transfer = async (req, res) => {
  try {
    const { amountToTransfer, senderUserId, reciverUserId } = req.body;
    const senderValidated = await User.findOne({
      where: { accountNumber: senderUserId },
    });
    const reciverValidated = await User.findOne({
      where: { accountNumber: reciverUserId },
    });

    if (!senderValidated || !reciverValidated) {
      return res.status(404).json({
        status: 'error',
        message: 'User/s not found',
      });
    }
    if (senderValidated.amount < amountToTransfer) {
      return res.status(404).json({
        status: 'error',
        message: 'insufficient funds',
      });
    }
    const newTransfer = await Transfer.create({
      amount: amountToTransfer,
      senderUserId,
      reciverUserId,
    });
    senderValidated.update({
      amount: senderValidated.amount - amountToTransfer,
    });
    reciverValidated.update({
      amount: Number(reciverValidated.amount) + amountToTransfer,
    });
    console.log(reciverValidated.amount);

    res.status(201).json({ newTransfer });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { transfer };
