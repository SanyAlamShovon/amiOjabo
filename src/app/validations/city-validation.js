const Joi = require('joi');

const all = {
    params: {
      cityId: Joi.number().required(),
      cityName: Joi.string().required()
    }
  };

 module.exports = {
    all
  };