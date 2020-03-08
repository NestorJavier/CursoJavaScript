//Arrow Functions

//obtiene un elemento por su Id
let saludoId = document.getElementById("saludo");

/**función tradicional
function saludar(nombre){
    return 'hola ' + nombre;
}
 */

 //función flecha
let saludar = nombre => 'hola ' + nombre;

saludoId.innerHTML = saludar('Ignacio');

let sumaId = document.getElementById("suma");

/**función tradicional
function saludar(nombre){
    return 'hola ' + nombre;
}
 */

 //función flecha
//let sumar = (num1, num2) => num1+num2;
let sumar = (num1, num2) =>{ 
    var num3=10
    return num1+num2+num3;
}
sumaId.innerHTML += sumar(10,20);