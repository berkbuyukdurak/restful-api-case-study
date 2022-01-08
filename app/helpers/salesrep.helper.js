const _ = require('lodash');

const logger = require('../utils/logger/logger');


/**
 * This function calculates sales representatives by their region.
 * @param {Object} regions 
 * @returns 
 */
const calculateSalesRepsByRegion = (regions) => {
    // Grouping countries by their regions.
    var groupedCountries = _.groupBy(regions, 'region');

    // This array will be filled with 
    let salesRepRegions = [];

    /**
    * Grouped countries should be processed.
    */
    _.forEach(groupedCountries, groups =>{
        let processedGroup = calculateSalesRepresentatives(groups);
        salesRepRegions.push(processedGroup);
    });

    return salesRepRegions;
}


/**
 * This function calculates sales representatives
 * and identifies needs for each region.
 */
const calculateSalesRepresentatives = (group) => {
    let countriesData = {};
    let countryCountForRegion = group.length;
    countriesData.region = group[0].region;
    // Calculating sales representatives needs for each region
    /**
    * Rules
    * 1) Each region should have at least 1 representative
    * 2) Each representative should have at least 3 countries and at most 7 countries assigned to them
    * 3) Each country should be assigned to one and only one sales representative
    * According to these rules, each region should at least 1 rep and every rep have min 3 countries and max 7 countries.
    */
    let minSalesReq = 1;
    let maxSalesReq = 1;

    /**
     * Calculating the minimum sales representatives requirement
     * We need to divide total country number by 7 to find minimum sales representatives count.
     * We need to check mod 7 because if it is not 0, we need to add 1 representative because
     * all the representatives have already maximum number of countries in their inventory.
     */
    let mod7OfCount = countryCountForRegion % 7;
    if(mod7OfCount === 0){
        minSalesReq = Math.floor(countryCountForRegion / 7);
        countriesData.minSalesReq = minSalesReq;
    }else{
        minSalesReq = Math.floor(countryCountForRegion / 7) + 1;
        countriesData.minSalesReq = minSalesReq;
    }

    /**
     * Calculating the maximum sales representatives requirement
     * We need to divide total country number by 3 to find maximum sales representatives count.
     * We don't need to check mod 3 because it will be 0, 1 or 2. So, we don't need reps
     * for these countries because each representative have at least 3 contries.
     * We only need Math.floor.
     */
    maxSalesReq = Math.floor(countryCountForRegion / 3);
    countriesData.maxSalesReq = maxSalesReq;

    const info = "Sales representatives count are calculated for the region --> " + countriesData.region;
    const infoMessage = `${info} -- Country Count: ${countryCountForRegion} -- Minimum: ${countriesData.minSalesReq} -- Maximum: ${countriesData.maxSalesReq}`;
    logger.info(infoMessage);

    return countriesData;
}



module.exports = {
    calculateSalesRepsByRegion
}