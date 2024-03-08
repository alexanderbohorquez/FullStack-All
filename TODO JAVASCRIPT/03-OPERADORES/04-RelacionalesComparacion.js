//* Operadores Relacionales (comparacion)
let a = 5;
let b = "5";
console.log(a); // Imprime el valor de 'a': 5
console.log(b); // Imprime el valor de 'b': "5"

//* operadores de igualdad ==
// (solo compara valores, y hace una conversión si es necesario)
console.log("a == b ->", a == b); // Imprime el resultado de la comparación: true

//* operador igualdad estricta o exacta
// se compara el valor y el tipo de dato 
console.log("a === b ->", a === b); // Imprime el resultado de la comparación: false
// string interpolation 
console.log(`${a} === ${b} -> ${a === b}`); // Imprime el resultado de la comparación: "5 === 5 -> false"

//* operador distinto
// compara valor y convierte el tipo de dato si es necesario 
console.log(`${a} != ${b} -> ${a != b}`); // Imprime el resultado de la comparación: "5 != 5 -> false"

//* operador distinto pero exacto
// compara el valor y el tipo de dato 
console.log(`${a} !== ${b} -> ${a !== b}`); // Imprime el resultado de la comparación: "5 !== 5 -> true"

//* operador menor que
console.log(`${a} < ${b} -> ${a < b}`); // Imprime el resultado de la comparación: false

//* operador menor o igual que 
console.log(`${a} <= ${b} -> ${a <= b}`); // Imprime el resultado de la comparación: false

//* operador mayor que
console.log(`${a} > ${b} -> ${a > b}`); // Imprime el resultado de la comparación: true

//* operador mayor o igual que
console.log(`${a} >= ${b} -> ${a >= b}`); // Imprime el resultado de la comparación: true
