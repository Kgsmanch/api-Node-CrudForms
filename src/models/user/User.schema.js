const Sequelize = require('sequelize');
const database = require('../../config/database.config');

// Database Schema User
const User = database.define('user', {
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
    email: {
        type:Sequelize.STRING,
        allowNull:true,
        validate:{
            isEmail:true,
        },
    },
});
// User.sync({force:true});
User.sync({force:true});
function teste () {
    console.log('testando algo dentro do User Schema');
}

module.exports=User;
module.exports=teste;