let socket = io();
socket.on('connect',()=>{
  console.log('connected to server');
});
socket.on('disconnect',()=>{
  console.log('disconnected to server');
});

socket.on('newMsg',(msg)=>{
 console.log('newMsg',msg);
})