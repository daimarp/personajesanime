import {Schema,model} from "mongoose";
const personajeSchema = new Schema({

    nombre:{
        type:String,
        require: [true,'El campo nombre es requerido']
    },
    edad:{
        type:Number
    },
    imagen:{
        type:String
    },
    descripcion:{
        type:String
    }


})
interface Ipersonaje extends Document{
nombre:string;
edad:number;
imagen:string;
descripcion:string;
}

export const Personaje =model<Ipersonaje>('Personaje',personajeSchema);
