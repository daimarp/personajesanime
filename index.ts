import Server from "./classes/server";
import defaultroutes from "./routes/default.routes";
import mongoose from "mongoose";
import personajesRoutes from "./routes/personaje.routes";
import bodyParser from "body-parser";

const server = new Server();

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use('/',defaultroutes);
server.app.use('/personaje',personajesRoutes);

mongoose.connect('mongodb://localhost:27017/personajesdb',(error)=>{
    if (error) {
        throw error;
        
    }
    console.log("base de datos online");
})

server.Start(()=>{
    console.log(`servidor corriendo en el puerto:${server.port}`)
})