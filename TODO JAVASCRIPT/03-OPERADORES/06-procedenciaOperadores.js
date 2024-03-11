//* Procedencia de operadores 

// 1. parentesis y corchetes
// 2. operadores unarios como -, ++, --, !
// 3. aritmeticos *, / y %
// 4. aritmeticos + y -
// 5. relacionales <, <=, > y >=
// 6. igualdad == y !=
// 7. logicos && y ||
// 8. asignacion =, =+, -= etc...

//* ejemplo, se revisa de izq a der 
let a = 12 / 3 + 2 * 3 - 1;
// paso 1: divide 12/3  -> 4
// paso 2: multiplica 2 * 3 -> 6 
// let a = 4 +  6 - 1 ;
// paso 3: suma 4 + 6 -> 10
// paso 4: resta 10 -1 -> 9
console.log(a); // imprime 9