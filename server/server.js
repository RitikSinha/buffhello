const path = require('path');
const express = require ('express');
let app = express();
const publicpath = path.join(__dirname,'../public');
const socketIo = require('socket.io');

const http = require('http');
let server = http.createServer(app);
let io = socketIo(server);

io.on('connection',(socket)=>{
  console.log('new user is connected ');
   //admin message 
   socket.broadcast.emit('newMsg',{
     from:'admin',
    text:'new user joined'
  });
  //welcome message
  io.emit('new',{
    from:'admin',
    text:'welcome user!'
  })
  socket.on('createMsg',(msg)=>{
    console.log('createMsg',msg);
   
    io.emit('newMsg',{
                from: msg.from,
                text: msg.text,
                createdAt: new Date().getTime()
    });
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