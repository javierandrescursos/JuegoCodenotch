
var arrayGritito = ["Pio Pio", "Cuak", "qui quiri qui", null];
var arrayNombreGallo = ["Claudio", "Kellogs", "ManelNavarro", "Rafaelito"];
var arrayFuerzaGallo = [5, 8, 4, 7];
var arrayPlayerGallo = ["Rafa", "Jacobo", "JaviProfesor", "Charly"];
var arrayVida = [20, 30, 10, 10];

// Esto te lo devulve el Switch Case Relleno
let tipoAtaque_1 = "";
let tipoAtaque_2 = "";


//Te van a dar un número dependiendo del gallo que hayan elegido
let gallo_1;
let gallo_2;


class GalloClass {
    constructor(player, gritito, nombre, fuerza, vida) {
        this.nombre = nombre;
        this.gritito = gritito;
        this.fuerza = Math.floor(Math.random() * fuerza);
        this.vida = vida;
        this.player = player;
    }

    darPicotazo() {
        console.log(" hace un taladracabezas");
    }
    darAranazo() {
        console.log("araña ojos");
    }
    darPatadon() {
        console.log("da una patada segadora barrepatas");
    }

    get getFuerza() { return this.fuerza; }
    set setFuerza(valor) { this.fuerza = valor }

