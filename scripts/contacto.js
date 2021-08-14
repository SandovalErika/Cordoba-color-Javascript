const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", enviarFormulario);



const suscripcion = [];

function enviarFormulario() {
    const mail = document.getElementById("email").value;
    const text = document.getElementById("text").value;
    suscripcion.push({ mail: mail, text: text });

    imprimirSaludo()
}


function imprimirSaludo() {


    const print = document.getElementById("print");

    suscripcion.forEach(element => {
        print.innerHTML += `<p> Gracias por tu consulta. A la brevedad recibirás una respuesta a tu direccion de email <span class="contac-email">${element.mail}.</span> </p>`
    })
}




// const form = $('#user-form');
// const inputNombreApellido = $('#user-form__nombre-y-apellido');
// const inputEmail = $ ('#user-form__email');
// const inputTelefono = $ ('#user-form__telefono');
// const inputComentario = $ ('#user-form__comentario');

// function user (nombreyApellido, email, telefono, comentario){
//     this.nombreyApellido = nombreyApellido;
//     this.email = email;
//     this.telefono = telefono;
//     this.comentario = comentario;
// }

// let listUser = [];

// if (localStorage.getItem('Users')) {     //Listado en la Key
//     listUser = JSON.parse(localStorage.getItem('users'));    //Transforma de una cadena a un objeto
// }

// function saveToStorage (key, user) {     //Guardar en el LocalStorage
//     listUser.push(user);
//     localStorage.setItem('Listado', JSON.stringify(listUser));  //Lo guarda en un array en el localStorage
// }

// function getUserFromStorage (key) {
//     if (localStorage.getItem(key)){
//         return JSON.parse(localStorage.getItem(key));
//     }
// }

// const user1 = new User('Erika Sandoval', 'erikasandoval@hotmail.com', 3513483389, '¿Hay descuento en sinteticos?');

// saveToStorage ('users', user1);

// let userFromStorage =  getUserFromStorage ('users');
// console.log(UserFromStorage);

