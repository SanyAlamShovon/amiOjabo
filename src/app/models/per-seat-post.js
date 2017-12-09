const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;
const user = require('./users');

const perSeatPostSchema = new Schema({
    serial : {
        type : Number,
        required : true,
        index: {
            unique: true
        }
    },
    driverId : {
        type : String,
        required : true
    },
    postType : {
        type : String,
        default : 'PSP'
    },
    trip : {
        startDate : {
            type : Date,
            required : true
        },
        startTime : {
            type : String,
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
        default : 0
    },
    passengers : {
        type : []
    },
    status : {
        type : Boolean,
        default : true
    },
    isSuccess : {
      type: Boolean,
      default : false
    },
    isBlocked : {
      type : Boolean,
      default : false
    },
    isPaid : {
      type : Boolean,
      default : false
    },
    commision : {
      type : Number,
      default : 0
    },
    driverPhone : {
      type : String,
      default : ''
    }
},{
    timestamps: true
});
module.exports = Mongoose.model('perSeatPost',perSeatPostSchema,'perSeatPost');
