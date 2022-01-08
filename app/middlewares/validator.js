// Global API Response
const apiResponse = require('../utils/api_response');

// API Error
const ApiError = require('../errors/error');

// Response Codes and Messages
const responseCodesAndMessages = require('../utils/constants/http_response_status_codes_and_messages.json');

const checkCountriesRequest = (req, res, next) => {

    const queryCheck = req.query.region;
    const bodyCheck = req.body.region;
    if(queryCheck || bodyCheck){
        next();
    }else{
        let responsePayload = {};
        let responseData = {
            statusCode: responseCodesAndMessages.validation_error.statusCode,
            message: responseCodesAndMessages.validation_error.message
        };
        responsePayload = apiResponse.apiResponsePayload(responseData);
        res.status(responseData.statusCode).send(responsePayload);
    }
}



module.exports = {
    checkCountriesRequest
}