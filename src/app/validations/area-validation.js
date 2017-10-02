const Joi = require('joi');

const all = {
    params: {
      _id: Joi.number().required(),
      areaName: Joi.string().required()
    }
  };
const create = {
  payload : {
    _id: Joi.number().required(),
    areaName: Joi.string().required(),
    cityId: Joi.number().required()     
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
    areaName : Joi.string().required()
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