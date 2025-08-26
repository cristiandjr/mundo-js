/*
 * Dado un numero tenemos que hacer la tabla de multiplicar de ese numero.
  * - La función recibe un número.
  * - La función debe devolver un string con la tabla de multiplicar de ese número.
 */



function tablaDeMultiplicar(numero) {
  console.log('Tabla del: ', numero)
	for(let n = 1; n <= 10; n++) {
    	console.log(numero, ' x ', n, ' = ', n * numero)
    }
}


tablaDeMultiplicar(5)
tablaDeMultiplicar(10)


function tablaDeMultiplicar(numero) {
    let resultado = `Tabla del ${numero}:\n`;
    
    for (let n = 1; n <= 10; n++) {
        resultado += `${numero} x ${n} = ${numero * n}\n`;
    }

    return resultado;
}

console.log(tablaDeMultiplicar(5));
console.log(tablaDeMultiplicar(10));

