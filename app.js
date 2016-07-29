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
      //console.log(data);
      id = socket.id;
      iden = data[0];
      so = data[1];
      ips = data[2];
      ip6 = ips[0];
      ip4 = ips[1];
      //console.log(ip4);
      mensaje = [];
      mensaje.push(id);
      mensaje.push(iden);
      mensaje.push(so);
      mensaje.push(ip6);
      mensaje.push(ip4);
      //console.log(mensaje);
      io.emit('my_ip',mensaje);
  });

  socket.on('disconnect', function(data){
  	console.log('User '+socket.id+' Disconnected');
      io.emit('desconectado', socket.id);
  });

});


server.listen(9000, function() {  
  console.log("Servidor corriendo en http://localhost:9000");
});
