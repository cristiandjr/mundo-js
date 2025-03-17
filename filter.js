// Filter recorre todos los elementos de un array y genera un nuevo array con los elementos que cumplen con la condición dada.

// ********************************************************************************************************

// Ejemplo 1: Obtener números pares de un array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(numero => numero % 2 === 0); // Filtra los números pares
console.log(pares); // [2, 4, 6, 8, 10]

// ********************************************************************************************************

// Ejemplo 2: Filtrar registros con edad mayor o igual a 18 (filtramos registros por una propiedad de un objeto)

const personas = [
    { nombre: 'Juan', edad: 15 },
    { nombre: 'Maria', edad: 20 },
    { nombre: 'Pedro', edad: 25 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'Antonio', edad: 10 },
];

const mayoresDeEdad = personas.filter(persona => persona.edad >= 18); // Filtra las personas con edad mayor o igual a 18
console.log(mayoresDeEdad); // [{ nombre: 'Maria', edad: 20 }, { nombre: 'Pedro', edad: 25 }, { nombre: 'Luis', edad: 30 }]

// ********************************************************************************************************

// Ejemplo 3: Filtrar usuarios activos y por fecha de ingreso
const usuarios = [
    { nombre: 'Juan', activo: true, ingregso: '2021-01-01' },
    { nombre: 'Maria', activo: false, ingregso: '2021-02-01' },
    { nombre: 'Pedro', activo: true, ingregso: '2021-03-01' },
    { nombre: 'Luis', activo: false, ingregso: '2021-03-01' },
    { nombre: 'Antonio', activo: true, ingregso: '2021-04-01' },
];
const usuariosActivos = usuarios.filter(usuario => usuario.activo === false) // Filtra los usuarios activos (no necesitamos agregarle usuario.activo el === true porque por defecto es true, y si es falso podemos poner !usuario.activo)
console.log(usuariosActivos); // [{ nombre: 'Juan', activo: true, ingregso: '2021-01-01' }, { nombre: 'Pedro', activo: true, ingregso: '2021-03-01' }, { nombre: 'Antonio', activo: true, ingregso: '2021-04-01' }]

// Filtramos por fecha de ingreso
const usuariosIngreso = usuarios.filter(usuario => usuario.ingregso === '2021-03-01') // Filtra los usuarios que ingresaron después de '2021-03-01'
console.log(usuariosIngreso); // [{ nombre: 'Pedro', activo: true, ingregso: '2021-03-01' }, { nombre: 'Luis', activo: false, ingregso: '2021-03-01' }, { nombre: 'Antonio', activo: true, ingregso: '2021-04-01' }]