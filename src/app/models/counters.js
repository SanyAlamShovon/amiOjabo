const Mongoose = require('../../config/db').Mongoose,
      Schema = Mongoose.Schema;

const countersSchema = new Schema({
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
    seq : {
        type : Number,
        default : 0
    }
},{
    timestamps: true
});

module.exports = Mongoose.model('Counters',countersSchema,'Counters');
