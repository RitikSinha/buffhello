const path = require('path');
const express = require ('express');
let app = express();
const publicpath = path.join(__dirname,'../public');
const socketIo = require('socket.io');
const {genrateMsg}= require('./utils/message');

const http = require('http');
let server = http.createServer(app);
let io = socketIo(server);

io.on('connection',(socket)=>{
  console.log('new user is connected ');
   //admin message 
   socket.broadcast.emit('newMsg',genrateMsg('admin','new user joined'));
  //welcome message
  io.emit('newMsg',genrateMsg('admin','welcome user'));
  socket.on('createMsg',(msg,callback)=>{
    console.log('createMsg',msg);
   
    io.emit('newMsg',genrateMsg(msg.from,msg.text));
    callback('sent');
     });
    

  socket.on('disconnect',()=>{
     console.log('user is disconnected');
    
  });
})





app.use(express.static(publicpath));
const port = process.env.PORT || 3000;
server.listen(port,()=>{
console.log(`server is up on ${port}`);
});