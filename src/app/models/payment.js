const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;

const paymentSchema = new Schema({
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
    amount : {
        type : Number,
        required : true
    },
    paymentStatus : {
        type : String,
        required : true,
        default : 'DUE'
    },
    paymentMonth : {
        type : Date,
        required : true
    },
    status : {
        type : Boolean,
        required : true,
        default : false
    }
},{
    timestamps: true
});
module.exports = Mongoose.model('payment',paymentSchema,'payment');