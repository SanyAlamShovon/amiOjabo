const Boom = require('boom');
const perSeatPostModel = require('.././models/per-seat-post');
const db = require('../../config/db');
const all = {
  async: async function (request, reply) {
    try {
      const data = await perSeatPostModel.find({});
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
      const perSeatPost = new perSeatPostModel(request.payload);
      perSeatPost.serial = await perSeatPostModel.find({}).count() + 1;
      const data =  await perSeatPost.save();
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
      const data =  await perSeatPostModel.find({serial : request.params.serial});
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
     const data =  await perSeatPostModel.update({serial : request.params.serial},request.payload);
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
      const data = await perSeatPostModel.remove({serial : request.params.serial});
      if(data == null || data === undefined)reply({}).code(404);
      else reply({}).code(200);
    }catch(err){
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
}

//Socket
async function socketCreate(server,serial,params) {
    try {
      const perSeatPost = new perSeatPostModel(request.payload);
      perSeatPost.passengers = perSeatPost.passengers || [];
      perSeatPost.perSeatPrice = 0;
      perSeatPost.serial = await perSeatPostModel.find({}).count() + 1;
      const data =  await perSeatPost.save();
      if(data === null || data === undefined) return 404;
      else  return data;
    } catch (err) {
      return 400;
    }
  }
module.exports = {
    all,
    create,
    byId,
    update,
    destroy,
    socketCreate
}
