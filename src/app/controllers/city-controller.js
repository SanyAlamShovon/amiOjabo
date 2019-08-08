const Boom = require('boom');
const cityModel = require('.././models/city');
const db = require('../../config/db');
const ucFirst = require('uppercase-first');
const all = {
  async: async function (request, reply) {
    try {
      const data = await cityModel.find({status : true},{__v:0,_id:0,status:0,updatedAt:0,createdAt:0});
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
      const city = new cityModel(request.payload);
      city.serial = await cityModel.find({}).count() + 1;
      city.cityName = ucFirst(city.cityName);
      const data =  await city.save();
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
      const data =  await cityModel.find({serial : request.params.serial,status : true});
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
     const data =  await cityModel.findOneAndUpdate(
       {
         serial : request.params.serial
       },
       request.payload,
       {
         upsert:true, new : true,
         select:{
           __v:0,status:0,
         }
       }
     );
     if(data === null || data === undefined)reply({}).code(404);
     else reply(data).code(200)
    }catch(err){
      reply(Boom.badRequest(err.toString())),code(400);
    }
  }
}

const destroy = {
  async : async function(request,reply){
    try{
      const data = await cityModel.remove({serial : request.params.serial});
      if(data == null || data === undefined)reply({}).code(404);
      else reply({}).code(200);
    }catch(err){
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
}

const activeInactive = {
  async : async function(request,reply){
    try{
      const data = await cityModel.findByIdAndUpdate({
        serial : request.params.serial
      },{
        $set : {
          status : request.params.status
        }
      });
      if(data == null || data === undefined)reply({}).code(404);
      else reply({}).code(200);
    }catch(err){
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
}

async function socketDelete(server,serial,params){
  try{
    const data = await cityModel.findOneAndUpdate({serial : serial},params.city,{new:true,select:{__v:0}});
    if(data == null || data === undefined)return 404;
    else return data;
  }catch(err){
    return err;
  }
}
module.exports = {
    all,
    create,
    byId,
    update,
    destroy,
    activeInactive,
    socketDelete
}
