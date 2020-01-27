

// Uso de Let y Const
const nombre = "Ricardo Tapia";
const edad = 23;
let PERSONAJE = {
  nombre: nombre,
  edad: edad
};
console.log(PERSONAJE);

// Cree una interfaz que sirva para validar el siguiente objeto
interface Batman{
    nombre:string,
    artesMarciales:string[]
}

function imprimir(batman : Batman) {
    console.log(batman.nombre + " sabe estas artes marciales :"+ batman.artesMarciales);
   
}
let batman:Batman= {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
  }

 imprimir(batman);

// Convertir esta funcion a una funcion de flecha
let resultadoDoble = (a:number, b:number ) => ((a+ b) * 2);


console.log(resultadoDoble(4,8)); 
 
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma= "arco" ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
  return mensaje;
};
console.log(getAvenger("JUAN","Invisibilidad"));

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero. 

class rectangulo{
    base:number=0;
    altura:number=0;
}
let area:rectangulo = new rectangulo();

function getArea(base:any,altura:any){
    area.base=base;
    area.altura=altura;
let areaRec=area.altura*area.base;
return areaRec;
}

console.log(getArea(8,5));
