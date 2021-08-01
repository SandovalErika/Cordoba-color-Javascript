class Articulo{
    constructor(producto, marca, precio){
        this.producto = producto;
        this.marca = marca;
        this.precio = precio;
    }

}
const articulos = [];
articulos.push( new Articulo ("Impermeabilizante", "Plavicon", 6100));
articulos.push( new Articulo ("Latex", "Alba", 10000));
articulos.push( new Articulo ("Entonador", "Tersuave", 300));
articulos.push( new Articulo ("Sintetico", "Tersuave", 3300));
articulos.push( new Articulo ("Sistema tintometrico", "Ramalux", 8000));
articulos.push( new Articulo ("Rodillo", "Cordoba color", 300));
articulos.push( new Articulo ("Lijas", "Cordoba color", 300));
articulos.push( new Articulo ("Kit pinceles", "Cordoba color", 300));

function ordenarDeMenorprecio () {

articulos.sort ((a,b) => { 
    return a.precio - b.precio;

})

articulos.forEach ((e) => {
    console.log(`${e.producto} ${ e.marca} ${"$" + e.precio}`);

});

}

function ordenarDeMayorPrecio () {

    articulos.sort ((a,b) => { 
        return b.precio - a.precio;
    
    })
    
    articulos.forEach ((e) => {
        console.log(`${e.producto} ${e.marca} ${"$" + e.precio} `);
    
    });
    
}

let card = document.getElementsByClassName("card");
// console.log(card);

let button = document.createElement("section");


button.innerHTML ="<button>MAS PRODUCTOS</button>"

document.body.appendChild(button);
