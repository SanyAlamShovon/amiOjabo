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
 module.exports = {
    all,
    create
  };