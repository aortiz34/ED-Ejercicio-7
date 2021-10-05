import Grupo from "./grupo.js";
import Persona from "./persona.js";

let nuevo  = new Persona("Axel",19);
let grupoH = new Grupo();
let div = document.getElementById("details");

console.log(grupoH.agregar(nuevo));

nuevo  = new Persona("jose",34);

console.log(grupoH.agregar(nuevo));

nuevo  = new Persona("alan",34);

console.log(grupoH.agregar(nuevo));

nuevo = new Persona("hector",13);

console.log(grupoH.agregar(nuevo));
console.log(grupoH.getInicio());

div.innerHTML = grupoH.listar();