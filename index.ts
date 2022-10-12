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

mongoose.connect('mongodb+srv://usr_personajes:personajes2022@cluster0.trpyyhp.mongodb.net/personajesdb',(error)=>{
    if (error) {
        throw error;
        
    }
    console.log("base de datos online");
})

server.Start(()=>{
    console.log(`servidor corriendo en el puerto:${server.port}`)
})