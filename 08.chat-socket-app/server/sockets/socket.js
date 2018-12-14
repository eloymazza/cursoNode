const {io} = require('../server')

io.on('connection', (client) => {
    console.log('User Connected');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido al sistema'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log('Se recibio mensaje del usuario');
        client.broadcast.emit('enviarMensaje', data);
        console.log('Se mando a todos los usuarios el siguiente mensaje', data);

        /*
        if(data.usuario){
            callback({
                respuesta: 'Todo Ok!'
            });
        }
        else{
            callback({
                respuesta: 'Hubo un error!'
            });
        }*/
    });
})
