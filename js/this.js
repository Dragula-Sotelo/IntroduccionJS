//  This
//function() y this, hace referencia a las propiedades del objeto sobre el cual se está ejecutando esa función.
// arrow function y this, this hace referencia this a la ventan global (window)
const reservacion = { // Object Literal
    nombre: 'Miguel',
    apellido: 'Sotelo',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
