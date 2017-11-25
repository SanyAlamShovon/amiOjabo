const Mongoose = require('../../config/db').Mongoose,
      Schema = Mongoose.Schema;

const citySchema = new Schema({
    serial : {
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
    },
    status : {
        type : Boolean,
        default : true
    }
},{
    timestamps: true
});

module.exports = Mongoose.model('Cites',citySchema,'Cites');
