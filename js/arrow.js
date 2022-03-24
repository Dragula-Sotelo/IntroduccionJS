// Arrow Functions

// Expresión de la función
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// Array Methods con arrow functions
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
meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})

//Some ideal para arreglo de objetos
const resultado_dos = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado_dos);

// Reduce va a tomar todos los número y va a entregar un resultado.
const resultado_tres = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado_tres);

//filter
const resultado_cuatro = carrito.filter(producto => producto.precio < 400);
const resultado_cinco = carrito.filter(producto => producto.nombre !== 'Celular');
console.log(resultado_cuatro);
console.log(resultado_cinco);

