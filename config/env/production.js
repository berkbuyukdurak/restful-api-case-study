require('dotenv').config();

module.exports = {
    app: {
        title: 'Production Environment',
        timeout: 3000
    },
    server: {
        port: process.env.PROD_PORT || 3000,
        hostname: process.env.PROD_HOST || '127.0.0.1'
    },
    database: {
        url: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:@${process.env.DB_PORT}/${process.env.DB_NAME}?authsource=admin`,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
}