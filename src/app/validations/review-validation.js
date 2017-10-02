const Joi = require('joi');

const all = {
    params: {
      _id: Joi.number().required(),
    }
  };
const create = {
  payload : {
    _id: Joi.number().required(),
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
    _id : Joi.number().required()
  }
}

const update = {
  params : {
    _id : Joi.number().required()
  },
  payload : {
    _id : Joi.number().required(),
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