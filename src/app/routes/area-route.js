const areaController = require('.././controllers/area-controller');
const areaValidation = require('.././validations/area-validation');

const area = [
    {
      method: 'GET',
      path: '/api/v1/area',
      config: {
        tags: ['api'],
        description: 'Get area Information',
        handler: areaController.all
      }
    },
    {
      method: 'POST',
      path: '/api/v1/area',
      config: {
        tags: ['api'],
        description: 'Create New area',
        handler : areaController.create,
        validate : areaValidation.create
      }
    },
    {
      method: 'GET',
      path: '/api/v1/area/{id}',
      config: {
        tags: ['api'],
        description: 'Get Single area Information',
        handler: areaController.byId,
        validate : areaValidation.byId
      }
    },
    {
      method: 'PUT',
      path: '/api/v1/area/{id}',
      config: {
        tags: ['api'],
        description: 'Update Single area Information',
        handler: areaController.update,
        validate : areaValidation.update
      }
    },
    {
      method: 'DELETE',
      path: '/api/v1/area/{id}',
      config: {
        tags: ['api'],
        description: 'Delete Single area Information',
        handler: areaController.destroy,
        validate : areaValidation.destroy
      }
    }
  ];
  
  module.exports = {
    area
  };