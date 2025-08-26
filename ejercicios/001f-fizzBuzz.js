/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let n = 1; n <= 100; n++) {
  if(n % 3 === 0) {
    console.log('Fizz')
  } else if (n % 5 === 0) {
    console.log('Buzz')
  } else if(n % 3 === 0 && n % 5 === 0) {
    console.log('FizzBuzz')
  } else {
    console.log(n)
  }
}