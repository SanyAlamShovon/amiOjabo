const Boom = require('boom');
const usersModel = require('.././models/users');
const db = require('../../config/db');
const all = {
  async: async function (request, reply) {
    try {
      const data = await usersModel.find({});
      if(data === null || data === undefined) reply([]).code(404);
      else {
          io.on("connection", function (socket) {

            console.log('connected');
            socket.emit('news', { hello: 'world' });
           });
          reply(data).code(200);
      }
    } catch (err) {
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
};
const create = {
  async: async function (request, reply) {
    try {
      const user = new usersModel(request.payload);
      user.serial = await usersModel.find({}).count() + 1;
      user.role = "USER";
      const data =  await user.save();
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
      const data =  await usersModel.find({_id : request.params._id});
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
     const data =  await usersModel.update({_id : request.params._id},request.payload);
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
      const data = await usersModel.remove({_id : request.params._id});
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
