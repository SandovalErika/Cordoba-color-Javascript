const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", sendForm);



const suscripcion = [];

function sendForm() {
    const mail = document.getElementById("email").value;
    const text = document.getElementById("text").value;
    suscripcion.push({ mail: mail, text: text });

    printGreeting()
}


function printGreeting() {


    const print = document.getElementById("print");

    suscripcion.forEach(element => {
        print.innerHTML += `<p> Gracias por tu consulta. A la brevedad recibirás una respuesta a tu direccion de email <span class="contac-email">${element.mail}.</span> </p>`
    })
}


let url = 'https://jsonplaceholder.typicode.com/users'

// API
$("#btnApi").click(() => {
    $.get(url, function (request, state) {
        if (state === "success") {

            request.forEach(element => {
                $("section").append(`
                
                <div class="container-fluid">
                <p>NOMBRE DE USUARIO: ${element.username} -- CORREO ELECTRONICO: ${element.email}</p>
                <div>               
                `);
            }
            )
        };
    });



});

