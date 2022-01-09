const optimalService = require('../../services/optimal.service');
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
* Returning all the optimal sales representative roster
*/
describe('Testing salesrep service for returning all the regions min and max sales rep requirements', () => {
    it('All the regions should be returned', () => {
        const returnedData = optimalService.getSalesRepresentativeRoster();
        expect(Array.isArray(returnedData[0]));
    })
});