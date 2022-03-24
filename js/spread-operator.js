//Unir dos objetos lo ideal es no modificar ninguno de los dos
const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}
//Spread operator (...)
const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);
