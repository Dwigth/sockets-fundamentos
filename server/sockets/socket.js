"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
server_1.io.on('connection', function (client) {
    console.log('usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación.'
    });
    client.on('disconnect', function () {
        console.log('usuario desconectado');
    });
    // Escuchar el cliente
    client.on('enviarMensaje', function (data, callback) {
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
