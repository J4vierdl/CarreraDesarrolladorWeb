/* Para buenas practicas tenemos que usar USE STRICT sirve para que me tire un arror si no hago buenas practicas, por ejemmplo si quito la palabra VAR cuando defino una variable; me señala un error.*/
'use strict' 
var pais = "Argentina";
var figura = "Messi";
var camiseta = 10;
var pais_y_figura = pais + " " + figura; /*Concatenacion de variables*/


/*Tambien podemos definir variables con LET */
let prueba = "hola";
/*Tambien podemos definir variables con CONST */
const prueba_constante = "adios";

pais = "Brasil"; /*Puedo cambiar el valor de la variable pais porque esta definida con VAR o LET, pero no puedo cambiar el valor de la variable prueba_constante porque esta definida con CONST*/
figura = "Ronaldo";
camiseta = 9;

console.log(pais, figura, camiseta);
console.log(pais_y_figura);

