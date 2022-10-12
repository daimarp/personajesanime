"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defaultroutes = (0, express_1.Router)();
defaultroutes.get('/', (req, res) => {
    return res.json({
        ok: true,
        msj: "todo funciona correctamente"
    });
});
exports.default = defaultroutes;
