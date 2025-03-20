// - map.js: Crea un nuevo array, lo recorre y genera un nuevo array donde cada elemento ha sido transformado según una función que se le pasa.

// ********************************************************************************************************

// Ejemplo 1: Crear un nuevo array duplicando cada numero
const numeros = [1, 2, 3, 4, 5];
const duplicando = numeros.map(duplicado => duplicado * 2); // Duplica cada número
console.log(duplicando); // [2, 4, 6, 8, 10]

// ********************************************************************************************************

// Ejemplo 2: Crear un nuewvo array con la mitad de cada numero
const numeros2 = [10, 20, 30, 40, 50];
const mitad = numeros2.map(mitad => mitad / 2); // Mitad de cada número
console.log(mitad); // [5, 10, 15, 20, 25]


// ********************************************************************************************************

// Ejemplo: 3: Crear un nuevo array con el doble de la suma de cada numero
const numeros3 = [1, 2, 3, 4, 5];
const dobleSuma = numeros3.map(numero => (numero + numero) * 2); // Doble de la suma de cada número}
console.log(dobleSuma); // [4, 8, 12, 16, 20]

// ********************************************************************************************************

// Ejemplo 4: Transformar datos de una api, cambiamos la estructura de los datos
const usuariosApi = [
    { id: 1, nombre: 'Juan', activo: true },
    { id: 2, nombre: 'Maria', activo: false },
    { id: 3, nombre: 'Pedro', activo: true },
    { id: 4, nombre: 'Luis', activo: false },
    { id: 5, nombre: 'Antonio', activo: true },
];

const usuarios = usuariosApi?.map(usuario => {
    return {
        identificador: usuario?.id,
        nombre: usuario?.nombre,
        estado: usuario?.activo ? 'Activo' : 'Inactivo'
    }
});

console.log(usuarios);
// [
//     { id: 1, nombre: 'Juan', activo: 'Activo' },
//     { id: 2, nombre: 'Maria', activo: 'Inactivo' },
//     { id: 3, nombre: 'Pedro', activo: 'Activo' },
//     { id: 4, nombre: 'Luis', activo: 'Inactivo' },
//     { id: 5, nombre: 'Antonio', activo: 'Activo' }
// ]

// no moodifica el array original
console.log(usuariosApi);