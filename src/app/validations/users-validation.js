const Joi = require('joi');

const all = {
  params: {
    serial: Joi.number().required(),
  }
};
const blocked = {
  params: {
    isBlocked: Joi.boolean().required(),
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
    serial : Joi.number().required()
  }
}

const byEmail = {
  params : {
    email : Joi.string().required()
  }
}
const update = {
  params : {
    serial : Joi.number().required()
  },
  payload : {
    serial : Joi.number(),
    name : Joi.string().required(),
    password : Joi.string(),
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
    }),
    status : Joi.boolean(),
    isBlocked : Joi.boolean(),
    createdAt : Joi.date(),
    updatedAt : Joi.date(),
  }
}

const destroy = {
  params : {
    serial : Joi.number().required()
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
  blocked,
  create,
  byId,
  byEmail,
  update,
  destroy,
  verifyCredentials
};
