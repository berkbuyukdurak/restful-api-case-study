const mongoConnector = require('../config/database/mongo_connector');


const express = require('express');
const cors = require('cors');
const _ = require('lodash');


// Connecting to the database
mongoConnector();

const app = express();

app.use(express.json());



app.use('/', (req, res, next) =>{
    console.log("hellp");
});


module.exports = app;