const mongoConnector = require('../config/database/mongo_connector');
const router = require('./api_routes/router');
const errorHandlerHelper = require('./helpers/error_handler_helper');

const express = require('express');
const cors = require('cors');
const _ = require('lodash');


// Connecting to the database
mongoConnector();

// Initializing Express Framework.
const app = express();

// Body parser, reading data from body into req.body
app.use(express.json());

// Enabling cors
app.use(cors({
    methods: '*',
    origin: '*'
}));



app.use('/', router.use(errorHandlerHelper));


app.use(errorHandlerHelper);

module.exports = app;