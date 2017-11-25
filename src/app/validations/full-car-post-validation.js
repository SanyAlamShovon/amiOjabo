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
    postType : Joi.string().required(),
    trip : Joi.object().keys({
      startDate : Joi.date().required(),
      endDate : Joi.date().required(),
      startTime : Joi.date().required(),
      endTime : Joi.date().required(),
      startPlace : Joi.string().required(),
      endPlace : Joi.string().required(),
      waypoints : Joi.array().items(Joi.string().required())
    }),
    totalPrice : Joi.number().required(),
    status : Joi.boolean().required()
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
    postType : Joi.string().required(),
    trip : Joi.object().keys({
      startDate : Joi.date().required(),
      endDate : Joi.date().required(),
      startTime : Joi.date().required(),
      endTime : Joi.date().required(),
      startPlace : Joi.string().required(),
      endPlace : Joi.string().required(),
      waypoints : Joi.array().items(Joi.string().required())
    }),
    totalPrice : Joi.number().required(),
    status : Joi.boolean().required()
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
