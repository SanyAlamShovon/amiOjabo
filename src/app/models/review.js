const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;

const reviewSchema = new Schema({
    _id : {
        type : Number,
        required : true,
        index: { 
            unique: true 
        }
    },
    reviewingId : {
        type : Number,
        required : true
    },
    forWhom : {
        type : String,
        required : true
    },
    reviewerId : {
        type : Number,
        required : true
    },
    reviewMessage : {
        type : String
    },
    starRating : {
        type : Number
    },
    status : {
        type : Boolean,
        required : true,
        default : false
    }
},{
    timestamps: true
});
module.exports = Mongoose.model('review',reviewSchema,'review');