
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
        gallo_2.setVida= gallo_2.getVida-gallo_1.getFuerza;
        console.log(gallo_1.nombre+" le ha quitado "+ gallo_2.getFuerza+" de fuerza a "+gallo_2.nombre);
    } else if (comparacionAtaque(tipoAtaque_1, tipoAtaque_2) == 2) {
        gallo_1.setVida= getVida-gallo_1.getFuerza;
        console.log(gallo_2.nombre+" le ha quitado "+ gallo_1.getFuerza+" de fuerza a "+gallo_1.nombre);
    } else {
        console.log('Empate');
    }
}

function crearGallosElegidos(numeroGallo1,numeroGallo2){
    gallo_1 = crearGallo(numeroGallo1);
    gallo_2 = crearGallo(numeroGallo2);
}
