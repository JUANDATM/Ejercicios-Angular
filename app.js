"use strict";
//let avenger ={
//  nombre:"Steve",
//clave:"Capitan America",
//poder:"Droga"
//}
function enviarMision(xmen) {
    console.log('Enviando a:' + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log('Enviando al cuartel a:' + xmen.nombre);
}
var wolverine = {
    nombre: "Wolwerine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
