const fullCarPostController = require('.././controllers/area-controller');
const fullCarPostValidation = require('.././validations/area-validation');

const fullCarPost = [
    {
      method: 'GET',
      path: '/api/v1/fullcarpost',
      config: {
        tags: ['api'],
        description: 'Get area Information',
        handler: fullCarPostController.all
      }
    },
    {
      method: 'POST',
      path: '/api/v1/fullcarpost',
      config: {
        tags: ['api'],
        description: 'Create New Full Car POst',
        handler : fullCarPostController.create,
        validate : fullCarPostValidation.create
      }
    },
    {
      method: 'GET',
      path: '/api/v1/fullcarpost/{id}',
      config: {
        tags: ['api'],
        description: 'Get Single Full Car POst Information',
        handler: fullCarPostController.byId,
        validate : fullCarPostValidation.byId
      }
    },
    {
      method: 'PUT',
      path: '/api/v1/fullcarpost/{id}',
      config: {
        tags: ['api'],
        description: 'Update Single Full Car POst Information',
        handler: fullCarPostController.update,
        validate : fullCarPostValidation.update
      }
    },
    {
      method: 'DELETE',
      path: '/api/v1/fullcarpost/{id}',
      config: {
        tags: ['api'],
        description: 'Delete Single Full Car POst Information',
        handler: fullCarPostController.destroy,
        validate : fullCarPostValidation.destroy
      }
    }
  ];
  
  module.exports = {
    fullCarPost
  };