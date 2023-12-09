const {Sequelize} = require("sequelize");
// required libraries
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, null, null, {
    dialect: 'mysql',
    port: 3306,
    replication: {
      read: [
        { host: process.env.DB_HOST, username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD },
        { host: process.env.DB_HOST_2, username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD },
      ],
      write: { host: process.env.DB_HOST_3, username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD}
    },
    pool: { // If you want to override the options used for the read/write pool you can do so here
      max: 20,
      idle: 30000
    },
    // models: [Contact],
  })
  module.exports = sequelize