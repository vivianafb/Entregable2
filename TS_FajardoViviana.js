"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var operacion = function (num1, num2, operacion) {
    var promesa = new Promise(function (resolve, reject) {
        Promise.resolve().then(function () { return __importStar(require('./funciones.js')); }).then(function (modulo) {
            if (operacion == 'resta') {
                resolve(modulo.resta(num1, num2));
            }
            else {
                resolve(modulo.suma(num1, num2));
            }
        });
    });
    return promesa;
};
var operaciones = function () {
    operacion(21, 3, 'suma')
        .then(function (resultado) {
        console.log(resultado);
    });
    operacion(21, 3, 'resta')
        .then(function (resultado) {
        console.log(resultado);
    });
};
operaciones();
