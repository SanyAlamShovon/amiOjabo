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
    }
  ];
  
  module.exports = {
    cities
  };