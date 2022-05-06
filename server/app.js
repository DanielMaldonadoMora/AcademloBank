//aqui se usa .then y.cath
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
// utils

//habiilitar recibir json
app.use(express.json());

//=== Router
const { usersRouter } = require('./routes/user.routes');
const { transfersRouter } = require('./routes/transfers.routes');
//Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1', transfersRouter);

module.exports = { app };
