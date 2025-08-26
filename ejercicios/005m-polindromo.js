/*
Dado una cadena de texto, comprobar si es polindromo o no,
Los polindromos son palabras q se leen igual aun estando invertidas
Ej: ana, bob, otto, allivessevilla

no tener en cuenta espacio vacios o simbolos raros
*/


let texto = 'bob'
let cadenaInvertida = ''
for(let i = texto.length - 1; i >= 0; i--) {
  cadenaInvertida += texto[i]
}

cadenaInvertida === texto ? 'polindromo' : 'no es polindromo'