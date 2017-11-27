const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;

const driversSchema = new Schema({
    serial : {
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
    phone : {
        type: String,
        required : true
    },
    gender : {
      type : String,
      trim: true,
      required : true
    },
    licenceNumber : {
        type : String,
        required : true,
        trim : true
    },
    vehicles : {
        vehicleName : {
            type :  String,
            required : true,
            trim : true
        },
        vehicleCapacity : {
            type : Number,
            required : true
        },
        vehiclePhotos : {
            type : [String]
        },
        fual : {
            type : String,
            default : 'patrol'
        }
    },
    commision : {
        type : Number,
        required : true
    },
    perKMPrice : {
        type : Number,
        required : true
    },
    status : {
        type : Boolean,
        default : true
    },
    isBlock : {
        type : Boolean,
        default : false
    }
},{
    timestamps: true
});
module.exports = Mongoose.model('drivers',driversSchema,'drivers');
