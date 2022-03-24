const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footerTabla = document.getElementById("footerTabla");
/* const btnCarrito = document.getElementById("header") */
const templateProductos = document.getElementById("templateCard").content;
const templateFooter = document.getElementById("templateFooter").content;
const templateCarrito = document.getElementById("templateCarrito").content;
const fragment = document.createDocumentFragment();
let carrito = {};

const fetchData = async () => {
    try {
        const res = await fetch("objeto.json");
        const data = await res.json();
        //console.log(data)
        pintarCards(data);
    } catch (error) {
        console.log(error);
    }
}

import hamburgerMenu from "./menu_hamburg.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    fetchData();
    if (localStorage.getItem("guardado")) {
        carrito = JSON.parse(localStorage.getItem("guardado"));
        pintarCarrito();
    }
})

/* btnCarrito.addEventListener("click", e =>{
    aggbtn(e)

}) */

cards.addEventListener("click", e => {
    aggCarrito(e);
})

items.addEventListener("click", (e) => {
    btnItems(e)
})


const pintarCards = (data) => {
    /* console.log(data) */
    data.forEach(producto => {
        /* console(producto); */
        templateProductos.querySelector(".title").textContent = producto.descripcion;
        templateProductos.querySelector(".price").textContent = producto.precio;
        templateProductos.querySelector("img").setAttribute("src", producto.img);
        templateProductos.querySelector(".btn-dark").dataset.id = producto.id;
        const clone = templateProductos.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}

const aggCarrito = e => {
    /* console.log(e.target.classList.contains("btn-dark")); */
    if (e.target.classList.contains("btn-dark")) {
        elementCard(e.target.parentElement);
    }
    e.stopPropagation();
}

const elementCard = elemento => {
    /* console.log(elemento); */
    const descrProducto = {
        id: elemento.querySelector(".btn-dark").dataset.id,
        descripcion: elemento.querySelector(".title").textContent,
        precio: elemento.querySelector(".price").textContent,
        cant: 1,
    }

    if (carrito.hasOwnProperty(descrProducto.id)) {
        descrProducto.cant = carrito[descrProducto.id].cant + 1
    }

    carrito[descrProducto.id] = { ...descrProducto }
    pintarCarrito();
}

const pintarCarrito = () => {
    items.innerHTML = "";
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector(".idCarrito").textContent = producto.id;
        templateCarrito.querySelectorAll("td")[0].textContent = producto.descripcion;
        templateCarrito.querySelectorAll("td")[1].textContent = producto.cant;
        templateCarrito.querySelector(".botonSumar").dataset.id = producto.id;
        templateCarrito.querySelector(".botonRestar").dataset.id = producto.id;
        templateCarrito.querySelector(".total").textContent = producto.cant * producto.precio;
        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    pintarFooter();

    localStorage.setItem("guardado", JSON.stringify(carrito));
}


const pintarFooter = () => {
    footerTabla.innerHTML = " ";
    if (Object.values(carrito).length === 0) {
        footerTabla.innerHTML = `<th scope="row" colspan="5">Carrito vacio!!</th>`;

        return
    }

    const sumaCant = Object.values(carrito).reduce((acc, { cant }) => acc + cant, 0);
    const sumaPrecio = Object.values(carrito).reduce((acc, { cant, precio }) => acc + cant * precio, 0);
    /* console.log(sumaCant, sumaPrecio) */

    templateFooter.querySelectorAll("td")[0].textContent = sumaCant;
    templateFooter.querySelector(".totalFooter").textContent = `$${sumaPrecio}`;

    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footerTabla.appendChild(fragment);

    const vaciarCarrito = document.getElementById("vaciarCarrito");
    vaciarCarrito.addEventListener("click", () => {
        carrito = {};
        pintarCarrito();
    })

}

const btnItems = e => {
    if (e.target.classList.contains("botonSumar")) {
        const suma = carrito[e.target.dataset.id];
        suma.cant++;
        carrito[e.target.dataset.id] = { ...suma };
        pintarCarrito();
    }

    if (e.target.classList.contains("botonRestar")) {
        const restar = carrito[e.target.dataset.id];
        restar.cant--;
        if (restar.cant === 0) {
            delete carrito[e.target.dataset.id];
        }
        pintarCarrito();
    }

    e.stopPropagation();
}

//const aggbtn = e => {
    /* console.log(e.target);
    console.log(e.target.classList.contains("btncard")) */
  //  if(e.target.classList.contains("btncard")){
   //     console.log(e.target.parentElement)
    //}
 //   e.stopPropagation();
//} 