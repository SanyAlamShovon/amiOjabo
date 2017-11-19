const Joi = require('joi');

const all = {
    params: {
      _id: Joi.number().required(),
    }
  };
const create = {
  payload : {
    name : Joi.string().required(),
    password : Joi.string().required(),
    phone : Joi.string().required(),
    email : Joi.string().email().required(),
    photo : Joi.string(),
    addresses : Joi.object().keys({
      cityName : Joi.string().trim(),
      areaName : Joi.string().trim(),
      details : Joi.string().trim()
    }),
    pickupPlaces : Joi.object().keys({
      cityName : Joi.string().trim(),
      areaName : Joi.string().trim(),
      details : Joi.string().trim()
    })
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
    name : Joi.string().required(),
    password : Joi.string().required(),
    phones : Joi.array().items(Joi.string().required()),
    email : Joi.array().items(Joi.string().email().required()),
    photo : Joi.string().required(),
    addresses : Joi.object().keys({
      cityName : Joi.string().trim().required(),
      areaName : Joi.string().trim().required(),
      details : Joi.string().trim().required()
    }),
    pickupPlaces : Joi.object().keys({
      cityName : Joi.string().trim().required(),
      areaName : Joi.string().trim().required(),
      details : Joi.string().trim().required()
    }),
    status : Joi.boolean().required(),
    isBlocked : Joi.boolean().required()
  }
}

const destroy = {
  params : {
    _id : Joi.number().required()
  }
};

const verifyCredentials = {
    payload: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
};

module.exports = {
  all,
  create,
  byId,
  update,
  destroy,
  verifyCredentials
};
