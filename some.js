// El método some() comprueba si al menos un elemento del array cumple con la condición dada. 
// Devuelve un valor booleano (true o false).

// ********************************************************************************************************

// Ejemplo 1: Comprobar si al menos un elemento cumple con la condición
const temperaturas = [5, 0, -3, 10, -5, 25]; // Array de temperaturas
const hayBajoCero = temperaturas.some(temp => temp < 0); // Recorre el array y devuelve true si al menos un elemento es menor a 0
console.log(hayBajoCero); // true

// ********************************************************************************************************

// Diferencia con el método filter()
// El método filter() devuelve un nuevo array con los elementos que cumplen con la condición,
// mientras que some() solo devuelve un booleano indicando si hay coincidencias o no.

const temperaturasNegativas = temperaturas.filter(temp => temp < 0); 
// Filtra las temperaturas menores a 0

console.log(temperaturasNegativas); // [-3, -5]

// En resumen, si necesitamos un true o false usamos some(), 
// pero si necesitamos los elementos que cumplen con la condición, usamos filter().

// ********************************************************************************************************

// Ejemplo 2: Comprobar si existe un administrador en el array de usuarios
const usuarios = [
    { nombre: 'Juan', rol: 'usuario' },
    { nombre: 'Pedro', rol: 'moderador' },
    { nombre: 'Maria', rol: 'administrador' },
    { nombre: 'Luis', rol: 'usuario' }
];

const hayAdministrador = usuarios.some(usuario => usuario.rol === 'administrador'); // Verifica si hay al menos un usuario con el rol de 'administrador'

console.log(hayAdministrador); // true

// ********************************************************************************************************

// Ejemplo 3: Verificar si un producto está agotado en el inventario
const inventario = [
    { producto: 'mouse', cantidad: 10 },
    { producto: 'teclado', cantidad: 5 },
    { producto: 'monitor', cantidad: 0 },
    { producto: 'auriculares', cantidad: 15 }
];

const hayAgotado = inventario.some(item => item.cantidad === 0); // Verifica si algún producto tiene cantidad 0

console.log(hayAgotado); // true
