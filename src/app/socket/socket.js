const userSocket = require('./user-socket');
const driverRequestSocket = require('./driver-request-socket');
const citySocket = require('./city-socket');
const perSeatPostSocket = require('./per-seat-post-socket');
const driverSocket = require('./driver-socket');

const ioHandler = function(io,server){
  let onlineUsers = [];
  io.on('connection',function(socket){
    console.log("socket connected :)");
      socket.on("hello",function(data){
          console.log("hello data : ",data);
      })
      socket.emit("connected",{msg : "Connected"})
//    socket.on('room:add',function(data){
//      console.log(data.room);
//      socket.room = data.room;
//      socket.join(data.room);
//    });

    userSocket.actionEvent(io,socket,server);
    driverRequestSocket.actionEvent(io,socket,server);
    citySocket.actionEvent(io,socket,server);
    perSeatPostSocket.actionEvent(io,socket,server);
    driverSocket.actionEvent(io,socket,server);
      
    socket.on('disconnect', function(){
       console.log('disconnect:',socket.id);
     //  console.log('socket.room:',socket.room);
       let auction_id = 0;
       //socket.leave(socket.room);
      //  onlineBidder.map(function (b) {
      //    let bidder_room = 'auction_bidding_room'+b.auction_id;
      //    //if(socket.room == bidder_room){
      //    if(socket.id === b.sid || socket.room == bidder_room){
      //      b.status = 'disconnected';
      //      auction_id = b.auction_id;
      //    }
      //    return b;
      //  });
     });
  });
}

module.exports = {
  ioHandler
}
