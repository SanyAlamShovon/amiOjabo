const driverController = require('./../controllers/drivers-controller');

function actionEvent(io,socket,server){
    socket.on('blocked-driver',function(data){
        driverController.socketBlockedDriver(server,data).then(function(result){
            socket.emit('blocked-driver-finished',result);
        });
    });
    
    socket.on('unblocked-driver',function(data){
        driverController.socketUnblockedDriver(server,data).then(function(result){
            socket.emit('unblocked-driver-finished',result);
        });
    });
    
    socket.on('delete-driver',function(data){
        console.log("data",data)
        driverController.socketDeleteDriver(server,data).then(function(result){
            console.log('*//*/*/*/*/*/*/*/*/*/*/**/*')
            console.log("result",result)
            socket.emit('delete-driver-finished',result);
        });
    });
}

module.exports = {
  actionEvent
}
