const Mongoose = require('../../config/db').Mongoose,
      Schema = Mongoose.Schema;

const areaSchema = new Schema({
    _id : {
        type : Number,
        required : true,
        index: { 
            unique: true 
        }
    },
    areaName : {
        type : String,
        required : true,
        trim: true
    }
},{
    timestamps: true
});

module.exports = Mongoose.model('area',areaSchema,'area');