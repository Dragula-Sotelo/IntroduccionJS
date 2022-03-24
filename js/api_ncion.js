//Notificación API
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(result => console.log(`El resultado es: ${result}`))
});

if(Notification.permission == 'granted') {
    new Notification ('Esta es una notificación', {
        icon: '../img/rick_morty.png',
        body: 'Tirando código'
    })
}
