const driverRequestController = require('./../controllers/driver-requests-controller');

function actionEvent(io,socket,server){
    socket.on('called-driver',function(data){
        driverRequestController.socketUpdate(server,data.serial,data).then(function(result){
            io.sockets.emit('driver-request-call-finished',result);
        });
    });
    
    socket.on('interviewed-driver',function(data){
        driverRequestController.socketUpdate(server,data.serial,data).then(function(result){
            io.sockets.emit('driver-request-call-finished',result);
        });
    });
    
    socket.on('on-process-driver',function(data){
        driverRequestController.socketUpdate(server,data.serial,data).then(function(result){
            io.sockets.emit('driver-request-call-finished',result);
        });
    });
    socket.on('selected-driver-request',function(data){
        driverRequestController.socketUpdate(server,data.serial,data).then(function(result){
            io.sockets.emit('driver-request-call-finished',result);
        });
    });
}

module.exports = {
  actionEvent
}
