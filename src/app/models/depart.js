const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;

const departSchema = new Schema({
    _id : {
        type : Number,
        required : true,
        index: { 
            unique: true 
        }
    },
    driverId : {
        type : Number,
        required : true
    },
    postId : {
        type : Number,
        required : true
    },
    passengers : [{
        _id : {
            type : Number,
            required : true
        },
        seatPurchase : {
            type : Number,
            required : true
        },
        cost : {
            type : Number,
            required : true
        },
        paymentStatus : {
            type : String,
            required : true,
            default : 'DUE'
        }
    }],
    status : {
        type : Boolean,
        required : true
    }
},{
    timestamps: true
});
module.exports = Mongoose.model('depart',departSchema,'depart');