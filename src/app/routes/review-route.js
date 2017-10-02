const reviewController = require('.././controllers/review-controller');
const reviewValidation = require('.././validations/review-validation');

const review = [
    {
      method: 'GET',
      path: '/api/v1/review',
      config: {
        tags: ['api'],
        description: 'Get Review Information',
        handler: reviewController.all
      }
    },
    {
      method: 'POST',
      path: '/api/v1/review',
      config: {
        tags: ['api'],
        description: 'Create New Review',
        handler : reviewController.create,
        validate : reviewValidation.create
      }
    },
    {
      method: 'GET',
      path: '/api/v1/review/{id}',
      config: {
        tags: ['api'],
        description: 'Get Single Review Information',
        handler: reviewController.byId,
        validate : reviewValidation.byId
      }
    },
    {
      method: 'PUT',
      path: '/api/v1/review/{id}',
      config: {
        tags: ['api'],
        description: 'Update Single Review Information',
        handler: reviewController.update,
        validate : reviewValidation.update
      }
    },
    {
      method: 'DELETE',
      path: '/api/v1/review/{id}',
      config: {
        tags: ['api'],
        description: 'Delete Single Review Information',
        handler: reviewController.destroy,
        validate : reviewValidation.destroy
      }
    }
  ];
  
  module.exports = {
    review
  };