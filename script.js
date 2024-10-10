

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


cargarEventListeners();


function cargarEventListeners() {
    elementos1.addEventListener('click', function(e) {
        if (e.target.classList.contains('agregar-carrito')) {
            e.preventDefault();
            comprarElemento(e);
        }
    });
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
         <img src="${elemento.imagen}" style="width: 100px; padding: 4px; border-radius: 10px;" />
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href = "#" class="borrar" data-id="${elemento.id}">X </a>
        </td>
    `;

    lista.appendChild(row);
    
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}



document.addEventListener("DOMContentLoaded", function() {
    var carousels = document.querySelectorAll(".carousel");

    carousels.forEach(function(carousel) {
        var leftArrow = carousel.querySelector(".carousel-control-prev");
        var rightArrow = carousel.querySelector(".carousel-control-next");
        var items = carousel.querySelectorAll(".carousel-item");
        var currentIndex = 0;

        leftArrow.addEventListener("click", function() {
            items[currentIndex].classList.remove("active");
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            items[currentIndex].classList.add("active");
        });

        rightArrow.addEventListener("click", function() {
            items[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add("active");
        });
    });
});





