const Joi = require('joi');

const all = {
    params: {
      serial: Joi.number().required(),
    }
  };
const create = {
  payload : {
    serial: Joi.number().required(),
    driverId : Joi.number().required(),
    amount : Joi.number().required(),
    paymentStatus : Joi.string().required(),
    paymentMonth : Joi.date().required(),
    status : Joi.boolean().required()
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
    driverId : Joi.number().required(),
    amount : Joi.number().required(),
    paymentStatus : Joi.string().required(),
    paymentMonth : Joi.date().required(),
    status : Joi.boolean().required()
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