    get getVida() { return this.vida; }
    set setVida(valor) { this.vida = valor }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AQUÍ EMPIEZA LA PARTE DE BÁRBARA: CONTROLES DEL JUEGO
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class ControlJuego {

    ejecutaAccion(numeroTecla) {

        switch (numeroTecla) {
            case 65:
                console.log("aranazo");
                break;
            case 83:
                console.log("Patadon");
                break;

            case 68:
                console.log("cabezazo");
                break;

            case 74:
                console.log("aranazo");
                break;
            case 75:
                console.log("Patadon");
                break;
            case 76:
                console.log("cabezazo");
                break;

            default:
                break;
        }
    }

}

function eligeControl() {
    let controles = new ControlJuego();
    $(document).keydown(function (event) {
        controles.ejecutaAccion(event.which);
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AQUÍ TERMINA LA PARTE DE BÁRBARA: CONTROLES DEL JUEGO
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AQUÍ EMPIEZA LA PARTE DE JACOBO: LÓGICA DEL SELECTOR
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var imagenesGallos = ["gallo1.png", "gallo2.png", "gallo3.png", "gallo4.png"];
var descripcionGallos = ["Este es nuestro Gallo #1. Su nombre es Kellogs. Tiene una fuerza máxima de 7 y una salud máxima de 20.",
    "Este es nuestro Gallo #2. Su nombre es Manel Navarro. Tiene una fuerza máxima de 5 y una salud máxima de 25.",
    "Este es nuestro Gallo #3. Su nombre es Claudio. Tiene una fuerza máxima de 8 y una salud máxima de 18.",
    "Este es nuestro Gallo #4. Su nombre es Rafaelito. Tiene una fuerza máxima de 10 y una salud máxima de 13."
]
var fraccionGallos = ["1 / 4", "2 / 4", "3 / 4", "4 / 4",]

var x = 0;

function siguiente() {
    var sliderImagen = document.getElementById("imagenesGallosId");
    var sliderDescripcion = document.getElementById("descripcionId");
    var sliderFraccion = document.getElementById("fraccionId");

    x++;

    if (x >= imagenesGallos.length) {
        x = 0;
    }

    sliderImagen.src = imagenesGallos[x];
    sliderDescripcion.innerHTML = descripcionGallos[x];
    sliderFraccion.innerHTML = fraccionGallos[x];
}

function anterior() {
    var sliderImagen = document.getElementById("imagenesGallosId");
    var sliderDescripcion = document.getElementById("descripcionId");
    var sliderFraccion = document.getElementById("fraccionId");

    x--;

    if (x < 0) {
        x = imagenesGallos.length - 1;
    }

    sliderImagen.src = imagenesGallos[x];
    sliderDescripcion.innerHTML = descripcionGallos[x];
    sliderFraccion.innerHTML = fraccionGallos[x];
}

function siguiente2() {
    var sliderImagen = document.getElementById("imagenesGallosId2");
    var sliderDescripcion = document.getElementById("descripcionId2");
    var sliderFraccion = document.getElementById("fraccionId2");

    x++;

    if (x >= imagenesGallos.length) {
        x = 0;
    }
    sliderImagen.src = imagenesGallos[x];
    sliderDescripcion.innerHTML = descripcionGallos[x];
    sliderFraccion.innerHTML = fraccionGallos[x];


}

function anterior2() {
    var sliderImagen = document.getElementById("imagenesGallosId2");
    var sliderDescripcion = document.getElementById("descripcionId2");
    var sliderFraccion = document.getElementById("fraccionId2");

    x--;

    if (x < 0) {
        x = imagenesGallos.length - 1;
    }
    sliderImagen.src = imagenesGallos[x];
    sliderDescripcion.innerHTML = descripcionGallos[x];
    sliderFraccion.innerHTML = fraccionGallos[x];
}

function crearGallo(i) {
    var gallo = new GalloClass(arrayPlayerGallo[i], arrayGritito[i], arrayNombreGallo[i], arrayFuerzaGallo[i], arrayVida[i]);
    return gallo;
}

function comparacionAtaque(tipoAtaque_1, tipoAtaque_2) {
    if (tipoAtaque_1 === "Patadon") {
        if (tipoAtaque_2 === "Picotazo") {
            return;
        } else if (tipoAtaque_2 === "Aranazo") {
            return 2;
        }
    } else if (tipoAtaque_1 === "Picotazo") {
        if (tipoAtaque_2 === "Patadon") {
            return 2;
        } else if (tipoAtaque_2 === "Aranazo") {
            return 1;
        }
    } else if (tipoAtaque_1 === "Aranazo") {
        if (tipoAtaque_2 === "Patadon") {
            return 2;
        } else if (tipoAtaque_2 === "Picotazo") {
            return 1;
        }
    } else {
        return 0;
    }
}



function quitarVida(tipoAtaque_1, tipoAtaque_2) {
    if (comparacionAtaque(tipoAtaque_1, tipoAtaque_2) == 1) {
        gallo_2.setVida = gallo_2.getVida - gallo_1.getFuerza;
        console.log(gallo_1.nombre + " le ha quitado " + gallo_2.getFuerza + " de fuerza a " + gallo_2.nombre);
    } else if (comparacionAtaque(tipoAtaque_1, tipoAtaque_2) == 2) {
        gallo_1.setVida = getVida - gallo_1.getFuerza;
        console.log(gallo_2.nombre + " le ha quitado " + gallo_1.getFuerza + " de fuerza a " + gallo_1.nombre);
    } else {
        console.log('Empate');
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AQUÍ TERMINA LA PARTE DE JACOBO: LÓGICA DEL SELECTOR
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







// var slideIndex = 0;

// showSlides();

// function showSlides() {
//        var i;
//        var slides = document.getElementsByClassName("mySlides");
//        for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//        }

//        slideIndex++;
//        if(slideIndex > slides.length) {slideIndex = 1}
//        slides[slideIndex-1].style.display = "block";
//        setTimeout(showSlides,2000);
// }















// function volar(animal, puedoVolar) {
//     if (animal.getVuela) {
//         console.log("Ya puedo volar por mi mismo");
//         return;
//     }
//     animal.setVuela = puedoVolar;
//     let textoVolar = animal.getVuela ? "Ahora puedo volar" : "Todavia no puedo volar";
//     console.log(textoVolar);
// }

// function crearGalleria(i) {
//     var gallo = new GalloClass(arrayEspecie[i], arrayPatas[i], arrayGritito[i], arrayVuela[i], arrayColor[i], arrayAlas[i], arrayNombreGallo[i], arrayFuerzaGallo[i], arrayDueñoGallo[i], arrayPuntosGallo[i]);
//     return gallo;
// }

// function nuevoBatalla() {
//     let gallo1 = crearGalleria(0);
//     let gallo2 = crearGalleria(1);
//     let gallo3 = crearGalleria(2);
//     let gallo4 = crearGalleria(3);

//     console.log("Da comienzo la batalla 1!");

//     if (gallo1.getFuerza > gallo2.getFuerza) {
//         console.log(gallo1.nombre + gallo1.darPicotazo());
//         console.log(gallo1.nombre + gallo1.darPatadon());
//         console.log(`Gana ${gallo1.nombre} (${gallo1.getFuerza}) a ${gallo2.nombre} (${gallo2.getFuerza})! Felicidadades ${gallo1.dueño}!`)


//     } else if (gallo1.getFuerza == gallo2.getFuerza) {
//         console.log(`${gallo1.nombre} ${gallo1.darPicotazo()}`);
//         console.log(`${gallo2.nombre} ${gallo2.darPatadón()}`);
//         console.log(`Ha habido empate entre ${gallo1.nombre} (${gallo1.getFuerza}) y ${gallo2.nombre} (${gallo2.getFuerza})!`)

//     } else {
//         console.log(gallo2.nombre + gallo2.darPicotazo());
//         console.log(gallo2.nombre + gallo2.darPatadon());
//         console.log(`Gana ${gallo2.nombre} (${gallo2.getFuerza}) a ${gallo1.nombre} (${gallo1.getFuerza})! Felicidadades ${gallo2.dueño}!`)

//     }

//     console.log(`
//     Da comienzo la batalla 2!
//     `);

//     if (gallo1.getFuerza > gallo3.getFuerza) {
//         console.log(`Gana ${gallo1.nombre} (${gallo1.getFuerza}) a ${gallo3.nombre} (${gallo3.getFuerza})! Felicidadades ${gallo1.dueño}!`)
//     } else if (gallo1.getFuerza == gallo3.getFuerza) {
//         console.log(`Ha habido empate entre ${gallo1.nombre} (${gallo1.getFuerza}) y ${gallo3.nombre} (${gallo3.getFuerza})!`)
//     } else {
//         console.log(`Gana ${gallo3.nombre} (${gallo3.getFuerza}) a ${gallo1.nombre} (${gallo1.getFuerza})! Felicidadades ${gallo3.dueño}!`)

//     }

//     console.log(`
//     Da comienzo la batalla 3!
//     `);

//     if (gallo1.getFuerza > gallo4.getFuerza) {
//         console.log(`Gana ${gallo1.nombre} (${gallo1.getFuerza}) a ${gallo4.nombre} (${gallo4.getFuerza})! Felicidadades ${gallo1.dueño}!`)
//     } else if (gallo1.getFuerza == gallo4.getFuerza) {
//         console.log(`Ha habido empate entre ${gallo1.nombre} (${gallo1.getFuerza}) y ${gallo4.nombre} (${gallo4.getFuerza})!`)
//     } else {
//         console.log(`Gana ${gallo4.nombre} (${gallo4.getFuerza}) a ${gallo1.nombre} (${gallo1.getFuerza})! Felicidadades ${gallo4.dueño}!`)
//     }

//     console.log(`
//     Da comienzo la batalla 4!
//     `);

//     if (gallo2.getFuerza > gallo3.getFuerza) {
//         console.log(`Gana ${gallo2.nombre} (${gallo2.getFuerza}) a ${gallo3.nombre} (${gallo3.getFuerza})! Felicidadades ${gallo2.dueño}!`)
//     } else if (gallo2.getFuerza == gallo3.getFuerza) {
//         console.log(`Ha habido empate entre ${gallo2.nombre} (${gallo2.getFuerza}) y ${gallo3.nombre} (${gallo3.getFuerza})!`)
//     } else {
//         console.log(`Gana ${gallo3.nombre} (${gallo3.getFuerza}) a ${gallo2.nombre} (${gallo2.getFuerza})! Felicidadades ${gallo1.dueño}!`)
//     }

//     console.log(`
//     Da comienzo la batalla 5
//     `);

//     if (gallo2.getFuerza > gallo4.getFuerza) {
//         console.log(`Gana ${gallo2.nombre} (${gallo2.getFuerza}) a ${gallo4.nombre} (${gallo4.getFuerza})! Felicidadades ${gallo2.dueño}!`)
//     } else if (gallo2.getFuerza == gallo4.getFuerza) {
//         console.log(`Ha habido empate entre ${gallo2.nombre} (${gallo2.getFuerza}) y ${gallo4.nombre} (${gallo4.getFuerza})!`)
//     } else {
//         console.log(`Gana ${gallo4.nombre} (${gallo4.getFuerza}) a ${gallo2.nombre} (${gallo2.getFuerza})! Felicidadades ${gallo4.dueño}!`)
//     }

//     console.log(`
//     Da comienzo la batalla 6!
//     `);

//     if (gallo3.getFuerza > gallo4.getFuerza) {
//         console.log(`Gana ${gallo3.nombre} (${gallo3.getFuerza}) a ${gallo4.nombre} (${gallo4.getFuerza})! Felicidadades ${gallo3.dueño}!`)
//     } else if (gallo3.getFuerza == gallo4.getFuerza) {
//         console.log(`Ha habido empate entre ${gallo3.nombre} (${gallo3.getFuerza}) y ${gallo4.nombre} (${gallo4.getFuerza})!`)
//     } else {
//         console.log(`Gana ${gallo4.nombre} (${gallo4.getFuerza}) a ${gallo3.nombre} (${gallo3.getFuerza})! Felicidadades ${gallo4.dueño}!`)
//     }



// }
function crearGallosElegidos(numeroGallo1,numeroGallo2){
    gallo_1 = crearGallo(numeroGallo1);
    gallo_2 = crearGallo(numeroGallo2);
}
