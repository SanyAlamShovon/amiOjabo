const db = require('../../config/db');
const counters = require('./../models/counters');
const getNextSequence = (name) => {
   var ret = counters.findAndModify(
          {
            query: { _id: name },
            update: { $inc: { seq: 1 } },
            new: true,
            upsert: true
          }
   );
   return ret.seq;
}

module.exports = {
  getNextSequence
}
