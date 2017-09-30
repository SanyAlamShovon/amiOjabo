const Joi = require('joi');

const all = {
    params: {
      _id: Joi.number().required(),
    }
  };
const create = {
  payload : {
    _id: Joi.number().required(),
    driverId : Joi.number().required(),
    amount : Joi.number().required(),
    paymentStatus : Joi.string().required(),
    paymentMonth : Joi.date().required(),
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
    driverId : Joi.number().required(),
    amount : Joi.number().required(),
    paymentStatus : Joi.string().required(),
    paymentMonth : Joi.date().required(),
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