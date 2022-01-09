const request = require('request');
const _ = require('lodash');

// Optimal Endpoint Helper
const optimalHelper = require('../helpers/optimal.helper');
// SalesRep Helper
const salesrepHelper = require('../helpers/salesrep.helper');

const getSalesRepresentativeRoster = () => {
    return new Promise(resolve => {
        // First, requesting the coountries
        const options = {
            url: 'http://127.0.0.1:3000/countries?region=all',
            method: 'GET'
        };
        request(options, (err, res, body) => {
            if(!err)
                resolve(body);
        })
    }).then(value => {
        //Then, calculating the sales representatives count by region
        let json = JSON.parse(value);
        const salesRepRequirementsByRegion = salesrepHelper.calculateSalesRepsByRegion(json);
        const salesRepRoster = optimalHelper.setSalesRepresentativeRoster(json, salesRepRequirementsByRegion);
        
        return salesRepRoster;
    });
}

module.exports = {
    getSalesRepresentativeRoster
}