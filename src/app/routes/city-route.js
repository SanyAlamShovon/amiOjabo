const cityController = require('.././controllers/city-controller');

const cities = [
    {
      method: 'GET',
      path: '/api/v1/cities',
      config: {
        tags: ['api'],
        description: 'Get City Information',
        handler: cityController.all
      }
    }
  ];
  
  module.exports = {
    cities
  };