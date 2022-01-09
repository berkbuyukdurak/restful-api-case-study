const logger = require('../utils/logger/logger');
const apiResponse = require('../utils/api_response');
const _ = require('lodash');

const responseCodesAndMessages = require('../utils/constants/http_response_status_codes_and_messages.json');

const optimalService = require('../services/optimal.service');
const { response } = require('express');

const getOptimalRoster = async(req, res, next) => {
    return new Promise(resolve => {
        const optimalRoster = optimalService.getSalesRepresentativeRoster();
        resolve(optimalRoster);
    }).then(value => {
        // Optimal sales representatives are calculated.
        let responsePayload = {};
        if(value.length > 0){
            responsePayload.statusCode = responseCodesAndMessages.ok.statusCode;
            responsePayload.data = value;
            const successMessage = responseCodesAndMessages.ok.message + " New sales representative data for each region are successfully calculated.";
            const returnSuccess = `${successMessage} ${responsePayload.statusCode}`;
            logger.info(returnSuccess);
        }else{
            responsePayload.statusCode = responseCodesAndMessages.data_not_found.statusCode;
            responsePayload.message = responseCodesAndMessages.data_not_found.message;
            const returnNotFound = `${responsePayload.message} ${responsePayload.statusCode}`;
            logger.error(returnNotFound);
        }

        if(_.isEqual(responsePayload.statusCode, 200)){
            res.status(responsePayload.statusCode).send(responsePayload.data);
        }else{
            res.status(responsePayload.statusCode).send(responsePayload);
        }
    });
}



module.exports = {
    getOptimalRoster
}