const { indexOf } = require('lodash');
const _ = require('lodash')
const logger = require('../utils/logger/logger');


const setSalesRepresentativeRoster = (countries, salesRepCount) => {

    const salesRepRoster = prepareSalesRepresentativeForEachRegion(countries, salesRepCount);
    return salesRepRoster;
}


const prepareSalesRepresentativeForEachRegion = (countries, salesRepCount) => {

    let countryAndRegionInformations = [];
    let groupedCountries = _.groupBy(countries, 'region');
    _.forEach(groupedCountries, groups => {
        // Creating object with the returned data for each region
        let regionInformation = {
            region: groups[0].region,
            countryCount: groups.length,
            countries: groups
        }
        // Finding salesrep data for each region.
        const salesRepDataForTheRegion = _.find(salesRepCount, {'region': regionInformation.region});
        // Saving salesrep info to the object
        regionInformation.salesRepInfo = salesRepDataForTheRegion;

        // Pushing all the data 
        countryAndRegionInformations.push(regionInformation);
    });

    /**
    * Preparing the salesrep roster
    */
    // Array to return
    let salesRepRoster = [];

    _.forEach(countryAndRegionInformations, info => {
        let countryCountForEachSalesRep = Math.floor(info.countryCount / info.salesRepInfo.minSalesReq);
        // Let's select countries by random order
        let totalCountryCountToProcess = info.countryCount;

        for(let i = 0; i < info.salesRepInfo.minSalesReq; i++){
            let salesRep = {};
            let salesrepCountries = [];

            // Assigning the region of sales representative
            salesRep.region = info.region;

            // Finding the total country number to process for each seles representative
            totalCountryCountToProcess = totalCountryCountToProcess - countryCountForEachSalesRep;
            for(let j = 0; j < countryCountForEachSalesRep; j++){

                // Each country will be selected randomly for the sales representatives.
                let randomNumberToSplice = Math.floor(Math.random() * totalCountryCountToProcess);
                let country = info.countries.splice(randomNumberToSplice, 1);
                let countryName = country[0].name;
                salesrepCountries.push(countryName);
            }

            // Saving sales representatives data to the sales representative object and saving to the roster array
            salesRep.countryList = salesrepCountries;
            salesRep.countryCount = salesrepCountries.length;
            salesRepRoster.push(salesRep);
            salesRep = {};
        }
        // First, we randomly distributed all the countries to the sales representatives evenly as much as possible.
        // Now, we need to deal with countries that have not been assigned to any sales representative.
        let leftCountries = info.countries.length;
        if(leftCountries > 0){
            for(let i = 0; i < leftCountries; i++){
                // First, get the representatives for that region
                let representatives = _.filter(salesRepRoster, {'region': info.region});
                // Again, we need to select randomly which representative will be assigned to the selected country.
                let randomNumberToSelectRepresentative = Math.floor(Math.random()* representatives.length);
                let selectedRepresentative = representatives[randomNumberToSelectRepresentative];
                // Find Index of selected Representative
                let selectedRepresentativeIndex = _.findIndex(salesRepRoster, {'countryList': selectedRepresentative.countryList});
                let selectedRepresentativeCountryCountFromRoster = salesRepRoster[selectedRepresentativeIndex].countryCount;
                // A representative can server at most 7 countries
                if(selectedRepresentativeCountryCountFromRoster < 7){
                    // Again, randomly select country
                    let randomNumberToSplice = Math.floor(Math.random() * info.countries.length);
                    let country = info.countries.splice(randomNumberToSplice, 1);
                    let countryName = country[0].name;
                    // Now, manipulate salesRepRoster
                    salesRepRoster[selectedRepresentativeIndex].countryList.push(countryName);
                    salesRepRoster[selectedRepresentativeIndex].countryCount++;
                }
            }
        }
    });
    return salesRepRoster;
}



module.exports = {
    setSalesRepresentativeRoster
}