

function mostrar() {
  Swal.fire({
    title: "Ok!",
    text: "Proxiamente estará disponible!",
    icon: "success"
  });

}



function oops() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Funcionalidad aún no disponible",
    footer: "Exclusivo para Sitio Web"
  });
}

function inicio() {
  Swal.fire({
    title: "Perfecto!",
    text: "Estamos en Inicio",
    icon: "success"
  });
}


function inicioSesion() {
  Swal.fire({
    title: "Inicio de Sesión",
    text: "Inicio de Sesión Exitoso!",
    icon: "success"
  });
}

function salidaSesion() {
  Swal.fire({
    title: "Salida de Sesión",
    text: "Salida de Sesión Exitosa!",
    icon: "success"
  });
}

function info() {
  Swal.fire({
    title: "Ofertas Especiales!",
    text: "Martes y Jueves 25% de Descuento en todos nuestros productos!",
    icon: "info",
    footer: "No te pierdas estas increibles ofertas"
  });
}



function imageUno() {
  Swal.fire({
    title: "Guantes Rosas",
    text: "Busca tu talla ideal - Precio: $25.900",
    imageUrl: "imagenes prendas de lana/IMG_6448.jpg",
    imageWidth: 200,
    imageHeight: 300,
    imageAlt: "Custom image"
  });
}


function imageDos() {
  Swal.fire({
    title: "Guantes Rojos",
    text: "Busca tu talla ideal - Precio: $25.900",
    imageUrl: "imagenes prendas de lana/IMG_6462.jpg",
    imageWidth: 200,
    imageHeight: 300,
    imageAlt: "Custom image"
  });
}


function imageTres() {
  Swal.fire({
    title: "Guantes Blancos",
    text: "Busca tu talla ideal - Precio: $25.900",
    imageUrl: "imagenes prendas de lana/IMG_6454.jpg",
    imageWidth: 200,
    imageHeight: 300,
    imageAlt: "Custom image"
  });
}



function agregarAlCarrito() {
  Swal.fire({
    title: "Ok!",
    text: "Agregado al Carrito Correctamente",
    footer: "Revisa el Carrito",
    icon: "success"
  });
}

function vaciarCarritoBoton() {
  Swal.fire({
    title: "Exitoso",
    icon: "success",
    footer: "Carrito Vaciado!",
    showClass: {
      popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
    },
    hideClass: {
      popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
    }
  });
}



function infoUno() {
  Swal.fire({
    title: "Hecho en Colombia",
    text: "Lana colombiana: suave, resistente y de textura premium.",
    imageUrl: "otras_imagenes/Bandera.png",
    imageWidth: 300,
    imageHeight: 400,
    imageAlt: "Custom image"
  });
}


function infoDos() {
  Swal.fire({
    title: "Cuidados",
    text: "Lavar frío, suave; secar plano; guardar doblada.",
    imageUrl: "otras_imagenes/noLavar.png",
    imageWidth: 250,
    imageHeight: 280,
    imageAlt: "Custom image"
  });
}


function infoTres() {
  Swal.fire({
    title: "Industria lanera",
    text: "Calidad artesanal, sostenible y en crecimiento",
    imageUrl: "otras_imagenes/lana.png",
    imageWidth: 300,
    imageHeight: 320,
    imageAlt: "Custom image"
  });
}