const Mongoose = require('../../config/db').Mongoose,
      Schema = Mongoose.Schema;

const userSchema = new Schema({
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
            trim: true
      },
      password : {
            type : String,
            required : true,
            min : 6
      },
      phones : {
            type : [String],
            required : true,
      },
      email : {
            type : [String],
            required : true,
            lowercase : true
      },
      photo : {
            type : String,
            required : true,
            trim : true
      },
      addresses : {
            type : [Object],
            required : true
      },
      pickup_places : {
            type : [Object],
            required : true
      },
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
      module.exports = Mongoose.model('users',userSchema,'users');