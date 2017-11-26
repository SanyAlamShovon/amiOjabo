const userController = require('./../controllers/users-controller');

function actionEvent(io,socket,server){
    socket.on('block-user',function(data){
        //console.log("Dtata Prosen: ", data)
        userController.socketUpdate(server,data.serial,data).then(function(result){
            //console.log("-----------------------------------------------")
            //console.log("result",result);
            io.sockets.emit('block-active-user',result);
        });
    });
    
    socket.on('unblock-user',function(data){
    //console.log("Dtata Prosen: ", data)
        userController.socketUpdate(server,data.serial,data).then(function(result){
            io.sockets.emit('unblock-active-user',result);
        });
    });
}

module.exports = {
  actionEvent
}
