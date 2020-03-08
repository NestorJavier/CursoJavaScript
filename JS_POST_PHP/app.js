let formulario = document.getElementById('formulario');
let resp = document.getElementById('respuesta');
formulario.addEventListener('submit', function(e){//detecta el evento submit del boton dentro del formulario
    e.preventDefault();//Evita que se ejecute por defecto lo que viene en el navegador
    console.log('me diste un click');

    let datos = new FormData(formulario);//Variabl que contiene los datos de los campos del formulario
    console.log(datos);
    console.log(datos.get('usuario'));
    console.log(datos.get('pass'));

    fetch('post.php', {//el metodo por default de fetch es get, para solucionar esto se hace lo siguiente
        method: 'POST',
        body: datos//información que se envia del formulario
    })
    .then(res => res.json())
    .then(data => {
        console.log('información de regreso: '+data);
        if(data === 'error'){
            resp.innerHTML =    `
                                    <div class="alert alert-primary" role="alert">
                                        Llena todos los campos
                                    </div>
                                `;
        }else{
            resp.innerHTML =    `
                                    <div class="alert alert-primary" role="alert">
                                        ${data}
                                    </div>
                                `;
        }
    });
    //;

});
