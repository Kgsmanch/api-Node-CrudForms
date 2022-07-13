const express = require('express');
const app = require('./src/config/server'); 
const bodyParser = require('body-parser');

//Config
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routes
require('./src/routes/Address.route')
// require('./src/routes/User.route')