const cityController = require('.././controllers/city-controller');
const cityValidation = require('.././validations/city-validation');

const cities = [
    {
      method: 'GET',
      path: '/api/v1/cities',
      config: {
        tags: ['api'],
        description: 'Get City Information',
        handler: cityController.all
      }
    },
    {
      method: 'POST',
      path: '/api/v1/cities',
      config: {
        tags: ['api'],
        description: 'Create New city',
        handler : cityController.create,
        validate : cityValidation.create
      }
    },
    {
      method: 'GET',
      path: '/api/v1/cities/{id}',
      config: {
        tags: ['api'],
        description: 'Get Single City Information',
        handler: cityController.byId,
        validate : cityValidation.byId
      }
    }
  ];
  
  module.exports = {
    cities
  };