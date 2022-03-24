//POO Prototype JavaScript
//Un Prototype es una función que está asociada a un tipo de objeto.
// Object Literal: colocas los valores, no es dinamico, es estatico, código duro.
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
// Crear funciones que solo se utilizan en un objeto en especifico.
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

//Object Constructor: es más dinamico.
//clase: es una forma en la que puedes almacenar la forma(datos) que va a tener un objeto en especifico, de todos los metodos y funciones.
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
}
//instancia de la clase
const producto_dos = new Producto('Monitor Curvo de 49\"', 800);
const producto_tres = new Producto('Laptop', 400);
const cliente = new Cliente('Miguel', 'Sotelo');

// function formatearProducto(producto) {
//     return `El Producto ${producto.nombre} tiene un precio de: $${producto.precio}`;
// }

console.log(cliente.formatearCliente());
console.log(producto_dos.formatearProducto());
console.log(producto_tres.formatearProducto());
