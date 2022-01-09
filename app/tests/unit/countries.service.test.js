const countriesService = require('../../services/countries.service');
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
* Returning all the countries
* Case sensitivity tests are already conducted in the integration tests.
*/
describe('Testing countries service for returning all the countries ', () => {
    it('All the countries should be returned', () => {
        return countriesService.findAllCountries().then(returnedCountries => {
            expect(Array.isArray(returnedCountries)).toBe(true);
        })
    })
});

/**
* Returning Countries with Their Region
*/
describe('Testing countries service for returning the countries with their region ', () => {
    it('Only the countries with their region should be returned', () => {
        return countriesService.findCountriesWithTheirRegion("America").then(returnedCountries => {
            //expect(JSON.parse)
            expect(Array.isArray(returnedCountries)).toBe(true);
        })
    })
});