const Mongoose = require('../../config/db').Mongoose,
Schema = Mongoose.Schema;

const fullCarPostSchema = new Schema({
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
        default : 'FCP'
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
    totalPrice : {
        type : Number,
        required : true,
        default : 0
    },
    isSuccess : {
      type : Boolean,
      default : false;
    }
    status : {
        type : Boolean,
        required : true,
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
module.exports = Mongoose.model('fullCarPost',fullCarPostSchema,'fullCarPost');
