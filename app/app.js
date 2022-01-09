const mongoConnector = require('../config/database/mongo_connector');
const router = require('./api_routes/router');
const errorHandlerHelper = require('./helpers/error_handler_helper');
const responseCodesAndMessages = require('./utils/constants/http_response_status_codes_and_messages.json');
const ApiError = require('./errors/error');

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

/**
* Entry point of API
*/
app.use('/', router.use(errorHandlerHelper));

/**
* Catching undefined routes and returning an error
*/
app.all('*', (req, res, next) => {
    let invalidMethod = "";
    const message = "Requested URL --> " + req.originalUrl + " - " +responseCodesAndMessages.bad_request.message;
    if(!_.isEqual(req.method, 'GET')){
        invalidMethod = `Invalid Request Method! --> ${req.method} | Only GET Request is Accepted! `;
    }
    next(new ApiError(invalidMethod + message, responseCodesAndMessages.bad_request.statusCode));
});


app.use(errorHandlerHelper);

module.exports = app;