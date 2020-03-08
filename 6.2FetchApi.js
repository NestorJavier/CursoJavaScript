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
    fetch('https://randomuser.me/api/')
    .then(res => res.json())//Respuesta de la api, re.json() establece eltipo de respuesta que esperamos
    .then(data => {
        console.log(data.results[0].name.last);
        contenido.innerHTML = 
                                `
                                    <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
                                    <p>Nombre: ${data.results[0].name.first + ' ' + data.results[0].name.last}</p>
                                `;
    })
}

boton.onclick = traer;


/**Estructura del objeto json
 * [{
 *      "gender":"female",
 *      "name":{
 *                  "title":"Mrs",
 *                  "first":"Alison",
 *                  "last":"Brown"
 *              },
 *      "location":{
 *                   "street":{
 *                               "number":7727,
 *                               "name":"Victoria Street"
 *                            },
 *                   "city":"Newry",
 *                   "state":"Oxfordshire,
 *                   "country":"United Kingdom",
 *                   "postcode":"E6Y 8XF",
 *                   "coordinates":{
 *                                       "latitude":"13.3811",
 *                                       "longitude":"85.4927"
 *                                  },
 *                   "timezone   ":{
 *                                "offset":"-10:00",
 *                                "description":"Hawaii"
 *                                }
 *                  },
 *      "email":"alison.brown@example.com",
 *      "login":{
 *                  "uuid":"0191ce9b-97bb-429b-8a4c-fe319abcf028",
 *                  "username":"silverzebra898",
 *                  "password":"deaths",
 *                  "salt":"DRSkLUWN",
 *                  "md5":"df492a4d97820eb636bda51d6228ab5e",
 *                  "sha1":"14dcfef6c44c7acdbf8f89a767da4edeeac3ab11",
 *                  "sha256":"631d37fb3ff8e211d8afd1d7e409bd0043641a88dc6216c1e8d58d1183a23e18"
 *              },
 *        "dob":{
 *                  "date":"1956-01-26T19:05:16.383Z",
 *                  "age":64
 *              },
 *         "registered":{
 *                          "date":"2003-09-24T22:27:19.374Z",
 *                          "age":17
 *                      },
 *          "phone":"016977 1028",
 *          "cell":"0702-682-080",
 *          "id":{
 *                  "name":"NINO",
 *                  "value":"MY 77 77 90 E"
 *               },
 *          "picture":{
 *                      "large":"https://randomuser.me/api/portraits/women/57.jpg",
 *                      "medium":"https://randomuser.me/api/portraits/med/women/57.jpg",
 *                      "thumbnail":"https://randomuser.me/api/portraits/thumb/women/57.jpg"
 * },
 * 
 * "nat":"GB"}
 * 
 * ] */