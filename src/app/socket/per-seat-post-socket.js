const perSeatController = require('./../controllers/per-seat-post-controller');

function actionEvent(io,socket,server){
    socket.on('creted-new-post',function(data){
        console.log("socket data : ",data)
//        perSeatController.socketCreate(server,data.serial,data).then(function(result){
//            //io.sockets.emit('driver-request-call-finished',result);
//        });
    });
}

module.exports = {
  actionEvent
}
