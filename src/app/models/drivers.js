const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;

const driversSchema = new Schema({
    _id : {
        type : Number,
        required : true,
        index: { 
            unique: true 
        }
    },
    name : {
        type : String,
        required : true,
        trim : true
    },
    phones : {
        type: [String],
        required : true
    },
    licenceNumber : {
        type : String,
        required : true,
        trim : true
    },
    vehicles : {
        vehicleId : {
            type : Number,
            required : true
        },
        vehicleName : {
            type :  String,
            required : true,
            trim : true
        },
        vehicleModel : {
            type : String,
            required : true
        },
        vehicleCapacity : {
            type : Number,
            required : true
        },
        vehiclePhotos : {
            type : [String],
            required : true
        },
        vehicleColor : {
            type : String,
            required : true
        }
    },
    commision : {
        type : Number,
        required : true
    },
    minCharge : {
        type : Number,
        required : true
    },
    perKMPrice : {
        type : Number,
        required : true
    },
    status : {
        type : Boolean,
        required : true,
        default : false
    },
    isBlock : {
        type : Boolean,
        required : true
    }
},{
    timestamps: true
});
module.exports = Mongoose.model('drivers',driversSchema,'drivers');