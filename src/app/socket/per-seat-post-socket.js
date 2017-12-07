const perSeatController = require('./../controllers/per-seat-post-controller');

function actionEvent(io,socket,server){
    socket.on('creating-new-post',function(data){
        //console.log("socket data : ",data)
       perSeatController.socketCreate(server,data.serial,data).then(function(result){
         //console.log("result: ",result);
           io.sockets.emit('new-post-created',result);
       });
    });

    socket.on('user-buy-seat',function(data){
      //console.log("DATA: ",post)
      perSeatController.socketAddPassenger(server,data).then(function(result){
          //console.log("result: ",result);
          io.sockets.emit('user-buy-finished',result)
      });
    });

    socket.on('cancel-schedule',function(data){
        perSeatController.changeStatus(server,data).then(function(result){
            //console.log("result",result)
            socket.emit('cancel-schedule-finished',result);
        });
    });

    socket.on('add-user-rating',function(data){
      perSeatController.changeRating(server,data).then(function(result){
        console.log('################################################')
        console.log("result",result)
      });
    });

    socket.on('cancel-user-booked-schedule',function(data){
      perSeatController.cancelSchedule(server,data).then(function(result){
        //console.log("Cancel Schedule : ",result)
        socket.emit('cancel-user-booked-schedule-finished',result);
      });
    });
}

module.exports = {
  actionEvent
}
