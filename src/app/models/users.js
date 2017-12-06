const Mongoose = require('../../config/db').Mongoose,
      Schema = Mongoose.Schema;

const userSchema = new Schema({
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
            trim: true
      },
      password : {
            type : String,
            required : true,
            min : 2
      },
      phone : {
            type : String,
            required : true,
      },
      email : {
            type : String,
            required : true,
            lowercase : true
      },
      photo : {
            type : String,
            trim : true
      },
      role : {
            type : String,
            required : true,
            trim : true,
            default : 'USER'
      },
      addresses : {
            cityName : {
                  type : String,
                  trim : true
            },
            areaName : {
                  type : String,
                  trim : true
            },
            details : {
                  type : String,
                  trim : true
            }
      },
      pickupPlaces : {
            cityName : {
                  type : String,
                  trim : true
            },
            areaName : {
                  type : String,
                  trim : true
            },
            details : {
                  type : String,
                  trim : true
            }
      },
      status : {
            type : Boolean,
            default : true
      },
      rating : {
        type: Number,
        default :0
      },
      ratedBy : {
        type : Number,
        default : 0
      },
      isBlocked : {
            type : Boolean,
            default : false
      }
},{
      timestamps: true
});
module.exports = Mongoose.model('users',userSchema,'users');
