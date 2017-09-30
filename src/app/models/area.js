const Mongoose = require('../../config/db').Mongoose,
      Schema = Mongoose.Schema;

const areaSchema = new Schema({
    _id : {
        type : Number,
        required : true,
        index: { 
            unique: true 
        }
    },
    areaName : {
        type : String,
        required : true,
        trim: true
    },
    cityId : {
        type : Mongoose.Schema.Types.ObjectId,
        ref : 'Cites'
    }
},{
    timestamps: true
});
const area = Mongoose.model('area',areaSchema,'area');
// area.findById({cityId : 1}).populate('cityId')
// .exec(function(err, area) {
//     console.log(area.cityId);
// });
module.exports = area;