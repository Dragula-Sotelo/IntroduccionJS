// Arreglo o Arrays
const numeros = [10,20,30,40,50];
// console.table(numeros);

//Constructor
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
// console.table(meses);

// const arreglo = ['Hola', 10, true, 'si', null, {nombre: 'Miguel', trabajo: 'Programador'}, [1,2,3]];
// console.log(arreglo);

//Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

//Conocer la extensión de un arreglo
// console.log(meses.length);

//Iterador
// numeros.forEach( function(numero){
//     console.log('forEach-->', numero)
// })

// Métodos para arrays
// numeros[5] = 60;

//Agregar un nuevo elemento
//push agrega al final
numeros.push(60, 70, 80); // esto forma parte de estructura de datos
//unshift agrega al inicio
numeros.unshift(-10, -20, -30)

console.table(numeros);

//Eliminar un elemento
// meses.pop(); //elimina el último elemento
// meses.shift(); //elimina el primer elemento
// meses.splice(2, 1); //Elimina una posición dentro del arreglo
// console.table(meses);
// La desventaja es que modifican el arreglo original

//Un enfoque nuevo es mantener los datos originales y mejor crear un arreglo nuevo
//Rest Operator o Spread Operator
//Es el equivalente a un push
const nuevoArreglo = [...meses, 'Junio'];
console.table(nuevoArreglo);
//Equivalente a un shift
const meses_arreglo = ['Diciembre', ...meses]
console.table(meses_arreglo);

