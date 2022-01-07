const { createConnection } = require('./mongo_config')

module.exports = () => {
    createConnection();
}