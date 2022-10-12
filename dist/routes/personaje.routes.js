"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personaje_model_1 = require("../models/personaje.model");
const personajesRoutes = (0, express_1.Router)();
personajesRoutes.get('/pagin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const personajes = yield personaje_model_1.Personaje.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        personajes
    });
}));
personajesRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personajes = yield personaje_model_1.Personaje.find();
    return res.json({
        ok: true,
        personajes
    });
}));
personajesRoutes.post('/', (req, res) => {
    const data = req.body;
    const personaje = {
        nombre: data.nombre,
        edad: data.edad,
        imagen: data.imagen
    };
    personaje_model_1.Personaje.create(personaje).then(personajeDb => {
        console.log(personajeDb);
        return res.json({
            ok: true,
            msj: "registro creado correctamente",
            personajeDb
        });
    }).catch(err => {
        return res.json({
            ok: false,
            msj: "Ocurrio un error al crar el registro",
            err
        });
    });
});
personajesRoutes.put('/:id', (req, res) => {
    const personajeId = req.params.id;
    const personaje = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        imagen: req.body.imagen
    };
    personaje_model_1.Personaje.findByIdAndUpdate(personajeId, personaje).then(personajeDb => {
        return res.json({
            ok: true,
            personajeDb
        });
    });
});
personajesRoutes.delete('/', (req, res) => {
    const personajeId = req.query.id;
    personaje_model_1.Personaje.findByIdAndDelete(personajeId).then(personajeDb => {
        return res.json({
            ok: true,
            personajeDb
        });
    });
});
exports.default = personajesRoutes;
