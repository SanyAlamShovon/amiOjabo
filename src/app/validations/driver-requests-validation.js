const Joi = require('joi');

const all = {
    params: {
      serial: Joi.number().required(),
    }
  };
const create = {
  payload : {
    name : Joi.string().required().max(50).min(2),
    gender : Joi.string().required(),
    email : Joi.string(),
    vechileType : Joi.string(),
    cityName : Joi.string().required(),
    phone : Joi.string().required(),
    hasOwnVehicle : Joi.string().required(),
    hasLicenses : Joi.string().required()
  }
}

const byId = {
  params : {
    serial : Joi.number().required()
  }
}

const update = {
  params : {
    serial : Joi.number().required()
  },
  payload : {
    serial : Joi.number().required(),
    name : Joi.string().required().max(50).min(5),
    cityName : Joi.string().required(),
    phone : Joi.string().required(),
    hasOwnVehicle : Joi.string().required(),
    hasLicenses : Joi.string().required(),
    status : Joi.boolean().required(),
    isCalled : Joi.boolean().required(),
    isInterviewed : Joi.boolean().required()
  }
}

const destroy = {
  params : {
    serial : Joi.number().required()
  }
}
module.exports = {
  all,
  create,
  byId,
  update,
  destroy
};
