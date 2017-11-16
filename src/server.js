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
      Config = require('./config/config');


var server = new Hapi.Server();

server.connection(Config.appConfig);
server.connection(Config.socketConfig); //socket io configration
const app = server.select('api');
let io = require("socket.io")(server.select('realtime').listener);

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

app.route(cityRoute.cities);
app.route(areaRoute.area);
app.route(departRoute.depart);
app.route(driverRequestsRoute.driverRequest);
app.route(driversRoute.drivers);
app.route(fullCarPostRoute.fullCarPost);
app.route(paymentRoute.payment);
app.route(perSeatPostRoute.perSeatPost);
app.route(reviewRoute.review);
app.route(usersRoute.user);

server.start(function(err){
    if (err) {
        throw err;
    }
    console.log('server running at: ',app.info.uri);
    
});
module.exports.sio = io; // exports socket for controllers