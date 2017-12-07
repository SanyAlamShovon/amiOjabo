const Boom = require('boom');
const driverRequestModel = require('.././models/driver-requests');
const db = require('../../config/db');
const all = {
  async: async function (request, reply) {
    try {
      const data = await driverRequestModel.find({});
      if(data === null || data === undefined) reply([]).code(404);
      else  reply(data).code(200);
    } catch (err) {
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
};
const inactive = {
  async: async function (request, reply) {
    try {
      const data = await driverRequestModel.find({status:false,onProcess:false,isSelected:false});
      if(data === null || data === undefined) reply([]).code(404);
      else  reply(data).code(200);
    } catch (err) {
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
};
const onprocess = {
  async: async function (request, reply) {
    try {
      const data = await driverRequestModel.find({status:false,onProcess:true,isSelected:false});
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
      driverRequest.serial = await driverRequestModel.find({}).count() + 1;
      console.log("driverRequest",driverRequest);
      const data =  await driverRequest.save();
        console.log('########################################');
        console.log("data",data)
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
      const data =  await driverRequestModel.find({serial : request.params.serial});
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
     const data =  await driverRequestModel.update({serial : request.params.serial},request.payload);
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
      const data = await driverRequestModel.remove({serial : request.params.serial});
      if(data == null || data === undefined)reply({}).code(404);
      else reply({}).code(200);
    }catch(err){
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
}

//For Socket IO
async function socketUpdate(server,serial,params){
  try{
     const data =  await driverRequestModel.findOneAndUpdate({serial : serial},params.driver,{upsert:true, new : true,select:{__v:0,status:0}});
     if(data === null || data === undefined)return 404;
     else return data
  }catch(err){
    return err
  }
}

module.exports = {
    all,
    inactive,
    onprocess,
    socketUpdate,
    create,
    byId,
    update,
    destroy
}
