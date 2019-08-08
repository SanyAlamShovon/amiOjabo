const Joi = require('joi');

const all = {
    params: {
      serial: Joi.number().required(),
    }
  };
const create = {
  payload : {
    serial: Joi.number().required(),
    driverId : Joi.number().required(),
    postId : Joi.number().required(),
    passengers : Joi.array().items(Joi.object({
      serial : Joi.number().required(),
      seatPurchase : Joi.number().required(),
      cost : Joi.number().required(),
      paymentStatus : Joi.string().required()
    })),
    status : Joi.boolean()
  }
}

const byId = {
  params : {
    serial : Joi.number().required()
  }
}

const update = {
  params : {
    serial : Joi.number().required()
  },
  payload : {
    serial : Joi.number().required(),
    driverId : Joi.number().required(),
    postId : Joi.number().required(),
    passengers : Joi.array().items(Joi.object({
      serial : Joi.number().required(),
      seatPurchase : Joi.number().required(),
      cost : Joi.number().required(),
      paymentStatus : Joi.string().required()
    })),
    status : Joi.boolean()
  }
}

const destroy = {
  params : {
    serial : Joi.number().required()
  }
}
module.exports = {
  all,
  create,
  byId,
  update,
  destroy
};
