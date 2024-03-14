//*Calculadora de Precio Total con IVA
// Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te
// calcule el precio total que vas a pagar por tu compra.
// Te recuerdo que para calcular el total debes sumar al precio el resultado de
// multiplicas precio por el iva y dividir por 100.

//* Definición de variables
let precio = 200; // Precio del producto
let iva = 21;     // Porcentaje de IVA

//* Cálculo del precio total
// Paso 1: Multiplicamos el precio por el porcentaje de IVA para obtener el monto del IVA
let montoIVA = iva * precio / 100;
// Paso 2: Sumamos el monto del IVA al precio original para obtener el precio total
let total = precio + montoIVA;
// Impresión del resultado
console.log(`El precio total es: ${total}`); //! El precio total es: 242



