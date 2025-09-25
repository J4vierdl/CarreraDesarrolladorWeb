// Tipos de datos en JavaScript

/*
[Booleano]: Representa un valor logico true, false
[Null]: Representa un valor nulo o sin valor
[Indefinido (undefined)]: Representa una variable que no ha sido asignada o que no tiene un valor asignado.
[Number]: Representa tanto numeros enteros como numeros de punto flotante (decimales).
[BigInt]: Representa numeros enteros muy grandes que exceden el limite de los numeros normales en JavaScript.
[Cadena de texto (String)]: Representa una secuencia de caracteres, como palabras o frases.
[Objeto (Object)]: Representa una coleccion de propiedades y metodos. Ejemplo: Arrays, Funciones, Fechas, Expresiones regulares. {nombre: "Juan", edad: 30}
*/

'use strict'

var numero_entero = 44; // Number
var cadena_texto = "Hola que tal"; // String
var cadena_texto_doble = 'Hola que tal "como" estas?'; // String
var verdadero_falso = true; // Boolean
var verdadero_falso2 = false; // Boolean
var nulo = null; // Null
var indefinido; // Undefined
var indefinido2; // Undefined

console.log(numero_entero, cadena_texto, verdadero_falso, nulo, indefinido, indefinido2);

console.log(typeof (numero_entero));

// Convertir un string a numero
var numero_falso = "25";
var numero_convertido = (Number(numero_falso)+5) // Number
console.log(numero_convertido);
console.log(typeof (numero_convertido));

console.log(parseInt(numero_convertido)); // Convierte a entero
console.log(parseFloat(numero_convertido)); // Convierte a decimal

// Convertir un numero a string
var numero_string = 44;
var numero_string2 = String (numero_string); // String
console.log(numero_string2);
console.log(typeof (numero_string2));