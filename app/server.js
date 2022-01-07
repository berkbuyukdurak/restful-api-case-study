process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const config = require('../config/env/' + process.env.NODE_ENV);
const logger = require('../app/utils/logger/logger');



const app = require('./app');
const port = process.env.serverport || config.server.port;



app.listen(port, () => {
    logger.info(`Server is started. Listening port ${port}...`);
});