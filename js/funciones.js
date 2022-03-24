// Funciones: son una serie de procedimientos o instrucciones que realizan una acción.
//Declaración de Función
function sumar() {
    console.log(10 + 10);
}
sumar()

//Expresión de la función
const sumar_dos = function() {
    console.log(3 + 3);
}
sumar_dos()

//IIFE
// (function(){

//     console.log('Esto es una función IIFE');
// })(); // Sirven para proteger las variables que no se mezclen con otro archivo.

// hoisting: Javascript se ejecuta en dos vueltas. Primero se registran o crean las funciones y después los llamados, la ejecución. 
