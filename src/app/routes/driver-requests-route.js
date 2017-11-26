const driverRequestController = require('.././controllers/driver-requests-controller');
const driverRequestValidation = require('.././validations/driver-requests-validation');

const driverRequest = [
    {
      method: 'GET',
      path: '/api/v1/driverrequest',
      config: {
        tags: ['api'],
        description: 'Get area Information',
        handler: driverRequestController.all
      }
    },
    {
      method: 'GET',
      path: '/api/v1/driverrequest/inactive',
      config: {
        tags: ['api'],
        description: 'Get area Information',
        handler: driverRequestController.all
      }
    },
    {
      method: 'POST',
      path: '/api/v1/driverrequest',
      config: {
        tags: ['api'],
        description: 'Create New Driver Request',
        handler : driverRequestController.create,
        validate : driverRequestValidation.create
      }
    },
    {
      method: 'GET',
      path: '/api/v1/driverrequest/{id}',
      config: {
        tags: ['api'],
        description: 'Get Single Driver Request Information',
        handler: driverRequestController.byId,
        validate : driverRequestValidation.byId
      }
    },
    {
      method: 'PUT',
      path: '/api/v1/driverrequest/{id}',
      config: {
        tags: ['api'],
        description: 'Update Single Driver Request Information',
        handler: driverRequestController.update,
        validate : driverRequestValidation.update
      }
    },
    {
      method: 'DELETE',
      path: '/api/v1/driverrequest/{id}',
      config: {
        tags: ['api'],
        description: 'Delete Single Driver Request Information',
        handler: driverRequestController.destroy,
        validate : driverRequestValidation.destroy
      }
    }
  ];

  module.exports = {
    driverRequest
  };
