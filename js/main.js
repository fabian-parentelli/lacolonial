// ****** Menu Hamburguesa ****** //

const menu = document.getElementById("menu");
const menuCel = document.getElementById("menuCel");

menu.addEventListener("click", () => {
    menuCel.classList.toggle("menushow");
});

// ***** Mostrar productos ***** // 

const contenedorProductos = document.getElementById("contenedorProductos");

document.addEventListener("DOMContentLoaded", () => {

    mostrarProductos(productos);
});

function mostrarProductos(productos) {

    limpiarHTML();

    productos.forEach((producto) => {

        const { id, nombre, precio, img} = producto;
        
        const productoHTML = document.createElement("div");
        productoHTML.className = "cards";
        productoHTML.innerHTML = `
            <h3>${nombre}</h3>
            <img src="${img}" alt="${nombre}">
            <p>$${precio}</p>
            <button id="${id}">Agregar</button>
        `;
        contenedorProductos.appendChild(productoHTML);

        // Boton para agregar al carrito
        const boton = document.getElementById(`${id}`);
        boton.addEventListener("click", () => {
            AgregarAlCarrito(id);
        });
    });
};

function limpiarHTML() {
    while(contenedorProductos.firstChild) {
        contenedorProductos.removeChild(contenedorProductos.firstChild);
    };
};

// Mostrar productos al apretar el logo en página de inicio
const logo = document.querySelector("#logo");
logo.addEventListener("click", () => {
    mostrarProductos(productos)
    logo.classList.remove("logoReturn");
    logo.innerHTML = `<img src="asset/logo.png" width="60px" alt="Logo la Colonial">`;
});

function logoReturn() {
    logo.classList.add("logoReturn")
    logo.innerHTML = `<img src="asset/volver.png" width="40px" alt="Logo la Colonial">`;
};

// ***** Filtrar Productos ***** //

const snacks = document.getElementById("snacks");
const almacenes = document.getElementById("almacenes");
const fiambre = document.getElementById("fiambre");
const queso = document.getElementById("queso");
const lacteo = document.getElementById("lacteo");
const conserva = document.getElementById("conserva");
const dulce = document.getElementById("dulce");
const lata = document.getElementById("lata");
const perfume = document.getElementById("perfume");
const limpia = document.getElementById("limpia");

escuchas();
function escuchas() {
    snacks.addEventListener("click", () => {
        const resultado = productos.filter(producto => producto.familia === "snacks");
        mostrarFiltro(resultado);
        logoReturn();
    })
    
    almacenes.addEventListener("click", () => {
        const resultado = productos.filter(producto => producto.familia === "almacen");
        mostrarFiltro(resultado);
        logoReturn();
    })
    
    fiambre.addEventListener("click", () => {
        const resultado = productos.filter(producto => producto.familia === "fiambres");
        mostrarFiltro(resultado);
        logoReturn();
    })
    
    queso.addEventListener("click", () => {
        const resultado = productos.filter(producto => producto.familia === "quesos");
        mostrarFiltro(resultado);
        logoReturn();
    })
    
    lacteo.addEventListener("click", () => {
        const resultado = productos.filter(producto => producto.familia === "lacteos");
        mostrarFiltro(resultado);
        logoReturn();
    })
    
    conserva.addEventListener("click", () => {
        const resultado = productos.filter(producto => producto.familia === "encurtidos");
        mostrarFiltro(resultado);
        logoReturn();
    })
    
    dulce.addEventListener("click", () => {
        const resultado = productos.filter(producto => producto.familia === "mermeladas");
        mostrarFiltro(resultado);
        logoReturn();
    })
    
    lata.addEventListener("click", () => {
        const resultado = productos.filter(producto => producto.familia === "conservas");
        mostrarFiltro(resultado);
        logoReturn();
    })
    
    perfume.addEventListener("click", () => {
        const resultado = productos.filter(producto => producto.familia === "perfumeria");
        mostrarFiltro(resultado);
        logoReturn();
    })
    
    limpia.addEventListener("click", () => {
        const resultado = productos.filter(producto => producto.familia === "limpieza");
        mostrarFiltro(resultado);
        logoReturn();
    })
}

// Mostara los productos filtrados
function mostrarFiltro(resultado) {
    
    limpiarHTML();

    resultado.forEach((producto) => {
        const { id, nombre, precio, img} = producto;
        
        const productoHTML = document.createElement("div");
        productoHTML.className = "cards";
        productoHTML.innerHTML = `
            <h3>${nombre}</h3>
            <img src="${img}" alt="${nombre}">
            <p>$${precio}</p>
            <button id="${id}">Agregar</button>
        `;

        contenedorProductos.appendChild(productoHTML);

        // Boton para agregar al carrito
        const boton = document.getElementById(`${id}`);
        boton.addEventListener("click", () => {
            AgregarAlCarrito(id);
        });
    });
};

// ****** ModaL Carrito para PC ****** //
const modalCarrito = document.getElementById("modalCarrito");
const carritoOpen = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");

carritoOpen.addEventListener("click", () => {
    modalCarrito.classList.toggle("modal--show");
    mostrarCarrito();
});

cerrarCarrito.addEventListener("click", () => {
    modalCarrito.classList.toggle("modal--show");
});

