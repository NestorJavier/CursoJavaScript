//Variables globales

let formularioUI = document.querySelector('#formulario');
let listaActividadesUI = document.querySelector('#listaActividades');

let arrayActividades = [];

//Funciones
const creaItem = (actividad) => {

    let item = {
        actividad: actividad,
        estado: false
    }
    arrayActividades.push(item);

    return item;
}

const eliminarDB = (actividad) => { 
 arrayActividades.forEach((element, indice) => {
     if(element.actividad === actividad)
     {
        arrayActividades.splice(indice, 1);
        guardarDB();
    }
 });   
}

const editarDB = (actividad) => {
    //let indice = arrayActividades.findIndex((elemento) => elemento.actividad === actividad ); Esta linea retorna el indice donde se cumple la condición
    //                                                                                          se puede hacer de esta forma o tambien como abajo
    let indice = arrayActividades.findIndex((elemento) => {
        return elemento.actividad === actividad //Para fines de lectura de codigo, se ve mejor de esta forma
    });

    console.log(arrayActividades[indice].estado);
    arrayActividades[indice].estado = true;
    guardarDB();
}

const guardarDB = () => {
    localStorage.setItem('rutina', JSON.stringify(arrayActividades));//JSON.stringify hace una conversión del array a formato JSON
    pintarDB();
}

const pintarDB = () => {
    listaActividadesUI.innerHTML = '';
    arrayActividades = JSON.parse(localStorage.getItem('rutina'));
    if(arrayActividades === null){
        arrayActividades = [];
    }else{
        console.log(arrayActividades);
        for (const iterator of arrayActividades) {
            
            let estilo = '';
            if(iterator.estado)
                estilo = 'success';
            else
                estilo = 'danger';
            listaActividadesUI.innerHTML += `
                                            <div class="alert alert-${estilo}" role="alert">
                                                <i class="material-icons float-left mr-3">
                                                    accessibility
                                                </i>
                                                <b>${iterator.actividad}</b> - ${iterator.estado}
                                                <span class="float-right">
                                                <i class="material-icons">
                                                    done
                                                </i>
                                                <i class="material-icons">
                                                    delete
                                                </i>
                                                </span>
                                            </div>
                                            `;
        }
    }
}

//Event listener
formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();

    let actividadUI = document.querySelector('#actividad').value;
    
    creaItem(actividadUI);
    guardarDB();    
    formularioUI.reset();
});


//Agregar la información del local storage al DOM

document.addEventListener('DOMContentLoaded', pintarDB);//Este evento se genera cuando se carga el html, osea que es lo primero que se ejecuta despues de cargar el html

listaActividadesUI.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.innerText === 'done')
    {
        div = e.target.parentNode.parentNode;
        editarDB(div.children[1].innerText);

    }else if(e.target.innerText === 'delete'){
        
        div = e.target.parentNode.parentNode;
        eliminarDB(div.children[1].innerText);
    }
    
});