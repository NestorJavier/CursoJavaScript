//Inmediately Invoked Function Expretion

function suscribete() {//función normal, la cual se tiene que llamar para ser ejecutada
    console.log("suscribete");
}

suscribete();

//IIFE
(function suscribete() {//función normal que se autoejecuta
    console.log("suscribete");
})();

//IIFE usando funciones flecha

(() => {
    console.log("suscribete FF");
})();

//IIFE usando funciones flecha con parametros
((param) => {
    console.log("suscribete " + param);
})("Juanito");


//IIFE usando funciones flecha con parametros por default
((param = "ignacio") => {
    console.log("suscribete " + param);
})();




//IIFE usando funciones flecha con parametros por default que son cambiados por otros parametros
((param = "ignacio") => {
    console.log("suscribete " + param);
})("Negro");

