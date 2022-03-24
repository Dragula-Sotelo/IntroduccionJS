"use strict"; //Ejecutar código de JavaScript de forma estricta que debe seguir las buenas prácticas. Correr JS en modo estricto
const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true,
}

// Object.freeze(producto) //Freeze no te permite agregar, ni eliminar nuevas propiedades, ni cambiar un valor.
Object.seal(producto); //Seal no te permite eliminar, modificar; pero si te deja modificar los existentes.
// producto.imagen = 'imagen.jpg';
// console.log(Object.isFrozen(producto)); //Para saber sí un objeto está sellado.
// console.log(Object.isseal(producto));
producto.precio = 'Nuevo Precio'

console.log(producto);
