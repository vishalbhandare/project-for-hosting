// const config = require('../config/app-config.js');
const cors = require('cors');


const sequelize = require('../database/connection')

const express = require('express')
const app = express()

// required libraries
require('dotenv').config();

const helmet = require('helmet')
app.use(helmet())

app.use(cors({
    origin: '*'
}));

try {
    sequelize.authenticate();
    console.log('db verified')
} catch(err) {
    console.error('Unable to connect to the database:', error);
}

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// routes
app.use('/contact', require('./main.js'))


// server initialization
app.listen(process.env.APP_PORT || 8080, () => console.log('Server is running'));
