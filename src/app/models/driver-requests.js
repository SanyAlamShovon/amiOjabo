const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;

const driverRequestsSchema = new Schema({
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
    permanentAddress : {
        cityName : {
            type : String,
            required : true
        },
        areaName : {
            type : String,
            required : true
        },
        details : {
            type : String
        }
    },
    presentAddress : {
        cityName : {
            type : String,
            required : true
        },
        areaName : {
            type : String,
            required : true
        },
        details : {
            type : String
        }
    },
    phones : {
        type : [String],
        required : true
    },
    hasOwnVehicle : {
        type : Boolean,
        required : true,
        default : false
    },
    hasLicenses : {
        type : Boolean,
        required : true,
        default : false
    },
    status : {
        type : Boolean,
        required : true,
        default : false
    },
    isCalled : {
        type : Boolean,
        required : true,
        default : false
    },
    isInterviewed : {
        type : Boolean,
        required : true,
        default : false
     }
},{
    timestamps: true
});
module.exports = Mongoose.model('driverRequests',driverRequestsSchema,'driverRequests');