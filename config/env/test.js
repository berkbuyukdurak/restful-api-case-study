require('dotenv').config();

module.exports = {
    app: {
        title: 'Test Environment',
        timeout: 3000
    },
    server: {
        port: process.env.TEST_PORT || 3200,
        hostname: process.env.TEST_HOST || 'localhost'
    },
    database: {
        url: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:@${process.env.DB_PORT}/${process.env.DB_NAME}?authsource=admin`,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
}