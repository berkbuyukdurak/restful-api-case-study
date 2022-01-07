const winston = require('winston');

/**
 * Log priorities
 * {error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5}
 */
const logConfiguration = {
    format: winston.format.combine(
        winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
        winston.format.align(),
        winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
    ),
    defaultMeta: {service: 'application-service'},
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            level: 'error',
            filename: 'logs/error.log'
        }),

        new winston.transports.File({
            level: 'warn',
            filename: 'logs/warn.log'
        }),

        new winston.transports.File({
            level: 'info',
            filename: 'logs/info.log'
        }),

        new winston.transports.File({
            level: 'verbose',
            filename: 'logs/verbose.log'
        }),

        new winston.transports.File({
            level: 'debug',
            filename: 'logs/debug.log'
        }),

        new winston.transports.File({
            level: 'silly',
            filename: 'logs/silly.log'
        })
    ]
}


module.exports = {
    configuration: logConfiguration
}