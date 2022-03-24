//iteradores: va a ejecutar un código mientras una condición sea verdadera y lo deja de ejecutar cuando se deja de cumplir
//For Loops
// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for(let i = 1; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(`El Número ${i} es Par`);
//     } else {
//         console.log(`El Número ${i} es Impar`);
//     }
// }

const carrito = [
    {nombre: 'Monitor 20\"', precio: 500},
    {nombre: 'Tv 50\"', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

for(let i = 0; i < carrito.length; i++){ 
    // console.log(carrito[i].nombre);
}

//While Loop
// let i = 0; // indice
// while(i < 10) {// condición
//     console.log(i);

//     i++;//incremento
// }

// let i = 1;
// while(i <=100) {
//     if(i % 2 === 0){
//          console.log(`El número ${i} es Par`);
//     } else {
//         console.log(`El Número ${i} es Impar`);
//     }
//     i++;
// }

// let i = 0;
// while(i < carrito.length){
//     console.log(carrito[i].nombre);
//     i++;
// }

// Do While Loop: se ejecuta al menos una vez y después evalua si la condición se cumple.
let i = 100;
do {
    console.log(i);
    i++;
} while(i < 10);
