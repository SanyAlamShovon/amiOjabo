const Joi = require('joi');

const all = {
    params: {
      serial: Joi.number().required(),
    }
  };
const create = {
  payload : {
    serial: Joi.number(),
    name : Joi.string().required().trim(),
    phone : Joi.string().required(),
    licenceNumber : Joi.string().required(),
    password : Joi.string().required(),
    gender : Joi.string(),
    vehicles : Joi.object().keys({
      vehicleName : Joi.string().required(),
      vehicleCapacity : Joi.number().required(),
      vehiclePhotos : Joi.array().items(Joi.string()),
      fuel : Joi.string().required()
    }),
    commision : Joi.number().required(),
    perKMPrice : Joi.number().required(),
    status : Joi.boolean(),
    isBlock : Joi.boolean()
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
    name : Joi.string().required().trim(),
    phone : Joi.string().required(),
    licenceNumber : Joi.string(),
    vehicles : Joi.object().keys({
      vehicleName : Joi.string(),
      vehicleCapacity : Joi.number(),
      vehiclePhotos : Joi.array().items(Joi.string()),
      fuel : Joi.string()
    }),
    commision : Joi.number(),
    minCharge : Joi.number(),
    status : Joi.boolean(),
    isBlock : Joi.boolean()
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
