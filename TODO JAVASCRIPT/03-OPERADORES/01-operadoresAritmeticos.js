//* OPERADORES ARITMETICOS
let a, b, c, d, e, f;

//* SUMA: Se suma 3 y 4, y el resultado se guarda en 'a', luego se imprime 'a'.
a = 3 + 4;
console.log(a);

//* RESTA: Se resta 2 de 6, y el resultado se guarda en 'b', luego se imprime 'b'.
b = 6 - 2;
console.log(b);

//* MULTIPLICACION: Se multiplica 'a' por 2, el resultado se guarda en 'c', luego se imprime 'c'.
c = a * 2
console.log(c);

//* DIVICION: Se divide 'b' por 2.5, el resultado se guarda en 'd', luego se imprime 'd' junto con su tipo.
d = b / 2.5;
console.log(d);
console.log(typeof d);

//* MODULO: Se calcula el residuo de dividir 9 entre 2, el resultado se guarda en 'f', luego se imprime 'f'.
f = 9 % 2;
console.log(f);

//* POTENCIA: Se eleva 2 a la potencia de 3, el resultado se guarda en 'e', luego se imprime 'e'.
e = 2 ** 3 //! 2 * 2 * 2 = 8
console.log(e);

e = Math.pow(2,3);
console.log(e);