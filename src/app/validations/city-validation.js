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
    cityName: Joi.string().required(),
    status: Joi.boolean()   
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
    cityName : Joi.string().required(),
    status : Joi.boolean()
  }
} 

const destroy = {
  params : {
    id : Joi.number().required()
  }
}

const activeInactive = {
  params : {
    id : Joi.number().required(),
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