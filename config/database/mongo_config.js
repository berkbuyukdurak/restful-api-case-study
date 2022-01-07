require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'production';
const config = require('../../config/env/' + process.env.NODE_ENV);

const mongoose = require('mongoose');
const logger = require('../../app/utils/logger/logger');

const createConnection = async () => {
    try{
        await mongoose.connect(
            config.database.url, {
                auth: { username: config.database.username, password: config.database.password },
                useNewUrlParser: true,
                useUnifiedTopology: true
        });
        logger.info("Database connection is created.");

    } catch(err){
        console.log(err);
        logger.error('Database connection error!');
    }
}


module.exports = {
    createConnection
}