const Boom = require('boom');
const areaModel = require('.././models/area');
const db = require('../../config/db');
const all = {
  async: async function (request, reply) {
    try {
      const data = await areaModel.find({});
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
      const area = new areaModel(request.payload);
      const data =  await area.save();
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
      const data =  await areaModel.find({serial : request.params.serial});
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
     const data =  await areaModel.update({serial : request.params.serial},request.payload);
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
      const data = await areaModel.remove({serial : request.params.serial});
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
