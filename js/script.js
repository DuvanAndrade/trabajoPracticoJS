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
    //BILLETERAS-BOLSOS
    {
        id: 16,
        titulo: "Billetera de cuero Azul",
        imagen: "../assets/img/carteras/billetera-azul.webp",
        categoria: {
            nombre: "carteras",
            id: "carteras"
        },
        precio: 2500
    },
    {
        id: 17,
        titulo: "Billetera de cuero Rosa",
        imagen: "../assets/img/carteras/billetera-rosa.jpg",
        categoria: {
            nombre: "carteras",
            id: "carteras"
        },
        precio: 2500
    },
    {
        id: 18,
        titulo: "Juego de Bolso y Cartera",
        imagen: "../assets/img/carteras/bolso-cartera-rayas.jpg",
        categoria: {
            nombre: "carteras",
            id: "carteras"
        },
        precio: 2500
    },
    {
        id: 19,
        titulo: "Bolso de cuero Negro",
        imagen: "../assets/img/carteras/bolso-cuero-negro.png",
        categoria: {
            nombre: "carteras",
            id: "carteras"
        },
        precio: 2500
    },
    {
        id: 20,
        titulo: "Billetera de cuero Rosa",
        imagen: "../assets/img/carteras/cartera-cuero-rosa.jpg",
        categoria: {
            nombre: "carteras",
            id: "carteras"
        },
        precio: 2500
    },
    //CINTURONES
    {
        id: 21,
        titulo: "Cinturon Amanda",
        imagen: "../assets/img/cinturones/cinturon-amarillo.jpg",
        categoria: {
            nombre: "cinturones",
            id: "cinturones"
        },
        precio: 2500
    },
    {
        id: 22,
        titulo: "Cinturon Bianca",
        imagen: "../assets/img/cinturones/cinturon-blanco.jpg",
        categoria: {
            nombre: "cinturones",
            id: "cinturones"
        },
        precio: 2500
    },
    {
        id: 23,
        titulo: "Cinturon Nina",
        imagen: "../assets/img/cinturones/cinturon-negro.jpg",
        categoria: {
            nombre: "cinturones",
            id: "cinturones"
        },
        precio: 2500
    },

    

]


//BOTON ENVIAR EMAIL FOOTER
const btnEmail = document.getElementById("emailForm");
btnEmail.addEventListener("submit", function(e) {
e.preventDefault();
    const email = document.getElementById("emailInput").value;
    const emailValido = validarEmail(email);

    if (!emailValido) {
        emailInvalido();
    } else {
       localStorage.setItem("user_email", email);
        envioEmail();
    } 
    btnEmail.reset();
    });
    

function validarEmail(email) {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regex.test(email);
}

