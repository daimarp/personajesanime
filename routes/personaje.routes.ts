import { Request, Response, Router } from "express";
import { Personaje } from "../models/personaje.model";

const personajesRoutes = Router();

personajesRoutes.get('/pagin',async(req:Request,res:Response)=>{


    let perPage = 5;
    let page = Number(req.query.page)|| 1;
    let skip =page -1;
    skip = skip*perPage;

    const personajes = await Personaje.find().skip(skip).limit(perPage);
   
    return res.json({
        ok:true,
       personajes
    })
})

personajesRoutes.get('/', async(req:Request,res:Response)=>{
   
   const personajes = await Personaje.find();
   
    return res.json({
        ok:true,
       personajes
    })
});

personajesRoutes.post('/',(req:Request,res:Response)=>{

const data = req.body;

const personaje ={
    nombre: data.nombre,
    edad: data.edad,
    imagen: data.imagen,
    descripcion: data.descripcion,
    url: data.url
}
console.log(personaje);
Personaje.create(personaje).then(personajeDb=>{
    console.log(personajeDb);

    return res.json({
        ok:true,
        msj:"registro creado correctamente",
        personajeDb
        
    })

}).catch(err=>{
    return res.json({
        ok:false,
        msj:"Ocurrio un error al crar el registro",
        err
        
    })
})


    

});

personajesRoutes.put('/:id',(req:Request,res:Response)=>{

const personajeId = req.params.id;


const personaje ={

    nombre:req.body.nombre,
    edad: req.body.edad,
    imagen:req.body.imagen,
    descripcion:req.body.descripcion,
    url:req.body.url

}

Personaje.findByIdAndUpdate(personajeId,personaje).then(personajeDb=>{
    return res.json({
        ok:true,
        personajeDb
    })
})

    
});

personajesRoutes.delete('/',(req:Request,res:Response)=>{

    const personajeId = req.query.id;

   Personaje.findByIdAndDelete(personajeId).then(personajeDb=>{

    return res.json({
        ok:true,
      personajeDb

    })

   })

    
})

export default personajesRoutes;