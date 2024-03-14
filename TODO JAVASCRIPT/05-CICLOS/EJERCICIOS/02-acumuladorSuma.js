//* acumulador suma for
// Realizar la suma de los primero 5 numeros utilizando el ciclo for

let suma = 0; // Inicializamos una variable llamada suma y la establecemos en 0. Esta variable almacenará la suma total de los números.

// Comenzamos un bucle for que irá desde el número 1 hasta el número 5, ambos inclusive.
for (let i = 1; i <= 5; i++) {
    suma += i; // En cada iteración del bucle, agregamos el valor actual de i a la variable suma. Esto suma los números del 1 al 5.
    //console.log(suma); // Puedes usar esta línea para imprimir la suma en cada iteración si deseas ver cómo cambia en cada paso.
}

// Finalmente, fuera del bucle, imprimimos el valor final de la suma.
console.log("La suma total es:", suma); // Esto imprimirá "La suma total es: 15" en la consola, que es el resultado deseado.

//* acumulador suma while

let contador = 0;
let sumaWhile = 0

while (contador < 5) {
    console.log(contador)
    contador ++;
    suma += contador
}

console.log(sumaWhile);