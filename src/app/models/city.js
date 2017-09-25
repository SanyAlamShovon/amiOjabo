const Mongoose = require('../../config/db').Mongoose,
      Schema = Mongoose.Schema;

const citySchema = new Schema({
    _id : {
        type : Number,
        required : true,
        index: { 
            unique: true 
        }
    },
    cityName : {
        type : String,
        required : true,
        trim: true
    }
},{
    timestamps: true
});

module.exports = Mongoose.model('Cites',citySchema,'Cites');