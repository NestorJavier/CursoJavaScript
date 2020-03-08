//Document Object Model
//obtiene un elemento por su Id
let h1 = document.getElementById("titulo");
h1.style.color = "red";
h1.style.background = "blue";
console.log(h1.innerHTML);

//Cuando se obtinene un elemento por su clase si existen varios elementos con el mismo nombre de la clase
//entonces lo que se obtiene son un arreglo de elementos
let parrafo = document.getElementsByClassName("lead");
console.log(parrafo[0]);

//obtiene un elemento por su tipo, ya sea h1, h2, p, div, etc...
//Si existen varios elementos del mismo tipo solo obtendra el prmero 
//que encuentre en el documento
let parraf = document.querySelector('p');

//Cuando se requiere que obtenga todos los elementos 
//de un mismo tipo se usa de esta forma
let parraf2 = document.querySelectorAll('p');

let boton = document.getElementById("boton");
function cambiar(){
    h1.innerHTML = "Nuevo texto";
}
boton.onclick = cambiar;
//Función anonima, ya que no tiene nombre asignado
/*
boton.onclick = function(){
    parrafo.style.color = "green";
}
*/

//Eventos
let btn = document.getElementById("boton2");
btn.addEventListener('click', function(){
    console.log('me diste un click');
})

btn.addEventListener('mouseover', function(){
    console.log('he detectado el raton');
})

btn.addEventListener('mouseout', function(){
    console.log('el raton salio');
})
