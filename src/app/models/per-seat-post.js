const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;

const perSeatPostSchema = new Schema({
    serial : {
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
            type : Date
        },
        startTime : {
            type : Date,
            required : true
        },
        endTime : {
            type : Date
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
    },
    isSuccess : {
      type: Boolean,
      default : false
    },
    isBlocked : {
      type : Boolean,
      required : true,
      default : false
    }
},{
    timestamps: true
});
module.exports = Mongoose.model('perSeatPost',perSeatPostSchema,'perSeatPost');
