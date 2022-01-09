const logger = require('../utils/logger/logger');
const apiResponse = require('../utils/api_response');

// Countries Service
const countriesService = require('../services/countries.service');

// Response Codes and Messages
const responseCodesAndMessages = require('../utils/constants/http_response_status_codes_and_messages.json');

// Lodash
const _ = require('lodash');

const getCountriesByRegion = async(req, res, next) => {
    let payloadToSent = {};
    if(req.query.region != undefined){
        payloadToSent = req.query.region;
    }else if(req.body.region != undefined){
        payloadToSent = req.body.region;
    }
    try{
        if(!_.isEqual(_.lowerCase(payloadToSent), "all")){
            countriesService.findCountriesWithTheirRegion(payloadToSent).then(returnedData => {
                let responseToSent = preparePayload(returnedData);
                if(_.isEqual(responseToSent.statusCode, 200)){
                    res.status(responseToSent.statusCode).send(responseToSent.data);
                }else{
                    res.status(responseToSent.statusCode).send(responseToSent);
                }    
            });
        }else{
            countriesService.findAllCountries().then(returnedData => {
                let responseToSent = preparePayload(returnedData);
                if(_.isEqual(responseToSent.statusCode, 200)){
                    res.status(responseToSent.statusCode).send(responseToSent.data);
                }else{
                    res.status(responseToSent.statusCode).send(responseToSent);
                }
            });
        }
    }
    catch(err){
        console.log(err)
    }
}

/*
* Prepare Payload Function to Return Data
*/
const preparePayload = (returnedData) => {
    let responsePayload = {};
    if(returnedData.length > 0){
        responsePayload.statusCode = responseCodesAndMessages.ok.statusCode;
        responsePayload.data = returnedData;
        const successMessage = responseCodesAndMessages.ok.message +  " Data is successfully found and returned.";
        const returnSuccess = `${successMessage} ${responsePayload.statusCode}`;
        logger.info(returnSuccess);
    }else{
        responsePayload.statusCode = responseCodesAndMessages.not_found.statusCode;
        responsePayload.message = responseCodesAndMessages.not_found.message;
        const returnNotFound = `${responsePayload.message} ${responsePayload.statusCode}`;
        logger.error(returnNotFound);
    }
    return responsePayload;
}



module.exports = {
    getCountriesByRegion
}