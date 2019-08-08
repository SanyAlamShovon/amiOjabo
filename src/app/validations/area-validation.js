const Joi = require('joi');

const all = {
    params: {
      serial: Joi.number().required(),
      areaName: Joi.string().required()
    }
  };
const create = {
  payload : {
    serial: Joi.number().required(),
    areaName: Joi.string().required(),
    cityId: Joi.number().required()
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
    areaName : Joi.string().required()
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
