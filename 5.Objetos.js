let arreglo = ['HTML', 15, true];
console.log(arreglo);

let objeto = {
    nombre: 'HTML',
    duración: 15,
    estado: true,
    //Pueden existir objetos dentro de otros objetos
    capitulos: {
        nombre: 'Introducción',
        videos: 15
    }
}
//Se imprime el objeto
console.log(objeto);

//Imprimir una propiedad del objeto
console.log(objeto['nombre']);
//o
console.log(objeto.capitulos);

//Arreglo de objetos

let arregloObjetos = [
    {
        nombre: 'HTML',
        estado: true
    },
    {
        nombre: 'JS',
        estado: true
    },
    {
        nombre: 'CSS',
        estado: true
    }
];

console.log('Arreglo de objetos');

console.log(arregloObjetos);

for (let index = 0; index < arregloObjetos.length; index++) {
    console.log(arregloObjetos[index]);
}

for (const iterator of arregloObjetos) {
    console.log(iterator);
}

var dolar = [{"fecha":"2020-01-31T03:00:00.000Z","valor":797.96},{"fecha":"2020-01-30T03:00:00.000Z","valor":788.18},{"fecha":"2020-01-29T03:00:00.000Z","valor":788.13},{"fecha":"2020-01-28T03:00:00.000Z","valor":787.86},{"fecha":"2020-01-27T03:00:00.000Z","valor":776.52},{"fecha":"2020-01-24T03:00:00.000Z","valor":771.94},{"fecha":"2020-01-23T03:00:00.000Z","valor":772.12},{"fecha":"2020-01-22T03:00:00.000Z","valor":770.5},{"fecha":"2020-01-21T03:00:00.000Z","valor":769.93},{"fecha":"2020-01-20T03:00:00.000Z","valor":771.38},{"fecha":"2020-01-17T03:00:00.000Z","valor":773.36},{"fecha":"2020-01-16T03:00:00.000Z","valor":772.01},{"fecha":"2020-01-15T03:00:00.000Z","valor":772.29},{"fecha":"2020-01-14T03:00:00.000Z","valor":777.66},{"fecha":"2020-01-13T03:00:00.000Z","valor":770.56},{"fecha":"2020-01-10T03:00:00.000Z","valor":764.69},{"fecha":"2020-01-09T03:00:00.000Z","valor":766.83},{"fecha":"2020-01-08T03:00:00.000Z","valor":773.12},{"fecha":"2020-01-07T03:00:00.000Z","valor":771.82},{"fecha":"2020-01-06T03:00:00.000Z","valor":758.49},{"fecha":"2020-01-03T03:00:00.000Z","valor":754.16},{"fecha":"2020-01-02T03:00:00.000Z","valor":748.74},{"fecha":"2019-12-30T03:00:00.000Z","valor":744.62},{"fecha":"2019-12-27T03:00:00.000Z","valor":746.66},{"fecha":"2019-12-26T03:00:00.000Z","valor":751.04},{"fecha":"2019-12-24T03:00:00.000Z","valor":754.27},{"fecha":"2019-12-23T03:00:00.000Z","valor":749.83},{"fecha":"2019-12-20T03:00:00.000Z","valor":752.6},{"fecha":"2019-12-19T03:00:00.000Z","valor":752.3},{"fecha":"2019-12-18T03:00:00.000Z","valor":756.95},{"fecha":"2019-12-17T03:00:00.000Z","valor":762.83}]

for (const iterator of dolar) {
    console.log(iterator);
}
