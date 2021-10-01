import Persona from "./persona.js";
export default class Grupo{
    constructor() {
        this._inicio = null;
    }

    agregar(nuevo){
        if (this._inicio===null){
            return this._inicio=nuevo;
        } else {
            let aux=this._inicio;
            while(aux.getSiguiente()!=null){
                aux=aux.getSiguiente();
                console.log(this._inicio.getSiguiente());
            }
            aux.setSiguiente(nuevo)
            return nuevo;
        }
    }
}