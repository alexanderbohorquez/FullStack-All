//*Saludo Interactivo 
// Un poco de interactividad. En este ejercicio debes escribir un programa que lea el
// nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
// Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

//* Solicitar al usuario que ingrese su nombre utilizando una ventana emergente de prompt
let nombre = prompt("Escribe tu nombre");

//* Concatenar el nombre ingresado con la cadena "Hola" para formar el saludo
let saludo = "Hola " + nombre;

//* Imprimir el saludo en la consola del navegador
console.log(saludo);