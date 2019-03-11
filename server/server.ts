import express from 'express';
import socketIO from 'socket.io';
import http from 'http';
import path from 'path';

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = comunicación del backend
export const io = socketIO(server);
require('./sockets/socket');



server.listen(port, (err: any) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});