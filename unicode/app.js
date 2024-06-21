//1 ejercicio 1: let expresion = /\p{Sc}/gu;
//2 ejercicio 2: let expresion = /\p{Z}/gu;
//3 ejercicio 3: let expresion = /[\p{Script=Latin}\p{Script=Greek}]/gu;
//4 ejercicio 4: 
let texto = "letras y numeros 123abc";
let expresion = /[\p{L}\p{N}]/gu;
console.log(texto.match(expresion));