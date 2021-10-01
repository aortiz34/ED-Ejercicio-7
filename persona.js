export default class Persona {

    constructor(nombre,edad) {
        this._nombre = nombre;
        this._edad = edad;
        this._siguiente = null;
    }

    getSiguiente(){
        return this._siguiente;
    }

    setSiguiente(persona){
        this._siguiente = persona;
    }
}