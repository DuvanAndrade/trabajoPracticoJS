let nombreCliente = 'pepito';
let passwordCliente = '123';
let stockAnillos = 10;
let stockPulseras = 10;
let stockCollares = 10;
let cantDeseada;
let opcionDeCompra;
let idIngresado;
const valorEnvio = 1000;

//CREO ARRAY Y OBJETO DE PRODUCTOS

const productos = [
    //COLLARES
    {
        id: 1,
        titulo: "Collar Cruz de Plata",
        imagen: "../assets/img/collares/collarPlataCruz.jpg",
        categoria: {
            nombre: "collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: 2,
        titulo: "Collar Doble Aro",
        imagen: "../assets/img/collares/collarDobleAro.jpg",
        categoria: {
            nombre: "collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: 3,
        titulo: "Collar Perla de Oro",
        imagen: "../assets/img/collares/collarOroPerla.jpg",
        categoria: {
            nombre: "collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: 4,
        titulo: "Collar Perlas",
        imagen: "../assets/img/collares/collarPerlas.jpg",
        categoria: {
            nombre: "collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: 5,
        titulo: "Collar Triple de Plata",
        imagen: "../assets/img/collares/collarPlatatriple.jpg",
        categoria: {
            nombre: "collares",
            id: "collares"
        },
        precio: 2500
    },
    //PPULSERAS
    {
        id: 6,
        titulo: "Pulsera Galapagos",
        imagen: "../assets/img/pulseras/pulseraGalapagosPlata.jpeg",
        categoria: {
            nombre: "pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    {
        id: 7,
        titulo: "Pulsera Oslo",
        imagen: "../assets/img/pulseras/pulseraOslo.jpeg",
        categoria: {
            nombre: "pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    {
        id: 8,
        titulo: "Pulsera Soho de Plata",
        imagen: "../assets/img/pulseras/pulseraSohoPlata.jpeg",
        categoria: {
            nombre: "pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    {
        id: 9,
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
        id: 10,
        titulo: "Anillo Banda Miebius",
        imagen: "../assets/img/anillos/anilloBandaMiebius.jpg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: 11,
        titulo: "Anillo Corona Rosa",
        imagen: "../assets/img/anillos/anilloCoronaRosa.jpg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: 12,
        titulo: "Anillo Hoja",
        imagen: "../assets/img/anillos/anilloHoja.jpg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: 13,
        titulo: "Anillo Malaga",
        imagen: "../assets/img/anillos/anilloMalaga.jpeg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: 14,
        titulo: "Anillo Sydeny",
        imagen: "../assets/img/anillos/anilloSydney.jpeg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: 15,
        titulo: "Anillo Sydeny de Plata",
        imagen: "../assets/img/anillos/anilloSydneyPlata.jpeg",
        categoria: {
            nombre: "anillos",
            id: "anillos"
        },
        precio: 2500
    },
]


// //MOSTRAR PRODUCTOS DE LA TIENDA, ESTO LO VE EL USUARIO SE O NO CLIENTE
// mostrarProductos();



// //PIDO INGRESO DE USUARIO
// let clienteIngresado = prompt('Ingrese Usuario:');
// let passwordIngresada = prompt('Ingrese Contraseña:');
// //INICIALIZO EL CARRITO DE COMPRAS
// const carrito = [];

// /* VALIDO QUE EL USUARIO SEA CORRECTO. DE SER ASI EJECUTO LA OPCION DE MENU Y COMPRAR DE LOS CONTRARIO MSN DE USUARIO INCORRECTO  */
//  function validarUsuario(){
//      if (clienteIngresado === nombreCliente && passwordIngresada === passwordCliente){
//          alert('Bienvenido ' + clienteIngresado);
        
//          do {
//             /*EL USUARIO ELIGE UNA OPCION DE PRODCUTOS*/
//             opcionDeCompra = parseInt(prompt('Ingrese una de las siguientes opciones: \n1: Anillos. \n2: Collares. \n3: Pulseras  \n4: para salir'));
//             switch (opcionDeCompra) {
//                 case 1:
//                     //FILTRO EL ARRAY POR ANILLOS YA QUE ES LA OPCION 1 DEL MENU
//                     const anillos = productos.filter((producto) => producto.categoria.nombre.includes("anillos"));
//                     //INVOCO FUNCION mostrarPorCategoria()               
//                     mostrarPorCategoria(anillos);
//                     //PIDO AL USUARIO QUE INGRESE EL ID DEL PRODUCTO DESEADO
//                     idIngresado= parseInt(prompt('ingrese id del producto deseado'));
//                     //CON EL ID PEDIDO INVOCO A LA FUNCION agregarAlCarrito QUE COMPARA IDS Y SI COINCIDEN AGREGA AL CARRITO
//                     agregarAlCarrito(idIngresado, anillos, carrito);
                              
//                     break;
//                 case 2:
//                     //FILTRO EL ARRAY POR ANILLOS YA QUE ES LA OPCION 1 DEL MENU
//                     const collares = productos.filter((producto) => producto.categoria.nombre.includes("collares"));
//                     //INVOCO FUNCION mostrarPorCategoria()               
//                     mostrarPorCategoria(collares);
//                     //PIDO AL USUARIO QUE INGRESE EL ID DEL PRODUCTO DESEADO
//                     idIngresado= parseInt(prompt('ingrese id del producto deseado'));
//                     //CON EL ID PEDIDO INVOCO A LA FUNCION agregarAlCarrito QUE COMPARA IDS Y SI COINCIDEN AGREGA AL CARRITO
//                     agregarAlCarrito(idIngresado, collares, carrito);
                
//                     break;
//                 case 3:
//                     //FILTRO EL ARRAY POR ANILLOS YA QUE ES LA OPCION 1 DEL MENU
//                     const pulseras = productos.filter((producto) => producto.categoria.nombre.includes("pulseras"));
//                     //INVOCO FUNCION mostrarPorCategoria()               
//                     mostrarPorCategoria(pulseras);
//                     //PIDO AL USUARIO QUE INGRESE EL ID DEL PRODUCTO DESEADO
//                     idIngresado= parseInt(prompt('ingrese id del producto deseado'));
//                     //CON EL ID PEDIDO INVOCO A LA FUNCION agregarAlCarrito QUE COMPARA IDS Y SI COINCIDEN AGREGA AL CARRITO
//                     agregarAlCarrito(idIngresado, pulseras, carrito);
                   
//                     break;
//                 case 4:
//                     alert('Vuelva pronto');
//                     break;
//                 default:
//                     alert('Opción inválida');
//                     break;
//             }
        
//         } while (opcionDeCompra !== 4 );
//         mostrarCarrito(carrito);
//         valorTotalCarrito();
//      }else{
//          alert('Nombre de usuario o contraseña incorrectos');
//      }
     
//  }
 
//  validarUsuario();
 
//  //CREO FUNCION PARA MOSTAR LOS PRODUCTOS POR CATEGORIA
// function mostrarPorCategoria(arrayPorCategoria){
//     let mensaje = "Nuestros Productos\n";
//     arrayPorCategoria.map((producto) => {
//         mensaje += (`${producto.id}: ${producto.titulo}  $${producto.precio} \n -------------------------------- \n`);
//     });
//     alert(mensaje);
// }
// //FUNCION PARA AGREGAR PRODUCTO AL CARRITO, COMPARA IDS Y DE SER IGUALES AGREGA EL PRODUCTO AL CARRITO
// function agregarAlCarrito(idIngresadoPorUsuario, arrayPorCategoria, carrito){
//     let productoSeleccionado = arrayPorCategoria.find(function(producto) {
//         return producto.id === idIngresadoPorUsuario;
//       });
//       if(productoSeleccionado){
//         carrito.push(productoSeleccionado);
//         alert("Producto agregado al carrito exitosamente")
//       }else {
//         alert("Producto inexistente");
//       }          
// }



// //FUNCION PARA MOSTRAR PRODUCTOS DISPONIBLES

// function mostrarProductos(){
//     let mensaje = "Nuestros Productos\n";
//     productos.map((producto) => {
//         mensaje += (`${producto.id}: ${producto.titulo}  $${producto.precio} \n -------------------------------- \n`);
//     });
//     alert(mensaje);
// }

// //CALCULO DEL VALOR TOTAL DEL CARRITO
// function valorTotalCarrito(){
//    alert(`El total de la compra es: $` + carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0) + 
//    ' más el costo de envio:' + valorEnvio);
   
// }


  
// //FUNCION PARA MOSTRAR LOS PRODCUTOS DEL CARRITO
//   function mostrarCarrito(carrito) {
//     let mensaje = "Tu carrito de compras:\n";
  
//     for (let i = 0; i < carrito.length; i++) {
//       mensaje += "Producto: " + carrito[i].titulo + " - Precio: $" + carrito[i].precio + "\n";
//     }
  
//     alert(mensaje);
//   }
  
 
 
  


/* function validarStock(cantidadDeseada, stockProductos){
    if(cantidadDeseada > stockProductos){
        alert('Lo sentimos. La cantidad deseada supera la exitente')
        do {
            cantDeseada = parseInt(prompt('Pruebe otra cantidad menor'));
        } while (cantDeseada > stockProductos);
    
    }else{
        alert('Tus productos fueron agregados exitosamente')
        
    }
} */
//INGRESO DE LOS PRODUCTOS
const contenedor = document.querySelector('.box_productos');

for (const producto of productos) {
    contenedor.innerHTML += `
    <section>
    <article  id=${producto.id} class="box">
        <img src=${producto.imagen} alt="imagen sobre ${producto.titulo}">
    </article>
    <div class="descripcion_producto">
            <h2>${producto.titulo}</h2>
            <p><i>$${producto.precio}</i></p>
        </div>
        <div class="btn">
        <a class="borrar-button" data-id=${producto.id}> <span>x</span> </a>
    </div>
        </section>`;
}



