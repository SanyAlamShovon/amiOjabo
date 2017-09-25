const Joi = require('joi');

const all = {
    params: {
      _id: Joi.number().required(),
      cityName: Joi.string().required()
    }
  };
const create = {
  payload : {
    _id: Joi.number().required(),
    cityName: Joi.string().required()   
  }
}

const byId = {
  params : {
    id : Joi.number().required()
  }
}

const update = {
  params : {
    id : Joi.number().required()
  },
  payload : {
    _id : Joi.number().required(),
    cityName : Joi.string().required()
  }
} 

const destroy = {
  params : {
    id : Joi.number().required()
  }
}
module.exports = {
  all,
  create,
  byId,
  update,
  destroy
};