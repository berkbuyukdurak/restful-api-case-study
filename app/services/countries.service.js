const Country = require('../models/country');


const findCountriesWithTheirRegion = (query) => {

    const findQuery = {region: query};
    return Country.find(findQuery, {_id: 0});
}

const findAllCountries = () => {
    return Country.find({},{_id: 0});
}



module.exports = {
    findCountriesWithTheirRegion,
    findAllCountries
}