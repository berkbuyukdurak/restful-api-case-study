const logger = require('../utils/logger/logger');
const apiResponse = require('../utils/api_response');
const _ = require('lodash');

const responseCodesAndMessages = require('../utils/constants/http_response_status_codes_and_messages.json');

// Salesrep Services
const salesrepService = require('../services/salesrep.service');


const getSalesrep = async(req, res, next) => {
    return new Promise(resolve => {
        const countries = salesrepService.getSalesRepByRegions();
        resolve(countries);
    }).then(value => {
        // Sales Representatives are calculated.
        let responsePayload = {};
        if(value.length > 0){
            responsePayload.statusCode = responseCodesAndMessages.ok.statusCode;
            responsePayload.data = value;
            const successMessage = responseCodesAndMessages.ok.message + " Sales representatives count for each region are successfully calculated.";
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
};




module.exports = {
    getSalesrep
}