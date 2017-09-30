const Joi = require('joi');

const all = {
    params: {
      _id: Joi.number().required(),
    }
  };
const create = {
  payload : {
    _id: Joi.number().required(),
    name : Joi.string().required().max(50).min(5),
    permanentAddress : Joi.object().keys({
      cityName : Joi.string().required(),
      areaName : Joi.string().required(),
      details : Joi.string().required()
    }),
    presentAddress : Joi.object().keys({
      cityName : Joi.string().required(),
      areaName : Joi.string().required(),
      details : Joi.string().required()
    }),
    phones : Joi.array().items(Joi.string()required()),
    hasOwnVehicle : Joi.boolean().required(),
    hasLicenses : Joi.boolean().required(),
    status : Joi.boolean().required(),
    isCalled : Joi.boolean().required(),
    isInterviewed : Joi.boolean().required()    
  }
}

const byId = {
  params : {
    _id : Joi.number().required()
  }
}

const update = {
  params : {
    _id : Joi.number().required()
  },
  payload : {
    _id : Joi.number().required(),
    name : Joi.string().required().max(50).min(5),
    permanentAddress : Joi.object().keys({
      cityName : Joi.string().required(),
      areaName : Joi.string().required(),
      details : Joi.string().required()
    }),
    presentAddress : Joi.object().keys({
      cityName : Joi.string().required(),
      areaName : Joi.string().required(),
      details : Joi.string().required()
    }),
    phones : Joi.array().items(Joi.string().required()),
    hasOwnVehicle : Joi.boolean().required(),
    hasLicenses : Joi.boolean().required(),
    status : Joi.boolean().required(),
    isCalled : Joi.boolean().required(),
    isInterviewed : Joi.boolean().required() 
  }
} 

const destroy = {
  params : {
    _id : Joi.number().required()
  }
}
module.exports = {
  all,
  create,
  byId,
  update,
  destroy
};