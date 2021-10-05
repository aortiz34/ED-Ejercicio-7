import Persona from "./persona.js";
export default class Grupo{
    constructor() {
        this._inicio = null;
    }

    getInicio(){
        return this._inicio;
    }

    agregar(nuevo){
        if (this._inicio===null){
            return this._inicio=nuevo;
        } else {
            let aux=this._inicio;
            while(aux.getSiguiente()!=null){
                aux=aux.getSiguiente();
            }
            aux.setSiguiente(nuevo)
            return nuevo;
        }
    }

    listar(){
        let pos = 1;
        let aux = this._inicio;
        let txt = "";
        if (this._inicio===null){
            return "Esta vacio";
        }else {
            while (aux.getSiguiente() != null) {
                txt += `<div>
                ${pos}-Nombre:${aux.getNombre()}---Edad:${aux.getEdad()}
                </div>`;
                aux=aux.getSiguiente();
                pos++;
            }
            txt += `<div>
            ${pos}-Nombre:${aux.getNombre()}---Edad:${aux.getEdad()}
            </div>`;
        }
        return txt;
    }
}