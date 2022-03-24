const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'Tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Pago con cheque, revisaremos que tenga fondos');
        break;
    case 'bitcoin':
        console.log('Pagaste con bitcoin');
        break;
    case 'efectivo':
        console.log('Pagaste en efectivo');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}
