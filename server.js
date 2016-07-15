var io = require('socket.io').listen(1235);

io.sockets.on('connection', function (socket) {
	console.log('User '+socket.id+' Connected');
	io.emit('hi','Estas Conectado');

/* ########## EVENTOS ########## */
  socket.on('my_ip', function (data) {
    console.log(data);
  });

  socket.on('disconnect', function(data){
  	console.log('User '+socket.id+' Disconnected');
  });

});