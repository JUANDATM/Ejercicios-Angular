
//let avenger ={
  //  nombre:"Steve",
    //clave:"Capitan America",
    //poder:"Droga"
//}

//let {poder,nombre,clave}=avenger;

////console.log(nombre,clave,poder);
/*--------------------------------------------------------------------*/

////let avengers:string[]=["Thor","Steve","Tony"];
/////let [thor,capitan,tony]=avengers;
//////console.log(thor, capitan, tony);
/*---------------------------------------------------------------------------- */










interface Xmen{
    nombre:string,
    poder:string 
}

function enviarMision(xmen :{nombre:string}){
console.log('Enviando a:'+xmen.nombre)
}
function enviarCuartel(xmen :{nombre:string}){
    console.log('Enviando al cuartel a:'+xmen.nombre)
    }
let wolverine = {
    nombre:"Wolwerine",
    poder:"Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);