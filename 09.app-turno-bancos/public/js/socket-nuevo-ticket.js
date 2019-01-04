let socket = io();

socket.on('connect', function() {
    console.log('conectado al server');
    
});

socket.on('disconnect', function(){
    console.log('desconectado del server');
});


io.on('connection', (client) => {
    on('siguienteTicket', () => {
        console.log('cual es el siguiente ');
        
    })
})

$('#generaTicket').on('click', function(){
    socket.emit('siguienteTicket');
});