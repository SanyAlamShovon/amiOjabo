const userController = require('./../controllers/users-controller');

function actionEvent(io,socket,server){
  socket.on('block-user',function(data){
    //console.log("Dtata Prosen: ", data)
    userController.socketUpdate(server,data.serial,data).then(function(result){
      console.log("-----------------------------------------------")
      console.log(result);
      if(result == 204){
        // io.emit('block-user',{data : "Updated"});
        userController.socketGet(server,data).then(function(res){
          socket.join('amiojabo')
          socket.emit('block-user',res);
        });
      }
    });
  })
}

module.exports = {
  actionEvent
}
