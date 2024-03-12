//* sentencia if else
// "if" en JavaScript: ejecuta código si la condición es verdadera.
// "if else": Si la condición es verdadera, se ejecuta un bloque de código; de lo contrario, se ejecuta otro bloque de código.
// "else" en JavaScript: Si la condición en el "if" no es verdadera, se ejecuta el bloque de código asociado a "else".

let miNumero = 0;

//* Revisar si el numero es positivo 
if (miNumero > 0) {
    console.log(`valor positivo: ${miNumero}` );
} else if (miNumero < 0) {
    console.log(`valor negativo ${miNumero}`);
} else {
        console.log( `Valor negativo o cero `); //resultado: Valor negativo o cero  
}
