let nombreCliente = 'pepito';
let passwordCliente = '123';
let stockAnillos = 10;
let stockPulseras = 10;
let stockCollares = 10;
let cantDeseada;
let opcionDeCompra;


//CREO ARRAY Y OBJETO DE PRODUCTOS

const productos = [
    //COLLARES
    {
        id: "collar-01",
        titulo: "Collar Cruz de Plata",
        imagen: "../assets/img/collares/collarPlataCruz.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-02",
        titulo: "Collar Doble Aro",
        imagen: "../assets/img/collares/collarDobleAro.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-03",
        titulo: "Collar Perla de Oro",
        imagen: "../assets/img/collares/collarOroPerla.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-04",
        titulo: "Collar Perlas",
        imagen: "../assets/img/collares/collarPerlas.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-05",
        titulo: "Collar Triple de Plata",
        imagen: "../assets/img/collares/collarPlatatriple.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    //PPULSERAS
    {
        id: "pulsera-01",
        titulo: "Pulsera Galapagos de Plata",
        imagen: "../assets/img/pulseras/pulseraGalapagosPlata.jpeg",
        categoria: {
            nombre: "pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    {
        id: "pulsera-02",
        titulo: "Pulsera Oslo",
        imagen: "../assets/img/pulseras/pulseraOslo.jpeg",
        categoria: {
            nombre: "pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    {
        id: "pulsera-03",
        titulo: "Pulsera Soho de Plata",
        imagen: "../assets/img/pulseras/pulseraSohoPlata.jpeg",
        categoria: {
            nombre: "pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    {
        id: "pulsera-01",
        titulo: "Pulsera Tarragona",
        imagen: "../assets/img/pulseras/pulseraTarragona.jpeg",
        categoria: {
            nombre: "pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    //ANILLOS
    {
        id: "anillo-01",
        titulo: "Anillo Banda Miebius",
        imagen: "../assets/img/anillos/anilloBandaMiebius.jpg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo-02",
        titulo: "Anillo Corona Rosa",
        imagen: "../assets/img/anillos/anilloCoronaRosa.jpg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo-03",
        titulo: "Anillo Hoja",
        imagen: "../assets/img/anillos/anilloHoja.jpg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo-04",
        titulo: "Anillo Malaga",
        imagen: "../assets/img/anillos/anilloMalaga.jpeg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo-05",
        titulo: "Anillo Sydeny",
        imagen: "../assets/img/anillos/anilloSydney.jpeg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo-06",
        titulo: "Anillo Sydeny de Plata",
        imagen: "../assets/img/anillos/anilloSydneyPlata.jpeg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
]
//MOSTRAR PRODUCTOS DE LA TIENDA, ESTO LO VE EL USUARIO SE O NO CLIENTE
mostrarProductos();

//FILTRAR ELEMENTOS POR CATEGORIA

const anillos = productos.filter((anillo => anillo.categoria.nombre.includes === 'anillos'));
const collares = productos.filter((collar => collar.categoria.nombre === 'collares'));
const pulseras = productos.filter((pulsera => pulsera.categoria.nombre === 'pulseras'));

//MOTRAMOS LOS NUEVOS ARRAYS QUE SE HAN FILTRADO POR CATEGORIA
//console.log(anillos);
//console.log(anillos);
//console.log(anillos);

//PIDO INGRESO DE USUARIO
let clienteIngresado = prompt('Ingrese Usuario:');
let passwordIngresada = prompt('Ingrese Contraseña:');

/* validar que el usuario creado de ejemplo sea el mismo ingresado por consola  */
 function validarUsuario(){
     if (clienteIngresado === nombreCliente && passwordIngresada === passwordCliente){
         alert('Bienvenido ' + clienteIngresado);
        
         do {
            
            opcionDeCompra = parseInt(prompt('Igrese una de las siguientes opciones: \n1: Anillos. \n2: Collares. \n3: Pulseras  \n4: para salir'));
            switch (opcionDeCompra) {
                case 1:
                cantDeseada = parseInt(prompt('Ingrese la cantidad deseada de anillos que deseas comprar'));
                /*VERIFICO QUE INGRESE UN NUMERO MAYOR A CERO DE PRODCUTOS */
                while(cantDeseada <= 0){
                    alert('Ingrese por lo menos un producto');
                    cantDeseada = parseInt(prompt('Ingrese la cantidad deseada de anillos a comprar'));      
                }
                /* LLAMO LA FUNCION VALIDAD STOCK QUE VERIFICA SI LA CAIDAD QUE SE QUIERE AGREGAR ES MENOR AL STOCK, SI NO PIDE INGRESAR UNA CANTIDAD MENOR Y ACTUALIZA 
                EL STOCK*/
                validarStock(cantDeseada, stockAnillos);
                stockAnillos -= cantDeseada;
                console.log(stockAnillos)
                    
                    break;
                case 2:
                cantDeseada = parseInt(prompt('Ingrese la cantidad deseada de pulseras que deseas comprar'));
                /*VERIFICO QUE INGRESE UN NUMERO MAYOR A CERO DE PRODCUTOS */
                while(cantDeseada <= 0){
                    alert('Ingrese por lo menos un producto');
                    cantDeseada = parseInt(prompt('Ingrese la cantidad deseada de pulseras a comprar'));      
                }
                /* LLAMO LA FUNCION VALIDAD STOCK QUE VERIFICA SI LA CAIDAD QUE SE QUIERE AGREGAR ES MENOR AL STOCK, SI NO PIDE INGRESAR UNA CANTIDAD MENOR Y ACTUALIZA 
                EL STOCK*/
                validarStock(cantDeseada, stockPulseras);
                stockPulseras -= cantDeseada;
                console.log(stockPulseras)
                    break;
                case 3:
                cantDeseada = parseInt(prompt('Ingrese la cantidad deseada de collares que deseas comprar'));
                    /*VERIFICO QUE INGRESE UN NUMERO MAYOR A CERO DE PRODCUTOS */
                while(cantDeseada <= 0){
                    alert('Ingrese por lo menos un producto');
                    cantDeseada = parseInt(prompt('Ingrese la cantidad deseada de collares a comprar'));      
                }
                    /* LLAMO LA FUNCION VALIDAR STOCK QUE VERIFICA SI LA CANTIDAD QUE SE QUIERE AGREGAR ES MENOR AL STOCK, SI NO PIDE INGRESAR UNA CANTIDAD MENOR Y ACTUALIZA 
                    EL STOCK*/
                validarStock(cantDeseada, stockCollares);
                stockCollares -= cantDeseada;
                console.log(stockCollares)      
                    break;
                case 4:
                    alert('Vuelva pronto');
                    break;
                default:
                    alert('Opción inválida');
                    break;
            }
        
        } while (opcionDeCompra !== 4 );

     }else{
         alert('Nombre de usuario o contraseña incorrectos');
     }

 }
 validarUsuario();



function validarStock(cantidadDeseada, stockProductos){
    if(cantidadDeseada > stockProductos){
        alert('Lo sentimos. La cantidad deseada supera la exitente')
        do {
            cantDeseada = parseInt(prompt('Pruebe otra cantidad menor'));
        } while (cantDeseada > stockProductos);
    
    }else{
        alert('Tus productos fueron agregados exitosamente')
        
    }
}


//FUNCION PARA MOSTRAR PRODUCTOS DISPONIBLES

function mostrarProductos(){
    let mensaje = "Nuestros Productos\n";
    productos.map((producto) => {
        mensaje += (`\n${producto.id}: ${producto.titulo}\n $${producto.precio} \n -------------------------------- \n`);
    });
    alert(mensaje);
}



//CREAMOS FUNCION AGREGAR PRODUCTO QUE RECIBE UN CARRITO Y UN ID DEL PRODUCTO AGREGANDO AL CARRITO
function agregarProductoAlCarrito(carrito, idProducto){
    const producto = productos.find((product) => product.id === idProducto);
    if(producto){
        carrito.push(producto);
        console.log(`Se ha agregado ${producto.titulo} al carrito.`);
    }else {
        console.log("El producto no existe.");
      }
    
}  

//CREACION DEL CARRITO DE COMPRAS VACIO PARA LUEGO IR AGREGANDO PRODUCTOS
let carritoDeCompras = [];
  
//AGRAGAMOS LOS PRODUCTOS AL CARRITO
agregarProductoAlCarrito(carritoDeCompras, 'collar-01'); // Agregar un collar
agregarProductoAlCarrito(carritoDeCompras, 'collar-02'); // Agregar una pulsera
agregarProductoAlCarrito(carritoDeCompras, 'collar-03'); // Intentar agregar un producto inexistente
  
// SE MUESTRA LOS PRODUCTOS AGRAGADOS AL CARRITO
console.log("Contenido del carrito:", carritoDeCompras);
  
  // Calculamos el total de la compra
  //const totalComprass = calcularTotal(carritoDeCompras);
 // console.log(`El total de la compra es: $${totalCompra}`);
  
//CALCULO DEL VALOR TOTAL DEL CARRITO
const valorEnvio = 1000;
function valorTotalCarrito(){
   console.log(`El total de la compra es: $` + carritoDeCompras.reduce((acumulador, producto) => acumulador + (producto.precio), 0) + 
   ' más el costo de envio:' + valorEnvio);
   
}
valorTotalCarrito();


