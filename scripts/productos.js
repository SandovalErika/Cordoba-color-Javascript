class Articulo{
    constructor(producto, marca, precio){
        this.producto = producto;
        this.marca = marca;
        this.precio = precio;
    }

}
const articulos = [];
articulos.push( new Articulo ("Cartilla de colores", "Cordoba Color", 850));
articulos.push( new Articulo ("Sistema tintométrico", "Ramalux", 40250));
articulos.push( new Articulo ("Sintetico", "Tersuave", 6875));
articulos.push( new Articulo ("Rodillo", "Cordoba color", 1500));
articulos.push( new Articulo ("Pack 6 pinceles", "Cordoba color", 2800));
articulos.push( new Articulo ("Lijas", "Cordoba color", 350));
articulos.push( new Articulo ("Entonador", "Tersuave", 7500));
articulos.push( new Articulo ("impermeabilizante", "Plavicon", 10980));
articulos.push( new Articulo ("Latex", "Alba", 8260));

function ordenarDeMenorprecio () {

articulos.sort ((a,b) => { 
    return a.precio - b.precio;

});

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

// let card = document.getElementsByClassName("card");
// // console.log(card);

// let button = document.createElement("section");


// button.innerHTML ="<button>MAS PRODUCTOS</button>"

// document.body.appendChild(button);
