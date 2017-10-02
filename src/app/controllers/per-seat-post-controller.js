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
      const data =  await perSeatPostModel.find({_id : request.params._id});
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
     const data =  await perSeatPostModel.update({_id : request.params._id},request.payload);
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
      const data = await perSeatPostModel.remove({_id : request.params._id});
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