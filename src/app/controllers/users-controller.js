const Boom = require('boom');
const usersModel = require('.././models/users');
const db = require('../../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generate = require('./../helpers/generate');
const createToken = require('./../utils/token');
const all = {
  async: async function (request, reply) {
    try {
      const data = await usersModel.find({status : true,isBlocked : false},{password:0,__v:0,status:0,role:0});
      if(data === null || data === undefined) reply([]).code(404);
      else {
          reply(data).code(200);
      }
    } catch (err) {
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
};
const blocked = {
  async: async function (request, reply) {
    try {
      const data = await usersModel.find({isBlocked : request.params.isBlocked},{_id:0,password:0,__v:0,status:0,role:0});
      if(data === null || data === undefined) reply([]).code(404);
      else {
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
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(request.payload.password, salt);
      user.password = hash;
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
      const data =  await usersModel.find({serial : request.params.serial});
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
      const data =  await usersModel.findOne({email: request.params.email},{password:0});
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
      console.log(request.payload);
     const data =  await usersModel.update({serial : request.params.serial},request.payload);
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
      const data = await usersModel.remove({serial : request.params.serial});
      if(data == null || data === undefined)reply({}).code(404);
      else reply({}).code(200);
    }catch(err){
      reply(Boom.badRequest(err.toString())).code(400);
    }
  }
};
const verifyCredentials = {
    async: async function (request, reply) {
        try {
          let password = request.payload.password;
            const data = await usersModel.findOne({email : request.payload.email, status : true});
            if (data === null || data === undefined) {
                reply({'message': 'Incorrect  email or password!',status : 401}).code(200);
            } else {
                const compare = bcrypt.compareSync(password, data.password);
                if (compare) {
                    reply(
                        {
                            access_token: createToken(data),
                            user: generate.renderUserData(data)
                        }
                    ).code(200);
                } else {
                    reply({'message': 'Incorrect  email or password!',status : 401}).code(200);
                }
            }
        } catch (err) {
            reply(Boom.badRequest(err.toString())).code(400);
        }
    }
};

//For Socket IO
async function socketUpdate(server,serial,params){
  try{
     console.log(params," Serial : "+serial);
     const data =  await usersModel.update({serial : serial},params.user);
     //console.log("data: ",data)
     if(data === null || data === undefined)return 404;
     else return 204
  }catch(err){
    return err
  }
}
async function socketGet(server, params) {
  try {
    console.log("###########################################################");
    console.log(params);
    const data = await usersModel.find({status : true, isBlocked : false},{password:0,__v:0,status:0,role:0});
    if(data === null || data === undefined) return 404;
    else {
      return data;
    }
  } catch (err) {
    return err
  }
}
module.exports = {
    all,
    blocked,
    create,
    byId,
    byEmail,
    update,
    destroy,
    verifyCredentials,
    socketUpdate,
    socketGet
}
