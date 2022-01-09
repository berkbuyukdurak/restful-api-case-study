const salesRepService = require('../../services/salesrep.service');
const mongoConnector = require('../../../config/database/mongo_connector');
const mongoose = require('mongoose');

/**
* Connecting to the database
*/
beforeAll(async () => {
    mongoConnector();
})

/**
* Closing the database connection
*/
afterAll(async () => {
    await mongoose.connection.close();
});


/**
* Returning sales representatives by their region
*/
describe('Testing salesrep service for returning all the regions min and max sales rep requirements', () => {
    it('All the regions should be returned', () => {
        const returnedData = salesRepService.getSalesRepByRegions();
        expect(Array.isArray(returnedData[0]));
    })
});