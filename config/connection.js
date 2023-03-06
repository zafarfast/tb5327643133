const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
