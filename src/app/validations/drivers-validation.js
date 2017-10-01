const Joi = require('joi');

const all = {
    params: {
      _id: Joi.number().required(),
    }
  };
const create = {
  payload : {
    _id: Joi.number().required(), 
    name : Joi.string().required().trim(),
    phones : Joi.array().items(Joi.string().required()),
    licenceNumber : Joi.string().required(),
    vehicles : Joi.object().keys({
      vehicleId : Joi.number().required(),
      vehicleName : Joi.string().required(),
      vehicleModel : Joi.string().required(),
      vehicleCapacity : Joi.number().required(),
      vehiclePhotos : Joi.array().items(Joi.string().required()),
      vehicleColor : Joi.string().required(),
      fuel : Joi.string().required()
    }),
    commision : Joi.number().required(),
    minCharge : Joi.number().required(),
    perKMPrice : Joi.number().required(),
    status : Joi.boolean().required(),
    isBlock : Joi.boolean().required()
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
    name : Joi.string().required().trim(),
    phones : Joi.array().items(Joi.string().required()),
    licenceNumber : Joi.string().required(),
    vehicles : Joi.object().keys({
      vehicleId : Joi.number().required(),
      vehicleName : Joi.string().required(),
      vehicleModel : Joi.string().required(),
      vehicleCapacity : Joi.number().required(),
      vehiclePhotos : Joi.array().items(Joi.string().required()),
      vehicleColor : Joi.string().required(),
      fuel : Joi.string().required()
    }),
    commision : Joi.number().required(),
    minCharge : Joi.number().required(),
    perKMPrice : Joi.number().required(),
    status : Joi.boolean().required(),
    isBlock : Joi.boolean().required()
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