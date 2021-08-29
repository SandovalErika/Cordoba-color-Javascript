// let bienvenido = prompt ("¡Bienvenido a CORDOBA COLOR! ¿Cual es tu nombre?")
// let pregunta= prompt ("¿Qué producto buscas?")

// function ayuda() {
//     alert("Hola " + bienvenido  + ". Tenemos "  + pregunta + " a tu disposición" + ". Dirigite a seccion PRODUCTOS para mas información")
    
// }
// ayuda()

// const cartName = document.getElementById('card');

// cartName.innerHTML = 'Carrito'

function evento() {
    $('.masInfo').slideToggle(1000)
}

$('.btn-outline-info').on('click', evento);