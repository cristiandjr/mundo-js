/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

let cadena = "Hola mundo";
let cadenaInvertida = "";
for (let i = cadena.length - 1; i >= 0; i--) {
  cadenaInvertida += cadena[i];
}

function cadenaInvertida(cadena) {
  let cadenaInvertida = "";
  for (let n = cadena.length - 1; n >= 0; n--) {
    cadenaInvertida += cadena[n];
  }
}
cadenaInvertida(
  "Esto es una cadena que envio datos desde una funcion, osea le envio parametros y me da vuelta el texto jeje"
);
