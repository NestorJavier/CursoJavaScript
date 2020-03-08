//Variables globales
const btnBotones = document.querySelector('#btnBotones');
const botones = document.querySelector('#botones');
const fondo = document.querySelector('#fondo');

//(() => {
    btnBotones.addEventListener('click', agregarBotones);
    botones.addEventListener('click', delegacion);
//})();
function delegacion(e) {
    e.preventDefault();
    let colorBoton = e.target.classList[1];//e.target.classList nos da acceso a la lista de clases del elemento que se esta clickeando
    console.log(colorBoton);

    switch (colorBoton) {
        case 'btn-primary':
            fondo.classList = 'btn-primary';
        break;
        case 'btn-secondary':
            fondo.classList = 'btn-secondary';
        break;
        case 'btn-danger':
            fondo.classList = 'btn-danger';
        break;
        case 'btn-success':
            fondo.classList = 'btn-success';
        break;
        case 'btn-warning':
            fondo.classList = 'btn-warning';
        break;
    }
}
function agregarBotones(e) {
    e.preventDefault();
    botones.innerHTML +=    `
                                <button class="btn btn-primary">primary</button>
                                <button class="btn btn-secondary">secondary</button>
                                <button class="btn btn-danger">danger</button>
                                <button class="btn btn-success">success</button>
                                <button class="btn btn-warning">warning</button>
                            `;
    
}