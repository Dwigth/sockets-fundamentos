var socket = io();
// Escuchar eventos
socket.on('connect', function () {
    console.log('conectado al servidor');

});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');

});

socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
});

// Enviar información 
socket.emit('enviarMensaje', {
    usuario: 'Roberto',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('server', resp);
});