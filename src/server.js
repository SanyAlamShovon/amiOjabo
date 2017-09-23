const Hapi = require('hapi'),
      testRoute = require('./app/routes/test'),
      cityRoute = require('./app/routes/city-route'),
      Plugin = require('./plugin'),
      HapiSwagger = require('hapi-swagger');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port:3000
});

server.register([
    Plugin,
    {
        'register': HapiSwagger
    }
], function (err) {
    if (err) {
        console.log(err);
    }
});

server.route(testRoute.TEST);
server.route(cityRoute.cities);

server.start(function(err){
    if (err) {
        throw err;
    }
    console.log('server running at: ',server.info.uri);
});