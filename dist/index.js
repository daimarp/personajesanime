"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const personaje_routes_1 = __importDefault(require("./routes/personaje.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = new server_1.default();
server.app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requeted-With,content-type');
    next();
});
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use('/', default_routes_1.default);
server.app.use('/personaje', personaje_routes_1.default);
mongoose_1.default.connect('mongodb+srv://usr_personajes:personajes2022@cluster0.trpyyhp.mongodb.net/personajesdb', (error) => {
    if (error) {
        throw error;
    }
    console.log("base de datos online");
});
server.Start(() => {
    console.log(`servidor corriendo en el puerto:${server.port}`);
});
