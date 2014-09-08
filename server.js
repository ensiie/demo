var net = require('net');

net.createServer(function(socket) {
  socket.write("HTTP/1.1 200 OK\n");
  socket.write("Content-Type: text/plain\n\n");

  socket.write("Hello ENSIIE\n\n");

  socket.end();
}).listen(6001);
