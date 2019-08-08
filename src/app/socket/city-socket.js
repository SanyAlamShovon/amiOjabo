const citytController = require('./../controllers/city-controller');

function actionEvent(io,socket,server){
    socket.on('delete-city',function(data){
        citytController.socketDelete(server,data.serial,data).then(function(result){
            io.sockets.emit('deleted-city',result);
        });
    });
}

module.exports = {
  actionEvent
}