// ** Modal Carrito Cel ** //
const carritoCel = document.querySelector("#carritoCel");

carritoCel.addEventListener("click", () => {
    modalCarrito.classList.toggle("modal--show");
    mostrarCarrito();
});

// ***** Carrito de Compras ***** //

let carrito = [];

// Agregra al Carrito
const AgregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
        mostrarCarrito();
    }else {
        carrito.push(producto);
        mostrarCarrito();
    };
    mostrarAviso();
};

// Mostrar Carrito
const contenedorCarrito = document.getElementById("productosCarrito");

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    
    carrito.forEach((producto) => { 
        const {img, nombre, precio, cantidad, medida, id, familia} = producto;

        const nuevaMedida = cantidad * medida;

        if(familia === "fiambres" || familia === "quesos") {
            medidaNombre = "Kg"
        } else {
            medidaNombre = "Unidades"
        };

        const card = document.createElement("div");
        card.classList.add("contCarrito");
        card.innerHTML = `
            <img src="${img}" alt="${nombre}">
            <div>
                <h3>${nombre}</h3>
                <p class="spa">${medidaNombre}: ${nuevaMedida}</p>
                <div class="precioCantidad">
                    <p>$${precio}</p>
                    <div class="contador">
                        <img id="abajoArow${id}" class="flechas" src="asset/flechaAbajo.png" alt="Down">
                        <p class="cantidad">${cantidad}</p>
                        <img id="arribaArow${id}" class="flechasUp" src="asset/flechaArriba.png" alt="Up">
                    </div>
                </div>
            </div>
            <button id="eliminar${id}">X</button>
        `;
        contenedorCarrito.appendChild(card);

        // Sumar al carrito
        const arribaArow = document.getElementById(`arribaArow${id}`);
        arribaArow.addEventListener("click", () => {
            SumaCarrito(id);
        });

        // Restar al carrito
        const abajoArow = document.getElementById(`abajoArow${id}`);
        abajoArow.addEventListener("click", () => {
            restarCarrito(id);
        })

        // Eliminar Productos del Carrito
        const boton = document.getElementById(`eliminar${id}`);
        boton.addEventListener("click", () => {
            eliminarArticulo(id);
        });

        // Enviar por WhatSapp
        const botonEnviar = document.getElementById("enviarPedido");
        botonEnviar.addEventListener("click", () => {
            enviarPedido();
        })
    });
    // Calcular el total del carrito.
    calcularTotal();
};

function SumaCarrito(id) {
    const productoEnCarritos = carrito.find(producto => producto.id === id);
    productoEnCarritos.cantidad++;
    mostrarCarrito();
};

function restarCarrito(id) {
    const productoEnCarritos = carrito.find(producto => producto.id === id);
    if(productoEnCarritos.cantidad > 0) {
        productoEnCarritos.cantidad--;
        mostrarCarrito();
    };
};

const eliminarArticulo = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

    mostrarCarrito();
};

// * Borrar todo del Carrito * //
const borrarPedido = document.querySelector("#borrarPedido");
borrarPedido.addEventListener("click", () => {
    eliminarTodo();
});

const eliminarTodo = () => {
    carrito = [];
    mostrarCarrito();
};

// ***** Toastify ****** //
function mostrarAviso() {
    Toastify({
        text: "Agregado al Carrito",
        duration: 3000,
        gravity: "bottom",
        position: "right",
    }).showToast();
};

// Calcular la suma del carrito.
function calcularTotal() {
    const sumaDelCarrito = document.getElementById("sumaDelCarrito"); 
    let totalCompra = 0;
    carrito.forEach((producto) => {
        totalCompra += (producto.precio * producto.medida) * producto.cantidad;
    });
    sumaDelCarrito.innerHTML = `${totalCompra.toFixed(2)}`;
};

// Conectar con WhatSapp
function enviarPedido() {
    const telefono = "+5491159437955";

    const arrayCarrito = carrito.map((producto) => {
        return {
            nombre: producto.nombre,
            cantidad: producto.cantidad
        };
    });

    const carritoJsn = JSON.stringify(arrayCarrito);
    
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${carritoJsn}`;
    window.open(url);
};

// Abrir Clientes
const clientes = document.getElementById("clientes");
const clienteCel = document.getElementById("clienteCel");

clientes.addEventListener("click", () => {
    window.location.href = "pages/clientes.html";
});

clienteCel.addEventListener("click", () => {
    window.location.href = "pages/clientes.html";
});

// ******** Botun Up ********* //

// funcionalidad del boton que suba.
const buttonUp = document.querySelector(".buttonUp");
buttonUp.addEventListener("click", scrollUp);

function scrollUp() {
    const currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 0) {
        window.requestAnimationFrame(scrollUp); // Prepara esta función como una animación.
        window.scrollTo(0, currentScroll - (currentScroll / 10)); // Sube al inicio.
    };
};

// Que se esconda el boton.
window.onscroll = function() {
    const scroll = document.documentElement.scrollTop
    if(scroll > 100) {
        buttonUp.style.transform = "scale(1)";
    } else {
        buttonUp.style.transform = "scale(0)";
    };
};