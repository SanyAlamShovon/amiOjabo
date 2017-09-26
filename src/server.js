const Hapi = require('hapi'),
      cityRoute = require('./app/routes/city-route'),
      areaRoute = require('./app/routes/area-route'),
      Plugin = require('./plugin'),
      HapiSwagger = require('hapi-swagger'),
      Pack = require('.././package'),
      Inert = require('inert'), // inert and vision is for hapi-swager dependency
      Vision = require('vision');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port:3000
});

const docOption = {
    info: {
        'title': 'AmiOjabo v1 API Documentation',
        'version': Pack.version
    }
};

server.register(Plugin, function (err) {
    if (err) {
        console.log(err);
    }
});
server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': docOption
    }
], function (err) {
    // An error will be available here if anything goes wrong
    if (err) {
        console.log(err);
    }
});

server.route(cityRoute.cities);
server.route(areaRoute.area);

server.start(function(err){
    if (err) {
        throw err;
    }
    console.log('server running at: ',server.info.uri);
});