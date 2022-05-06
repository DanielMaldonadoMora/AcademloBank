const express = require('express');

const { transfer } = require('../controllers/transfers.controller');

const router = express.Router();

router.post('/transfer', transfer);

module.exports = { transfersRouter: router };
