const path = require('path');
require('dotenv').config();

const config = {
    'mysqlReadCon' : {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionPool: process.env.DB_CONNECTION_POOL,
        charset : 'utf8mb4'
    },
    'mysqlWriteCon' : {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionPool: process.env.DB_CONNECTION_POOL,
        charset : 'utf8mb4'
    },
}

module.exports = config;