const Boom = require('boom');
const driverModel = require('.././models/drivers');
const userModel = require('.././models/users');
const bcrypt = require('bcrypt');
const db = require('../../config/db');
const all = {
  async: async function (request, reply) {
    try {
      const data = await driverModel.find({status:true,isBlock:false});
      if(data === null || data === undefined) reply([]).code(404);
      else  reply(data).code(200);
    } catch (err) {
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
};
const blocked = {
  async: async function (request, reply) {
    try {
      const data = await driverModel.find({status:true,isBlock:true});
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
      const driver = new driverModel(request.payload);
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(request.payload.password, salt);
      let userPayload = {
        name : request.payload.name,
        phone : request.payload.phone,
        email : request.payload.email,
        password : hash,
        role : "DRIVER"
      }
      const user = new userModel(userPayload);
      user.serial = Number((Math.random() * 11000000000000 + 1).toFixed());

      await user.save();
      driver.serial = Number((Math.random() * 11000000000000 + 1).toFixed());
      const data =  await driver.save();
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
      const data =  await driverModel.find({_id : request.params.id});
      if(data === null || data === undefined) reply({}).code(404);
      else  reply(data).code(200);

    } catch (err) {
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
}
const byEmail = {
  async: async function (request, reply) {
    try {
      console.log("request.params.id",request.params.email)
      const data =  await driverModel.find({email : request.params.email});
      console.log("data",data);
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
     const data =  await driverModel.update({serial : request.params.serial},request.payload);
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
      const data = await driverModel.remove({serial : request.params.serial});
      if(data == null || data === undefined)reply({}).code(404);
      else reply({}).code(200);
    }catch(err){
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
}
//SOCKET
async function socketBlockedDriver(server,params){
  try{
     const data =  await driverModel.findOneAndUpdate({_id : params.id},{
         $set : {
             isBlock : true
         }
     },{upsert:true, new : true});
     if(data === null || data === undefined)return 404;
     else return data;
  }catch(err){
    return err
  }
}

async function socketUnblockedDriver(server,params){
  try{
     const data =  await driverModel.findOneAndUpdate({_id : params.id},{
         $set : {
             isBlock : false
         }
     },{upsert:true, new : true});
     if(data === null || data === undefined)return 404;
     else return data;
  }catch(err){
    return err
  }
}

async function socketDeleteDriver(server,params){
  try{
     const data =  await driverModel.findOneAndUpdate({_id : params.id},{
         $set : {
             status : false
         }
     },{upsert:true, new : true});
     if(data === null || data === undefined)return 404;
     else return data;
  }catch(err){
    return err
  }
}
module.exports = {
    all,
    create,
    byId,
    update,
    destroy,
    byEmail,
    socketBlockedDriver,
    socketUnblockedDriver,
    socketDeleteDriver,
    blocked
}
