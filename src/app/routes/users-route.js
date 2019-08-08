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
      method: 'GET',
      path: '/api/v1/userCheck/{email}',
      config: {
        tags: ['api'],
        description: 'Get User Information',
        handler: userController.userCheck
      }
    },
    {
      method: 'GET',
      path: '/api/v1/user/inactive',
      config: {
        tags: ['api'],
        description: 'Get User Information',
        handler: userController.inactive
      }
    },
    {
      method: 'GET',
      path: '/api/v1/user/employee',
      config: {
        tags: ['api'],
        description: 'Get User Information',
        handler: userController.employee
      }
    },
    {
      method: 'GET',
      path: '/api/v1/user/blocked/{isBlocked}',
      config: {
        tags: ['api'],
        description: 'Get All Blocked Users',
        handler: userController.blocked,
        validate : userValidation.blocked
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
      method: 'GET',
      path: '/api/v1/me/{email}',
      config: {
        tags: ['api'],
        description: 'Get Single user Information By Email',
        handler: userController.byEmail,
        validate : userValidation.byEmail,
        auth: {
            strategy: 'token'
        }
      }
    },
    {
      method: 'PUT',
      path: '/api/v1/user/{serial}',
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
    },
    {
        method: 'POST',
        path: '/api/v1/user/auth',
        config: {
            tags: ['api'],
            description: 'authenticate user',
            handler: userController.verifyCredentials,
            validate: userValidation.verifyCredentials
        }
    }
  ];

  module.exports = {
    user
  };
