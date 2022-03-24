// POO Classes
// Las clases siempre se colocan en mayúsculas.
class Producto {
    //clase padre
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    //método
    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`
    }
}
//Instanciar clase de producto.
const producto_uno = new Producto('Monitor Curvo de 49\"', 800);
const producto_dos = new Producto('Laptop', 300);

//POO Herencia: extends
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio)
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }
}

const libro = new Libro ('JavaScript', 120, '13204563');
console.log(libro.formatearProducto());

console.log(producto_uno.formatearProducto());
console.log(producto_dos.formatearProducto());
