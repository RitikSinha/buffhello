const path = require('path');
const express = require ('express');
let app = express();
const publicpath = path.join(__dirname,'../public');
const socketIo = require('socket.io');

const http = require('http');
let server = http.createServer(app);
let io = socketIo(server);

io.on('connection',(socket)=>{
  console.log('server is connected ');
  socket.on('createMsg',(msg)=>{
    console.log('createMsg',msg);
     });
     socket.emit('newMsg',{
       from:'ritik',
       text:"hey bhavya"
     })

  socket.on('disconnect',()=>{
     console.log('user is disconnected');
    
  });
})





app.use(express.static(publicpath));
const port = process.env.PORT || 3000;
server.listen(port,()=>{
console.log(`server is up on ${port}`);
});