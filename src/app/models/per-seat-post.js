const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;

const perSeatPostSchema = new Schema({
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
    postType : {
        type : String,
        required : true,
        default : 'PSP'
    },
    trip : {
        startDate : {
            type : Date,
            required : true
        },
        endDate : {
            type : Date,
            required : true
        },
        startTime : {
            type : Date,
            required : true
        },
        endTime : {
            type : Date,
            required : true
        },
        startPlace : {
            type : String,
            required : true
        },
        endPlace : {
            type : String,
            required : true
        },
        waypoints : {
            type :[String],
            default : null
        }
    },
    availableCapacity : {
        type : Number,
        required : true,
        default : 0
    },
    perSeatPrice : {
        type : Number,
        required : true,
        default : 0
    },
    status : {
        type : Boolean,
        required : true,
        default : false
    }
},{
    timestamps: true
});
module.exports = Mongoose.model('perSeatPost',perSeatPostSchema,'perSeatPost');