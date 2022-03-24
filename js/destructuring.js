//Destructuring de Objetos
const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true,
}

//Forma anterior
const precioProducto = producto.precio;
const nombre_Producto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);

