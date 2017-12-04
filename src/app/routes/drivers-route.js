const driversController = require('.././controllers/drivers-controller');
const driversValidation = require('.././validations/drivers-validation');

const drivers = [
    {
      method: 'GET',
      path: '/api/v1/driver',
      config: {
        tags: ['api'],
        description: 'Get Drivers Information',
        handler: driversController.all
      }
    },
    {
      method: 'POST',
      path: '/api/v1/driver',
      config: {
        tags: ['api'],
        description: 'Create New Driver',
        handler : driversController.create,
        validate : driversValidation.create
      }
    },
    {
      method: 'GET',
      path: '/api/v1/driver/{id}',
      config: {
        tags: ['api'],
        description: 'Get Single Driver Information',
        handler: driversController.byId,
        validate : driversValidation.byId
      }
    },
    {
      method: 'GET',
      path: '/api/v1/SingleDriver/{email}',
      config: {
        tags: ['api'],
        description: 'Get Single Driver Information',
        handler: driversController.byEmail,
        validate : driversValidation.byEmail
      }
    },
    {
      method: 'PUT',
      path: '/api/v1/driver/{id}',
      config: {
        tags: ['api'],
        description: 'Update Single Driver Information',
        handler: driversController.update,
        validate : driversValidation.update
      }
    },
    {
      method: 'DELETE',
      path: '/api/v1/driver/{id}',
      config: {
        tags: ['api'],
        description: 'Delete Single Driver Information',
        handler: driversController.destroy,
        validate : driversValidation.destroy
      }
    }
  ];

  module.exports = {
    drivers
  };