function envioEmail(){
    Toastify({
        text: "Email enviado con éxito.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "var(--colorTitulo)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
function emailInvalido(){
    Toastify({
        text: "Por favor, ingresa un email valido.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "var(--colorTitulo)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}


//INDEX

const img = new Image();
img.onload = function() {
  const myDiv = document.getElementById('contenedor_imagen');
  myDiv.style.backgroundImage = `url(${img.src})`;
  myDiv.style.backgroundAttachment = 'fixed';
  myDiv.style.backgroundRepeat = "no-repeat";
  myDiv.style.backgroundSize = "cover";
  myDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.100), rgba(0, 0, 0, 0.400)), url(${img.src})`;
};
img.src = 'assets/img/imgprincipal.jpg';

//CARRUSEL


//PAG CONTACTO
/*FORMULARIO PAGINA CONTACTO */
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario_contacto");
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = formulario.nombre.value;
      const apellido = formulario.apellido.value;
      const email = formulario.email.value;
      const mensaje = formulario.mensaje.value;
  
      if (nombre === "" || apellido === "" || email === "" || mensaje === "") {
        envioError();
        return;
      }
      envioExitoso()
      formulario.reset();
    });
  });


  function envioExitoso(){
    Toastify({
        text: "Formulario enviado con éxito.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "var(--colorTitulo)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
  }
  function envioError(){
    Toastify({
        text: "Por favor, completa todos los campos.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "var(--colorTitulo)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
  }


//NAVBAR
/*MODAL INICIO O REGISTRO DE CUENTA */
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//INICIO DE SECCION O REGISTRO DE UNA NUEVA CUENTA 
document.addEventListener("DOMContentLoaded", function() {
    const formularioInicio = document.getElementById("formInicio");
    const formularioRegistro = document.getElementById("formRegistro");
    const mensaje = document.getElementById("mensaje");

    // GUARDAR USUARIO EN EL LOCALST
    function guardarUsuario(usuario) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    // VALIDO Y PROCESO EL INICIO DE SECCION
    function inicioSeccion(nombre, password) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuario = usuarios.find(usuario => usuario.nombre === nombre && usuario.password === password);
        return usuario;
    }

    // RESETEO DE CAMPOS Y ENVIO DE FORMULARIO
    formularioInicio.addEventListener("submit", function(e) {
        e.preventDefault();
        const nombreUsuario = document.getElementById("nombreUsuario").value;
        const passwordInicio = document.getElementById("passwordInicio").value;
        const usuario = inicioSeccion(nombreUsuario, passwordInicio);
        if (usuario) {
            Bienvenido(usuario.nombre);
        } else {
            msnErrorLogin();
        }
        formularioInicio.reset();
    });

    // RESETEO DE CAMPOS, ENVIO Y VALIDACION DE FORMULARIO DE REGISTRO
    formularioRegistro.addEventListener("submit", function(e) {
        e.preventDefault();
        const registroUsuario = document.getElementById("registroNombre").value;
        const registroPassword = document.getElementById("registroPassword").value;

        if (registroUsuario === "" || registroPassword === "") {
            msnErrorCampo();
        } else if (registroUsuario.length < 6 || registroPassword.length < 6) {
            msnAdvertencia();
        } else {
            const usuario = JSON.parse(localStorage.getItem("usuarios")) || [];
            if (usuario.some(usuario => usuario.nombre === registroUsuario)) {
                msnErrorResgistro();
            } else {
                const nuevoUsuario = {
                    nombre: registroUsuario,
                    password: registroPassword
                };
                guardarUsuario(nuevoUsuario);
                registroExitoso();
            }
        }

        formRegistro.reset();
    });
});

function Bienvenido(nombre){
    swal({
        title: "Bienvenido",
        text: `${nombre} 😊`,
        icon: "success",
      });
}
function msnErrorLogin(){
    swal({
        title: "Error 🙃",
        text: "Nombre o contraseña iconrrecta. Por favor, inténtalo de nuevo.",
        icon: "error",
      });
}
function msnErrorResgistro(){
    swal({
        title: "Error 🙃",
        text: "El usuario ya existe. Por favor, elige otro nombre de usuario.",
        icon: "error",
      });
}
function msnAdvertencia(){
    swal({
        title: "👁️",
        text: "El nombre de usuario y la contraseña deben tener al menos 6 caracteres.",
        icon: "warning",
      });
}
function msnErrorCampo(){
    swal({
        title: "🙏🏻",
        text: "Por favor, ingresa un nombre ó contraseña válida.",
        icon: "warning",
      });
}
function registroExitoso(nombre){
    swal({
        title: "Bien Hecho",
        text: "Registro exitoso",
        icon: "success",
      });
}



//NUESTROS PRODUCTOS
let btns_agregar = document.querySelectorAll('.agregar_producto');
const catalogo = document.querySelector('.box_productos');
const titulo = document.querySelector('.titulo_principal');

function cargarProductos(categoria) {       
    catalogo.innerHTML = ''; // SE LIMPIA EL CONTENIDO DEL CARRITO

    productos.forEach(producto => {
        if (categoria === 'todos' || producto.categoria.nombre === categoria) {
            const div = document.createElement('div');
            
            titulo.innerHTML = "Nuestros Productos";
            //SE CREA UN DIV CON LOS ELEMNTOS DEL PRODCUTO A MOSTRAR
            div.innerHTML = `
            
            <article  id=${producto.id} class="box">
            <img src=${producto.imagen} alt="imagen sobre ${producto.titulo}">
            </article>
            <div class="descripcion_producto">
                <h2>${producto.titulo}</h2>
                <p><i>$${producto.precio}</i></p>
            </div>
            <div class="btn">
            <button class="agregar_producto" data-id=${producto.id} onclick = "agregarAlCarrito(${producto.id})"> <span>Agregar</span> </button>
            </div>
        
            `;
            catalogo.append(div);
        }
       
    });
    actualizarBtnsAgregar();    
}

document.getElementById('todos').addEventListener('click', () => cargarProductos('todos'));
document.getElementById('collares').addEventListener('click', () => cargarProductos('collares'));
document.getElementById('pulseras').addEventListener('click', () => cargarProductos('pulseras'));
document.getElementById('anillos').addEventListener('click', () => cargarProductos('anillos'));
document.getElementById('carteras').addEventListener('click', () => cargarProductos('carteras'));
document.getElementById('cinturones').addEventListener('click', () => cargarProductos('cinturones'));


cargarProductos('todos');


function actualizarBtnsAgregar(){
    btns_agregar = document.querySelectorAll(".agregar_producto");
    btns_agregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
         
    });
}


//INICIALIZACION EL CARRITO VACIO
const produCarrito = document.querySelector(".contenedor-carrito");
const productosEnCarrito = [];

function agregarAlCarrito(id){
    const productoAgregado = productos.find(producto => producto.id === id);
    productosEnCarrito.push(productoAgregado);
    
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
    console.log(productoAgregado)
    console.log(productosEnCarrito);
    
}

function mostrarProcductosCarrito(){
    localStorage.getItem(productosEnCarrito);
    if(productosEnCarrito && productosEnCarrito.length > 0){
        produCarrito.innerHTML = "";
        productosEnCarrito.forEach(producto =>{
            const div = document.createElement("div");
            div.innerHTML = `
            <article  id=${producto.id} class="box">
            <img src=${producto.imagen} alt="imagen sobre ${producto.titulo}">
            </article>
            <div class="descripcion_producto">
                <h2>${producto.titulo}</h2>
                <p><i>$${producto.precio}</i></p>
            </div>
            `;
            produCarrito.append(div);
        })
    }
}
console.log(mostrarProcductosCarrito())




