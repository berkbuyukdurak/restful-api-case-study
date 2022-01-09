const request = require('request');
const _ = require('lodash');

// SalesRep Helper
const salesrepHelper = require('../helpers/salesrep.helper');

const getSalesRepByRegions = () => {
    return new Promise(resolve => {
        const options = {
            url: 'http://127.0.0.1:3000/countries?region=all',
            method: 'GET'
        };
        request(options, (err, res, body) => {
            if(!err)
                resolve(body);
        })
    }).then(value => {
        // Countries data is retrieved.
        let json = JSON.parse(value);
        const salesRepRequirementsByRegion = salesrepHelper.calculateSalesRepsByRegion(json);
        return salesRepRequirementsByRegion;
    });
}




module.exports = {
    getSalesRepByRegions
}