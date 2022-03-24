//String o Cadenas de Texto
const producto = 'Monitor 20\"';
const productoDos = String('Monitor 30 Pulgadas'); //Constructor
const productoTres = new String('Monitor 50 Pulgadas');

console.log(productoDos);
console.log(productoTres);
console.log(producto);
//length es para la extención
console.log(producto.length); //después del punto van los métodos, llevan parentesis, sino lo llevan es una propiedad.

//IndexOf: En que posición se encuentra un texto que estás buscando.
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo'
console.log(tweet.indexOf('JavaScript'));
console.log(producto.indexOf('Tablet'));

//Includes (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto.includes('Tablet'));

