// Global API Response
const apiResponse = require('../utils/api_response');

// API Error
const ApiError = require('../errors/error');

// Response Codes and Messages
const responseCodesAndMessages = require('../utils/constants/http_response_status_codes_and_messages.json');
const logger = require('../utils/logger/logger');

const checkCountriesRequest = (req, res, next) => {

    const queryCheck = req.query.region;
    const bodyCheck = req.body.region;
    if(queryCheck || bodyCheck){
        next();
    }else{
        const apiError = new ApiError();
        apiError.message = responseCodesAndMessages.validation_error.message;
        apiError.statusCode = responseCodesAndMessages.validation_error.statusCode;
        responsePayload = apiResponse.apiResponsePayload(apiError);
        const loggerError = `${apiError.message} Error Code: ${apiError.statusCode}`;
        logger.error(loggerError);
        res.status(responsePayload.statusCode).send(responsePayload);
    }
}

const checkSalesrepRequest = (req, res, next) => {

}


module.exports = {
    checkCountriesRequest,
    checkSalesrepRequest
}