var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port:3000
});




//dynamic route
server.route({
    method: 'GET',
    path: '/{locations*2}',
    handler: function (request, reply) {
        const location = request.params.locations.split('/');
        reply('So you wanna go ' + encodeURIComponent(location[1]) + ' from ' + encodeURIComponent(location[0]) + '!');
    }
});

//static route
server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./user/home.html');
        }
    });

});


server.start(function(err){
    if (err) {
            throw err;
        }
    console.log('server started');
});