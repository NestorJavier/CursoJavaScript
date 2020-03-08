let contenido = document.getElementById('contenido');
let boton = document.getElementById('bot');

function traer() {
    fetch('tabla.json')
    .then(res => res.json())//Respuesta de la api, res.json() establece eltipo de respuesta que esperamos
    .then(data => {
        tabla(data);
        
    })
}
//El parametro datos es el arreglo en formato json
function tabla(datos) {
    
    
    for (let valor of datos) {
        //console.log(valor.nombre);
        contenido.innerHTML += 
                                `
                                <tr>
                                    <th scope="row">${valor.id}</th>
                                    <td>${valor.nombre}</td>
                                    <td>${valor.email}</td>
                                    <td>${valor.estado ? "Activo" : "Inactivo"}</td>
                                </tr>
                                `;
    }
}
boton.onclick = traer;