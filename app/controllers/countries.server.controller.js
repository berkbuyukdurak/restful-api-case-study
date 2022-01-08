const logger = require('../utils/logger/logger');
const apiResponse = require('../utils/api_response');

// Countries Service
const countriesSerivce = require('../services/countries.service');

// Response Codes and Messages
const responseCodesAndMessages = require('../utils/constants/http_response_status_codes_and_messages.json');

const getCountriesByRegion = async(req, res, next) => {
    let payloadToSent = {};
    if(req.query.region != undefined){
        payloadToSent = req.query.region;
    }else if(req.body.region != undefined){
        payloadToSent = req.body.region;
    }
    try{
        countriesSerivce.findCountriesWithTheirRegion(payloadToSent).then(returnedData => {
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
            res.status(responsePayload.statusCode).send(responsePayload);


        });
    }
    catch(err){
        console.log(err)
    }
}



module.exports = {
    getCountriesByRegion
}