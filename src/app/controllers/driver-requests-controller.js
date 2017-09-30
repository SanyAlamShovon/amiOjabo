const Boom = require('boom');
const driverRequestModel = require('.././models/driver-requests');
const db = require('../../config/db');
const all = {
  async: async function (request, reply) {
    try {
      console.info('test controoler');
      const data = await driverRequestModel.find({});
      if(data === null || data === undefined) reply([]).code(404);
      else  reply(data).code(200);
    } catch (err) {
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
};
const create = {
  async: async function (request, reply) {
    try {
      const driverRequest = new driverRequestModel(request.payload);
      const data =  await driverRequest.save();
      if(data === null || data === undefined) reply({}).code(404);
      else  reply(data).code(201);
    } catch (err) {
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
};

const byId = {
  async: async function (request, reply) {
    try {
      const data =  await driverRequestModel.find({_id : request.params._id});
      if(data === null || data === undefined) reply({}).code(404);
      else  reply(data).code(200);
    } catch (err) {
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
}

const update = {
  async : async function(request,reply){
    try{
     const data =  await driverRequestModel.update({_id : request.params._id},request.payload);
     if(data === null || data === undefined)reply({}).code(404);
     else reply({}).code(204)
    }catch(err){
      reply(Boom.badRequest(err.toString())),code(400);
    }
  }
}

const destroy = {
  async : async function(request,reply){
    try{
      const data = await driverRequestModel.remove({_id : request.params._id});
      if(data == null || data === undefined)reply({}).code(404);
      else reply({}).code(200);
    }catch(err){
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
}
module.exports = {
    all,
    create,
    byId,
    update,
    destroy
}