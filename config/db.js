const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false //console.log
});

module.exports = sequelize;
