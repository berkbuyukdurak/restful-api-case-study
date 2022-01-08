const logger = require('../utils/logger/logger');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    const message = `${err.message} ${err.statusCode}`;
    logger.error(message);

    res.status(err.statusCode).json({
        msg: err.message
    });
};