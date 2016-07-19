var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {  
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket) {  
    
});




var vlad = require('socket.io').listen(1235);

vlad.sockets.on('connection', function (socket) {
	console.log('User '+socket.id+' Connected');
	vlad.emit('hi','Estas Conectado');
    io.emit('conectado', socket.id);
    
/* ########## EVENTOS ########## */
  socket.on('my_ip', function (data) {
      console.log(data);
      mensaje = data.push(socket.id);
      console.log(mensaje);
  });

  socket.on('disconnect', function(data){
  	console.log('User '+socket.id+' Disconnected');
      io.emit('desconectado', socket.id);
  });

});


server.listen(9000, function() {  
  console.log("Servidor corriendo en http://localhost:9000");
});