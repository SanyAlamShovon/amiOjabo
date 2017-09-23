const Boom = require('boom');

const all = {
    async: async function (request, reply) {
      try {
        const data =  "Hello From Cities";
        if(data === null || data === undefined) reply([]).code(404);
        else  reply(data).code(200);
      } catch (err) {
        reply(Boom.badRequest(err.toString())).code(400);
      }
    }
  };

  module.exports = {
      all
  }