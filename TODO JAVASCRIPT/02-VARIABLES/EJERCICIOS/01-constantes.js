//* ejercicios
const PI = Math.PI;
const radio = 1;
const area = PI * radio * radio;
console.log("El área del círculo es: " + area);

const FACTOR_CONVERSION = 9 / 5; // Factor de conversión de grados Celsius a Fahrenheit
const G_CELSIUS = 15;
const temperaturaFahrenheit = G_CELSIUS * FACTOR_CONVERSION + 32;
console.log("La temperatura en Fahrenheit es: " + temperaturaFahrenheit);

const FACTOR_CONVERSION_IMC = 703; // Factor de conversión para el cálculo del IMC
const p_libras = 100;
const alturaPulgadas = 30;
const IMC = (p_libras / (alturaPulgadas * alturaPulgadas)) * FACTOR_CONVERSION_IMC; // Cálculo del IMC
console.log("El IMC es: " + IMC);

const PORCENTAJE_INTERES = 0.05;
const DINERO_INICIAL = 100;
const NUMERO_ANIOS = 10;
const INTERES = DINERO_INICIAL * PORCENTAJE_INTERES * NUMERO_ANIOS;
console.log("El interés generado es: " + INTERES);

const FACTOR_MEDIO = 0.5;
const BASE = 5;
const ALTURA = 10;
const AREA = BASE * ALTURA * FACTOR_MEDIO;
console.log("El área del triángulo es: " + AREA);