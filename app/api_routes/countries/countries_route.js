const Country = require('../../models/country');

// Router Controllers
const countriesCtrl = require('../../controllers/countries.server.controller');

// This function checks the request. User can request with query parameter or payload.
const checkRequest = (req, res, next) => {
    let payloadToSent = {};
    // Filling the payload
    if(req.query.region != undefined){
        payloadToSent = req.query;
    }else if(req.body.region != undefined){
        payloadToSent = req.body;
    }

    //try{
        console.log("------");
        return countriesCtrl.getCountriesByRegion(payloadToSent).then(returnedResponse => {
            console.log("buraya ne zaman geldim?")
            //res.status(200).send(returnedResponse);
        });
    //}catch(err){
      //  console.log(err);
    //}
}



module.exports = {
    checkRequest
}