//iteradores forEach, map. Solo se pueden ejecutar en arreglos. Es un método de un arreglo.
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

//ForEach: Sí quieres iterar sobre un arreglo y mostrar los elementos en pantalla o mostrarlos en la consola.
carrito.forEach(producto => console.log(producto));

//map: Sí quieres crear un nuevo arreglo
const arreglo = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo);
