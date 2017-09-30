const departController = require('.././controllers/depart-controller');
const departValidation = require('.././validations/depart-validation');

const depart = [
    {
      method: 'GET',
      path: '/api/v1/depart',
      config: {
        tags: ['api'],
        description: 'Get Depart Information',
        handler: departController.all
      }
    },
    {
      method: 'POST',
      path: '/api/v1/depart',
      config: {
        tags: ['api'],
        description: 'Create New Depart',
        handler : departController.create,
        validate : departValidation.create
      }
    },
    {
      method: 'GET',
      path: '/api/v1/depart/{id}',
      config: {
        tags: ['api'],
        description: 'Get Single Depart Information',
        handler: departController.byId,
        validate : departValidation.byId
      }
    },
    {
      method: 'PUT',
      path: '/api/v1/depart/{id}',
      config: {
        tags: ['api'],
        description: 'Update Single Depart Information',
        handler: departController.update,
        validate : departValidation.update
      }
    },
    {
      method: 'DELETE',
      path: '/api/v1/depart/{id}',
      config: {
        tags: ['api'],
        description: 'Delete Single Depart Information',
        handler: departController.destroy,
        validate : departValidation.destroy
      }
    }
  ];
  
  module.exports = {
    depart
  };