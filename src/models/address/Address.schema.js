const {Sequelize, DataTypes} = require('sequelize');
const database = require('../../config/database.config');

const Address = database.define('address', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    UUIDV4: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
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
})

// Address.sync({Alter:true});
module.exports=Address
