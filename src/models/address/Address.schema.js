const Sequelize = require('sequelize');
const database = require('../../config/database.config');


const Address = database.define('address', {
    zip_code: {
        type:Sequelize.STRING,
        allowNull:true,
    },
    street_name: {
        type:Sequelize.STRING,
        allowNull:true,
    },
    complement: {
        type:Sequelize.STRING,
        allowNull:true,
    },
    neighborhood: {
        type:Sequelize.STRING,
        allowNull:true,
    },
    city: {
        type:Sequelize.STRING,
        allowNull:true,
    },
    state:{
        type:Sequelize.STRING,
        allowNull:true,
    },
},
{
    timestamps: true,
    paranoid: true,
    deletedAt: 'deleted_at'
})

// Address.sync({force:true});
module.exports=Address
