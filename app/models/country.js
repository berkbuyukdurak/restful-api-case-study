const Mongoose = require("mongoose");

const countrySchema = new Mongoose.Schema(
    {
        name: String,
        region: String,
    }
    );
    
module.exports = Mongoose.model("Country", countrySchema);