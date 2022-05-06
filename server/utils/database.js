const { Sequelize } = require('sequelize');
//sequelize para conectar con la base de datos de postgress solo una vez
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Hercules.1',
  database: 'Bank',
  port: 5432,
  logging: false,
});

module.exports = { db };
