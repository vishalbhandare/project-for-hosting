const sequelize = require('../database/connection')
const { DataTypes } = require('sequelize')

const Contact = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

module.exports = sequelize.define('contacts', Contact)