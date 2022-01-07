const winston = require('winston');
const loggerConfiguration = require('./logger_config');

/**
 * Creating Logger for Logging
 */
const logger = winston.createLogger(loggerConfiguration.configuration);


module.exports = logger;