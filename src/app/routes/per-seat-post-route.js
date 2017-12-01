const perSeatPostController = require('.././controllers/per-seat-post-controller');
const perSeatPostValidation = require('.././validations/per-seat-post-validation');

const perSeatPost = [
    {
      method: 'GET',
      path: '/api/v1/perseatpost',
      config: {
        tags: ['api'],
        description: 'Get per Seat Post Information',
        handler: perSeatPostController.all
      }
    },
    {
      method : 'GET',
      path : '/api/v1/search/{start}/{end}',
      config: {
        tags: ['api'],
        description: 'Get per Seat Post Information',
        handler: perSeatPostController.search
      }
    },
    {
      method: 'POST',
      path: '/api/v1/perseatpost',
      config: {
        tags: ['api'],
        description: 'Create New per Seat Post',
        handler : perSeatPostController.create,
        validate : perSeatPostValidation.create
      }
    },
    {
      method: 'GET',
      path: '/api/v1/perseatpost/{id}',
      config: {
        tags: ['api'],
        description: 'Get Single per Seat Post Information',
        handler: perSeatPostController.byId,
        validate : perSeatPostValidation.byId
      }
    },
    {
      method: 'PUT',
      path: '/api/v1/perseatpost/{id}',
      config: {
        tags: ['api'],
        description: 'Update Single per Seat Post Information',
        handler: perSeatPostController.update,
        validate : perSeatPostValidation.update
      }
    },
    {
      method: 'DELETE',
      path: '/api/v1/perseatpost/{id}',
      config: {
        tags: ['api'],
        description: 'Delete Single per Seat Post Information',
        handler: perSeatPostController.destroy,
        validate : perSeatPostValidation.destroy
      }
    }
  ];

  module.exports = {
    perSeatPost
  };
