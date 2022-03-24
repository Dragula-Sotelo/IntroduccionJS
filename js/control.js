//Estructura de Control o código condicional
// const puntaje = "1000";

// if(puntaje === 1000) {
//     console.log('Si el puntaje es mil');
// } else {
//     console.log('No es igual');
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito) {
//     console.log('El usuario puede pagar');
// } else {
//     console.log('Fondos insuficientes');
// }

const rol = 'editor';

if (rol === 'Administrador') {
    console.log('Acceso a toddo el sistema');
}else if(rol === 'editor') {
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho');
} else {
    console.log('No tienes acceso');
}
