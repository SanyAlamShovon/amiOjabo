const userController = require('.././controllers/users-controller');
const userValidation = require('.././validations/users-validation');

const user = [
    {
      method: 'GET',
      path: '/api/v1/user',
      config: {
        tags: ['api'],
        description: 'Get User Information',
        handler: userController.all
      }
    },
    {
      method: 'POST',
      path: '/api/v1/user',
      config: {
        tags: ['api'],
        description: 'Create New user',
        handler : userController.create,
        validate : userValidation.create
      }
    },
    {
      method: 'GET',
      path: '/api/v1/user/{id}',
      config: {
        tags: ['api'],
        description: 'Get Single user Information',
        handler: userController.byId,
        validate : userValidation.byId
      }
    },
    {
      method: 'PUT',
      path: '/api/v1/user/{id}',
      config: {
        tags: ['api'],
        description: 'Update Single user Information',
        handler: userController.update,
        validate : userValidation.update
      }
    },
    {
      method: 'DELETE',
      path: '/api/v1/user/{id}',
      config: {
        tags: ['api'],
        description: 'Delete Single user Information',
        handler: userController.destroy,
        validate : userValidation.destroy
      }
    }
  ];
  
  module.exports = {
    user
  };