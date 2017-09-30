const paymentController = require('.././controllers/payment-controller');
const paymentValidation = require('.././validations/payment-validation');

const payment = [
    {
      method: 'GET',
      path: '/api/v1/payment',
      config: {
        tags: ['api'],
        description: 'Get payment Information',
        handler: paymentController.all
      }
    },
    {
      method: 'POST',
      path: '/api/v1/payment',
      config: {
        tags: ['api'],
        description: 'Create New payment',
        handler : paymentController.create,
        validate : paymentValidation.create
      }
    },
    {
      method: 'GET',
      path: '/api/v1/payment/{id}',
      config: {
        tags: ['api'],
        description: 'Get Single payment Information',
        handler: paymentController.byId,
        validate : paymentValidation.byId
      }
    },
    {
      method: 'PUT',
      path: '/api/v1/payment/{id}',
      config: {
        tags: ['api'],
        description: 'Update Single payment Information',
        handler: paymentController.update,
        validate : paymentValidation.update
      }
    },
    {
      method: 'DELETE',
      path: '/api/v1/payment/{id}',
      config: {
        tags: ['api'],
        description: 'Delete Single payment Information',
        handler: paymentController.destroy,
        validate : paymentValidation.destroy
      }
    }
  ];
  
  module.exports = {
    payment
  };