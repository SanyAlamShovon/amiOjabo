const Joi = require('joi');

const all = {
    params: {
      serial: Joi.number().required(),
    }
  };
const create = {
  payload : {
    serial: Joi.number().required(),
    reviewingId : Joi.number().required(),
    forWhom : Joi.string().required(),
    reviewerId : Joi.number().required(),
    reviewMessage : Joi.string().required(),
    starRating : Joi.number(),
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
    reviewingId : Joi.number().required(),
    forWhom : Joi.string().required(),
    reviewerId : Joi.number().required(),
    reviewMessage : Joi.string().required(),
    starRating : Joi.number(),
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
