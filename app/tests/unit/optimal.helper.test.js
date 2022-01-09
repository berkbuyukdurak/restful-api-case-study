const optimalHelper = require('../../helpers/optimal.helper');


const countries_data = [
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

const salesRepCount_data = [
    { 
        region: 'Apac', 
        minSalesReq: 2,
        maxSalesReq: 3
    }
]





/**
* Testing the setSalesRepresentativeRoster Function
*/
describe('Testing the salesrep helper calculateSalesRepsByRegion function', () => {
    it("Data should be successfully processed.", () => {
        let returnedData = optimalHelper.setSalesRepresentativeRoster(countries_data, salesRepCount_data);
        expect(returnedData[0]).toHaveProperty('region');
        expect(returnedData[0]).toHaveProperty('countryList');
        expect(returnedData[0]).toHaveProperty('countryCount');
    })
});



/**
* Testing the prepareSalesRepresentativeForEachRegion Function
*/
describe('Testing the salesrep helper calculateSalesRepsByRegion function', () => {
    it("Data should be successfully processed.", () => {
        let returnedData = optimalHelper.prepareSalesRepresentativeForEachRegion(countries_data, salesRepCount_data);
        expect(returnedData[0]).toHaveProperty('region');
        expect(returnedData[0]).toHaveProperty('countryList');
        expect(returnedData[0]).toHaveProperty('countryCount');
    });
});