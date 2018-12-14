let socket = io();

socket.on('connect', function(){
    console.log('Conectado con el server');
})

socket.on('disconnect', function(){
    console.log('Perdimos conexion con el server');
});

// Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Eloy',
    message: 'Hola Mundo'
}, function(resp){
    console.log('Resp server:',resp);
});

// Escuchar info
socket.on('enviarMensaje', function(mensaje){
    console.log('Server:' , mensaje);
});
