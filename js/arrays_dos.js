// Array Methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20\"', precio: 500},
    {nombre: 'Tv 50\"', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
]

// forEach, iterando cada uno de ellos
meses.forEach(function(mes) {
    // console.log(mes);
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})

// Includes
const resultado = meses.includes('Marzo');
console.log(resultado);

//Some ideal para arreglo de objetos
const resultado_dos = carrito.some(function(producto) {
    return producto.nombre === 'Celular'
})
// const resultado_dos = carrito.some(producto => producto.nombre === 'Celular Pro') // Arroy function
console.log(resultado_dos);

// Reduce va a tomar todos los número y va a entregar un resultado.
const resultado_tres = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);
// const resultado_tres = carrito.reduce((total, producto) => total + producto.precio, 0)

console.log(resultado_tres);

//filter
const resultado_cuatro = carrito.filter(function(producto) {
    return producto.precio < 400;
});
const resultado_cinco = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular';
});
console.log(resultado_cuatro);
console.log(resultado_cinco);
