let a, b, c;
a = 0;

// pre-incremento: incrementa a antes de ser utilizado
++a;
console.log(a);

// post-incremento: incrementa a después de ser utilizado
a++;
console.log(a);

// pre-decremento: decrementa a antes de ser utilizado
--a;
console.log(a);

// post-decremento: decrementa a después de ser utilizado
a--;
console.log(a);

a = 5;
b = 2;
c = ++a * b--; // Aquí, a se incrementa antes de ser multiplicado, y b se decrementa después de la multiplicación.
console.log(c); // Resultado de la operación: 6 * 2 = 12
console.log(b); // Valor de b después de la operación: 1
console.log(a); // Valor de a después de la operación: 6
