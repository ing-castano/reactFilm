// vamos a crear una clase AppStorage para poder codificar accediendo a la clase y si
// el dia de mañana muevo la SPA a una aplicacion movil, tengo que cambiar este archivo
// y nada mas del codigo  -> lo hago mucho mas reutilizable

export class AppStorage {

    static async save(key, value) {
        return await localStorage.setItem(key, JSON.stringify(value)); // si bien localStorage no es asincrono, el await lo dejamos porque en general la forma de manejar estos procedimiento en GENERAL es asíncorono, es decir devuelve una promesa.
    }

    static async get (key) {
        return await localStorage.getItem(key);
    }

    static async remove (key) {
        return await localStorage.removeItem(key);
    }

    static async clear () {
        return await localStorage.clear();
    }
}


/* enfoque sin crear clases 
export const appStorage = {
    get: async (key) => {
        return localStorage.getItem(key);
    }
};
*/

// atomizando y modularizando este codigo acá lo puedo adaptar facilmente si lo quiero 
// mover a un entorno que NO tiene localStorage (como ser un DISPOSITIVO MOBILE o CELULAR)
/* Codigo para celu
// quedaría así
const appStorage = {
    get: async (key) => {
        return await AsyncStorage.getItem(key);
    }
};
*/