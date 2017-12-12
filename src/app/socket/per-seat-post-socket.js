const perSeatController = require('./../controllers/per-seat-post-controller');
const userController = require('./../controllers/users-controller');
const driverController = require('./../controllers/drivers-controller');
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
          console.log("------------------------result: ",result);
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
        //console.log("data-------",data)
      perSeatController.changeRating(server,data).then(function(result){
        //console.log('################################################')
          var rating = result.passengers[0].rating;
          var ratedby = result.passengers[0].ratedBy;
          var _id = result.passengers[0]._id;
          userController.updateUserRating(server,{ratedby : ratedby,rating : rating,_id : _id});
        //console.log("result",result)
          socket.emit('add-user-rating',result);
      });
    });

    socket.on('cancel-user-booked-schedule',function(data){
      perSeatController.cancelSchedule(server,data).then(function(result){
        //console.log("Cancel Schedule : ",result)
        socket.emit('cancel-user-booked-schedule-finished',result);
      });
    });

    socket.on('blocked-post',function(data){
      perSeatController.blockedPost(server,data).then(function(result){
          console.log("-------------------------------------")
          console.log(result)
        socket.emit('blocked-post-finished',result);
      });
    });

    socket.on('success-trip',function(data){
      perSeatController.successTrip(server,data).then(function(result){
        socket.emit('success-trip-finished',result)
      });
    });

    socket.on('payment-success',function(data){
      perSeatController.paymentSuccess(server,data).then(function(result){
          socket.emit('payment-success-finished',result)
      });
    });

    socket.on('add-driver-rating',function(data){
      var driver = data.driver;
      var post = data.post;
      var currentRating = data.currentRating;
      var userEmail = data.userEmail;
      driverController.socketDriverRating(server,driver,currentRating).then(function(res){
        //console.log("update Driver rating : ",res);
      });
      perSeatController.socketPerpostDriverRating(server,post,currentRating,userEmail).then(function(res){
        console.log("update Driver post : ",res);
        socket.emit("updated-driver-rating",res);
      });
      //console.log("driver rating : ",data)
    })
}

module.exports = {
  actionEvent
}
