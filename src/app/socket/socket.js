
const ioHandler = function(io,server){
  let onlineUsers = [];
  io.on('connection',function(socket){
    console.log("socket connected :)");
  });
}

module.exports = {
  ioHandler
}
