// Métodos de propiedad: mantienen toda la información en un solo objeto
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo Playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`);
}

console.log(reproductor);
reproductor.reproducir(3940);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Lo+Sonado');
reproductor.reproducirPlaylist('Lo+Sonado');
