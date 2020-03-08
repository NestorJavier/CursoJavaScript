let contenido = document.getElementById('contenido');
let boton = document.getElementById('bot');

function traer() {
    //Fetch usa promesas, las promesas es un dato que se quiere obtener
    /**
     * pero no se sabe cuando podria obtenerse, es por ello que
     * es una promesa, entonces se usan las sentencias then,
     * las sentencias then son el codigo que se ha de ejecutar una vez 
     * que la promesa sea cumplida, osease una vez que se hayan 
     * obtenido los datos se va a ejecutar el codigo que contiene la se
     * sentencia then
     */
    fetch('texto.txt')
    .then(data => data.text())
    .then(data => {
        console.log(data);
        contenido.innerHTML = `${data}`;
    })
}

boton.onclick = traer;