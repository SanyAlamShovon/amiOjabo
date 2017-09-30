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
    postId : Joi.number().required(),
    passengers : Joi.array().items(Joi.object({
      _id : Joi.number().required(),
      seatPurchase : Joi.number().required(),
      cost : Joi.number().required(),
      paymentStatus : Joi.string().required()
    })),
    status : Joi.boolean()  
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
    postId : Joi.number().required(),
    passengers : Joi.array().items(Joi.object({
      _id : Joi.number().required(),
      seatPurchase : Joi.number().required(),
      cost : Joi.number().required(),
      paymentStatus : Joi.string().required()
    })),
    status : Joi.boolean()  
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