export default class Persona {

    constructor(nombre,edad) {
        this._nombre = nombre;
        this._edad = edad;
        this._siguiente = null;
    }

    getNombre(){
        return this._nombre;
    }

    getEdad(){
        return this._edad;
    }

    getSiguiente(){
        return this._siguiente;
    }

    setSiguiente(persona){
        this._siguiente = persona;
    }
}