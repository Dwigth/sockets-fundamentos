"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = __importDefault(require("socket.io"));
var http_1 = __importDefault(require("http"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var server = http_1.default.createServer(app);
var publicPath = path_1.default.resolve(__dirname, '../public');
var port = process.env.PORT || 3000;
app.use(express_1.default.static(publicPath));
// IO = comunicación del backend
exports.io = socket_io_1.default(server);
require('./sockets/socket');
server.listen(port, function (err) {
    if (err)
        throw new Error(err);
    console.log("Servidor corriendo en puerto " + port);
});
