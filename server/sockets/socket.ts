import { io } from '../server';

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación.'
    });


    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (message.usuario) {
        //     callback({
        //         resp: 'todo salio bien'
        //     })
        // } else {
        //     callback({
        //         resp: 'todo salio mal'
        //     })
        // }

    });
});