import Grupo from "./grupo.js";
import Persona from "./persona.js";

let nuevo  = new Persona("Axel",19);
let grupoH = new Grupo();

console.log(nuevo.getSiguiente());
console.log(grupoH.agregar(nuevo));

nuevo  = new Persona("jose",34);

console.log(nuevo.getSiguiente());
console.log(grupoH.agregar(nuevo));

nuevo  = new Persona("alan",34);

console.log(nuevo.getSiguiente());
console.log(grupoH.agregar(nuevo));