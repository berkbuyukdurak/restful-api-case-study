// Express Router
const router = require('express').Router();

// Controllers
const countriesCtrl = require('../controllers/countries.server.controller');

// Global API Response
const apiResponse = require('../utils/api_response');

// Validator Middleware
const validatorMiddleware = require('../middlewares/validator');

// API Error
const ApiError = require('../errors/error');

// Response Codes and Messages
const responseCodesAndMessages = require('../utils/constants/http_response_status_codes_and_messages.json');

/**
* Countries Endpoint
* Users can use this endpoint both with query parameter
* and request payload.
* Query parameter is region. If the parameter is not valid.
*/
router.route('/countries').get(validatorMiddleware.checkCountriesRequest, countriesCtrl.getCountriesByRegion);

router.route

/**
 * Salesrep Endpoint
 */




module.exports = router;