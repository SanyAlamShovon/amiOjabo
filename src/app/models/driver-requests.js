const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;

const driverRequestsSchema = new Schema({
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
    email : {
      type : String,
      trim : true
    },
    cityName : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    hasOwnVehicle : {
        type : String,
        default : "NO"
    },
    vehicleType : {
        type : String,
    },
    hasLicenses : {
        type : String,
        default : "NO"
    },
    status : {
        type : Boolean,
        default : false
    },
    isCalled : {
        type : Boolean,
        default : false
    },
    isInterviewed : {
        type : Boolean,
        default : false
     },
    isSelected : {
        type : Boolean,
        default : false
    },
    onProcess : {
        type : Boolean,
        default : false
    }
},{
    timestamps: true
});
module.exports = Mongoose.model('driverRequests',driverRequestsSchema,'driverRequests');
