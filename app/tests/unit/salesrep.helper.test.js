const salesRepHelper = require('../../helpers/salesrep.helper');

const test_data_before_processed = [
    {
        name: "Japan",
        region: "Apac"
    },
    {
        name: "China",
        region: "Apac"
    },
    {
        name: "Indonesia",
        region: "Apac"
    },
    {
        name: "Malaysia",
        region: "Apac"
    },
    {
        name: "Singapore",
        region: "Apac"
    },
    {
        name: "Australia",
        region: "Apac"
    },
    {
        name: "Thailand",
        region: "Apac"
    },
    {
        name: "South Korea",
        region: "Apac"
    },
    {
        name: "Philippines",
        region: "Apac"
    },
    {
        name: "Republic of Korea",
        region: "Apac"
    }
]
const test_data_object = { 
    region: 'Apac', 
    minSalesReq: 2,
    maxSalesReq: 3
}

/**
* Testing the calculateSalesRepsByRegion Function
*/
describe('Testing the salesrep helper calculateSalesRepsByRegion function', () => {
    it("Data should be successfully processed.", () => {
        const returnedData = salesRepHelper.calculateSalesRepsByRegion(test_data_before_processed);
        let array = [];
        array.push(test_data_object);
        expect(returnedData).toEqual(array);
        expect(returnedData[0]).toHaveProperty('region');
        expect(returnedData[0]).toHaveProperty('minSalesReq');
        expect(returnedData[0]).toHaveProperty('maxSalesReq');
    })
});

/**
* Testing the calculateSalesRepresentatives Function
*/
describe('Testing the salesrep helper calculateSalesRepresentatives function', () => {
    it("Data should be successfully processed.", () => {
        const returnedData = salesRepHelper.calculateSalesRepresentatives(test_data_before_processed);
        expect(returnedData).toEqual(test_data_object);
        expect(returnedData).toHaveProperty('region');
        expect(returnedData).toHaveProperty('minSalesReq');
        expect(returnedData).toHaveProperty('maxSalesReq');
    })
});