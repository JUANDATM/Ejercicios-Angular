// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE);
function imprimir(batman) {
    console.log(batman.nombre + " sabe estas artes marciales :" + batman.artesMarciales);
}
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
imprimir(batman);
// Convertir esta funcion a una funcion de flecha
var resultadoDoble = function (a, b) { return ((a + b) * 2); };
console.log(resultadoDoble(4, 8));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
    return mensaje;
}
;
console.log(getAvenger("JUAN", "Invisibilidad"));
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero. 
var rectangulo = /** @class */ (function () {
    function rectangulo() {
        this.base = 0;
        this.altura = 0;
    }
    return rectangulo;
}());
var area = new rectangulo();
function getArea(base, altura) {
    area.base = base;
    area.altura = altura;
    var areaRec = area.altura * area.base;
    return areaRec;
}
console.log(getArea(8, 5));
