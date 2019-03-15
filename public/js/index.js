let socket = io();
socket.on('connect',()=>{
  console.log('connected to server');
});
socket.on('disconnect',()=>{
  console.log('disconnected to server');
});
socket.emit('createMsg',{
  from:'bhavya jha',
  text:'hey ritik'
});
socket.on('newMsg',(msg)=>{
 console.log('newMsg',msg);
})