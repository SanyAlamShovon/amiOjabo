var Hapi = require('hapi');

var server = Hapi.Server();

server.connection({
    host: 'localhost',
    port:3000
});

server.route({
    method: 'GET',
    path:'/',
    handler: function(request,replay){
        replay('Hi!!');
    }
    
});

server.start(function(){
    console.log('server started');
});