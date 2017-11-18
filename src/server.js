const Hapi = require('hapi'),
      cityRoute = require('./app/routes/city-route'),
      areaRoute = require('./app/routes/area-route'),
      departRoute = require('./app/routes/depart-route'),
      driverRequestsRoute = require('./app/routes/driver-requests-route'),
      driversRoute = require('./app/routes/drivers-route'),
      fullCarPostRoute = require('./app/routes/full-car-post-route'),
      paymentRoute = require('./app/routes/payment-route'),
      perSeatPostRoute = require('./app/routes/per-seat-post-route'),
      reviewRoute = require('./app/routes/review-route'),
      usersRoute = require('./app/routes/users-route'),
      Plugin = require('./plugin'),
      HapiSwagger = require('hapi-swagger'),
      Pack = require('.././package'),
      Inert = require('inert'), // inert and vision is for hapi-swager dependency
      Vision = require('vision'),
      Config = require('./config/config'),
      SocketIO = require('./app/socket/socket');


var server = new Hapi.Server();

server.connection(Config.appConfig);
server.connection(Config.socketConfig); //socket io configration
const app = server.select('api');
let io = require("socket.io")(server.select('realtime').listener);
SocketIO.ioHandler(io,server);

const docOption = {
    info: {
        'title': 'AmiOjabo v1 API Documentation',
        'version': Pack.version
    }
};

app.register(Plugin, function (err) {
    if (err) {
        console.log(err);
    }
});

app.register([
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

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply("<h1 style='color:red;'>Plz Goto : <a href='http://localhost:3000/documentation'>http://localhost:3000/documentation</a></h1>");
    }
});
server.route(cityRoute.cities);
server.route(areaRoute.area);
server.route(departRoute.depart);
server.route(driverRequestsRoute.driverRequest);
server.route(driversRoute.drivers);
server.route(fullCarPostRoute.fullCarPost);
server.route(paymentRoute.payment);
server.route(perSeatPostRoute.perSeatPost);
server.route(reviewRoute.review);
server.route(usersRoute.user);

server.start(function(err){
    if (err) {
        throw err;
    }
    console.log('server running at: ',app.info.uri);

});
