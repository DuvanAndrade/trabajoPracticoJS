let nombreCliente = 'pepito';
let passwordCliente = '123';
let stockAnillos = 10;
let stockPulseras = 10;
let stockCollares = 10;
let cantDeseada;
let opcionDeCompra;
let idIngresado;
const valorEnvio = 1000;


fetch('js/productos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener los datos')
        }

        return response.json()
    })
    .then(data => console.log(data));