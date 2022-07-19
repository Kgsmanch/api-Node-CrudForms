const Sequelize = require('sequelize');
const database = require('../../config/database.config');

// Database Schema User
const User = database.define('user', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type:Sequelize.STRING,
        allowNull:false,
    },
    last_name: {
        type:Sequelize.STRING,
        allowNull:false,
    },
    phone_number: {
        type:Sequelize.STRING,
        allowNull:true,
        validate: {
            len:[3, 15],
        }
    },
    birth_date: {
        type:Sequelize.DATE,
        allowNull:true
    },
    email: {
        type:Sequelize.STRING,
        allowNull:true,
        validate:{
            isEmail:true,
        },
    },
    nationality: {
        type:Sequelize.STRING,
        allowNull: true,
        defaultValue: "Brasileiro'a'"
    },
});

// User.sync({force:true});

module.exports = User;