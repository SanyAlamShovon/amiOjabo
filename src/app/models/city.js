const Mongoose = require('../../config/db').Mongoose,
      Schema = Mongoose.Schema;

const citySchema = new Schema({
    cityId : {
        type : Number,
        required : true,
        index : true
    },
    cityName : {
        type : String,
        required : true
    }
});

module.exports = Mongoose.model('Cites',citySchema,'Cites');