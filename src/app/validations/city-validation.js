const Joi = require('joi');

const all = {
    params: {
      cityId: Joi.number().required(),
      cityName: Joi.string().required()
    }
  };
const create = {
  payload : {
    cityId: Joi.number().required(),
    cityName: Joi.string().required()   
  }
}

const byId = {
  params : {
    id : Joi.number().required()
  }
}
 module.exports = {
    all,
    create,
    byId
  };