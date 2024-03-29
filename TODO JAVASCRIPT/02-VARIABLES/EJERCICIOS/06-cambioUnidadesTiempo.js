//* Conversión de unidades de tiempo a segundos */
// Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
// Recuerda una hora son 60 minutos y cada minuto son 60 segundos.
//* Definición de variables
let hora = 2; // Definimos la variable 'hora' y le asignamos el valor 2, que representa las horas
let minuto = 30; // Definimos la variable 'minuto' y le asignamos el valor 30, que representa los minutos

//* Cálculo del resultado en segundos
let resultado = hora * 60 * 60 + minuto * 60; // Multiplicamos la hora por 60 minutos y luego por 60 segundos para convertir las horas a segundos. Sumamos los segundos equivalentes a los minutos. Esto nos da el total de segundos.
console.log(resultado); // Imprimimos el resultado en la consola
