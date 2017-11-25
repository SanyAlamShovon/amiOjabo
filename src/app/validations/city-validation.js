const Joi = require('joi');

const all = {
    params: {
      serial: Joi.number().required(),
      cityName: Joi.string().required()
    }
  };
const create = {
  payload : {
    serial: Joi.number().required(),
    cityName: Joi.string().required(),
    status: Joi.boolean()
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
    cityName : Joi.string().required(),
    status : Joi.boolean()
  }
}

const destroy = {
  params : {
    serial : Joi.number().required()
  }
}

const activeInactive = {
  params : {
    serial : Joi.number().required(),
    status : Joi.boolean().required()
  }
}
module.exports = {
  all,
  create,
  byId,
  update,
  destroy,
  activeInactive
};
