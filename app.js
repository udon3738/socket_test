var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');
app.listen('1337');

function handler(req, res){
        fs.readFile(__dirname + '/index.html', function(err, data){
        if(err){
        res.writeHead('500');
        return res.end('Error');
        }
        res.writeHead('200');
        res.write(data);
        res.end();
      });
};
io.sockets.on('connection',　function (socket){
    socket.on('emit_from_client',　function(data) {
      //socket.set('client_name', data.name);
      //socket.get('client_name',　function(err ,name){
        io.sockets.emit('emit_from_server' , ' [' + socket.id + ': ] ' + data.msg);

      //console.log(data);
      //io.socket.emit('emit_from_server' , 'hello_from_server: ' + data);

  });
});
