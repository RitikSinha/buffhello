let socket = io();
socket.on('connect',()=>{
  console.log('connected to server');
});
socket.on('disconnect',()=>{
  console.log('disconnected to server');
});

socket.on('newMsg',(msg)=>{
 console.log('newMsg',msg);
 let li = jQuery('<li></li>');
      li.text(`${msg.from}:${msg.text}`);
      jQuery('#msg').append(li);
})
jQuery('#msg-form').on('submit',function(e){
  e.preventDefault();
  socket.emit('createMsg',{
    from:'ritik',
    text:jQuery('[name=msg]').val()
  },function(data){
    console.log(data);
  });
})