const Hapi = require('hapi'),
      testRoute = require('./app/routes/test');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port:3000
});




//dynamic route
server.route(testRoute.TEST);

//static route
server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }
});


server.start(function(err){
    if (err) {
            throw err;
        }
    console.log('server started');
});