const mongoConnector = require('../../../config/database/mongo_connector');
const mongoose = require('mongoose');

jest.setTimeout(30000);

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Testing database connection module.', () => {
    it("Database connection is created.", () => {
        mongoConnector();
    })
})