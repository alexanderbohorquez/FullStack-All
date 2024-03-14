//*Calculadora de Área y Perímetro de un Cuadrado
// En una variable tienes el lado de un cuadrado, debes escribir un programa que te
// calcule el área y el perímetro del cuadrado.
// El area la calculas como lado multiplicado por lado. El perímetro es la suma de los
// cuatro lados.

//* Definición de variables
let lado = 40;  // Longitud de un lado del cuadrado
//* Cálculo del área
// Paso 1: Multiplicamos la longitud de un lado por sí misma para obtener el área
let area = lado * lado;
//* Cálculo del perímetro
// Paso 2: Multiplicamos la longitud de un lado por 2 y luego sumamos esta cantidad con el doble del mismo lado para obtener el perímetro
let perimetro = 2 * (lado + lado);
//* Impresión de resultados
console.log(area);        //! Imprime el área del cuadrado = 1600
console.log(perimetro);   //! Imprime el perímetro del cuadrado = 160
