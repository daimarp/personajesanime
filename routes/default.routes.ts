import { Request, Response, Router } from "express";

const defaultroutes = Router();

defaultroutes.get('/',(req:Request,res:Response)=>{
    return res.json({
        ok:true,
        msj:"todo funciona correctamente"
    })
})

export default defaultroutes;