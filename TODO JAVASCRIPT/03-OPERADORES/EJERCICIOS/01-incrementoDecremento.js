//* Ejercicio 1: Incrementa una variable x en 1 usando el operador de pre-incremento.
let x;
x = 0;
console.log(++x); // Resultado: 1

//* Ejercicio 2: Decrementa una variable y en 1 usando el operador de post-decremento.
let y;
y = 2;
console.log(y--); // Resultado: 2 (El decremento se aplica después de imprimir)
console.log(y--); // Resultado: 1 (El decremento se aplica de nuevo)

//* Ejercicio 3: Multiplica dos variables a y b, y luego incrementa a en 1 usando una sola línea de código.
let a = 1;
let b = 2;
a = a++ * b; // Se multiplica a (1) por b (2) y luego se incrementa a en 1, pero esto no afecta el resultado final.
console.log(a); // Resultado: 2

//* Ejercicio 4: Decrementa una variable c en 1 y luego multiplica por 5 el resultado, usando una sola línea de código.
let c = 2;
c = --c * 5; // Se decrementa c en 1 (1) y luego se multiplica por 5.
console.log(c); // Resultado: 5
