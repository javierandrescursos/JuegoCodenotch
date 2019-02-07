var arrayEspecie = ["Gallo", "Gallo", "Gallo", "Gallo"];
var arrayPatas = [2, 2, 4, 2];
var arrayGritito = ["Pio Pio", "Cuak", "qui quiri qui", null];
var arrayVuela = [true, false, false, true];
var arrayColor = ["Amarillo", "Blanco", "Naranja", "Negro"];
var arrayAlas = ["Pequeñas", "Muslitos", "Jugosas", "Grandes"];

var arrayNombreGallo = ["Claudio", "Kellogs", "ManelNavarro", "Rafaelito"];
var arrayFuerzaGallo = [5, 8, 4, 7];
var arrayDueñoGallo = ["Rafa", "Jacobo", "JaviProfesor", "Charly"];
var arrayPuntosGallo = [0, 0, 0, 0];

class AnimalClass {

    constructor(especie = "perro", patas, gritito, vuela = false) {
        this.especie = especie;
        this.patas = patas;
        this.gritito = gritito;
        this.vuela = vuela;
    }

    get getVuela() { return this.vuela; }
    set setVuela(capacidadVolar) { this.vuela = capacidadVolar; }

    gritar() {
        console.log(`El sonido de la especie ${this.especie} es ${this.gritito}`);
    }

    tipoAlimentación(tipoAlimento) {
        console.log(`Este animal come: ${tipoAlimento}`);
    }

}

class PajaroClass extends AnimalClass {
    constructor(especie, patas, gritito, vuela, color, alas) {
        super(especie, patas, gritito, vuela);
        this.color = color;
        this.alas = alas;
    }

    volar(animal, puedoVolar) {
        if (animal.getVuela) {
            console.log("Ya puedo volar por mi mismo");
            return;
        }
        animal.setVuela = puedoVolar;
        let textoVolar = animal.getVuela ? "Ahora puedo volar" : "Todavia no puedo volar";
        console.log(textoVolar);
    }

    planear() {
        console.log("Soy capaz de planear");
    }
    cazar(especie) {
        console.log(`Soy un ${especie} y puedo cazar gatos!
        Aquí tendría que ir la lógica de destruir un gato.`);
    }


}
/*  2. Definir la funcion crearPajaro.
      - Se creara de la misma forma que hemos creado los otros animales.*/

class GalloClass extends PajaroClass {
    constructor(especie, patas, gritito, vuela, color, alas, nombre, fuerza, dueño, puntos) {
        super(especie, patas, gritito, vuela, color, alas);
        this.nombre = nombre;
        this.fuerza = Math.floor(Math.random() * (fuerza + 1)) + 0;
        this.dueño = dueño;
        this.puntos = puntos;
    }

    darPicotazo() {
        console.log(" hace un taladracabezas");
    }
    darArañazo() {
        console.log("araña ojos");
    }
    darPatadon() {
        console.log("da una patada segadora barrepatas");
    }

    get getFuerza() { return this.fuerza; }




}

function volar(animal, puedoVolar) {
    if (animal.getVuela) {
        console.log("Ya puedo volar por mi mismo");
        return;
    }
    animal.setVuela = puedoVolar;
    let textoVolar = animal.getVuela ? "Ahora puedo volar" : "Todavia no puedo volar";
    console.log(textoVolar);
}

function crearGalleria(i) {
    var gallo = new GalloClass(arrayEspecie[i], arrayPatas[i], arrayGritito[i], arrayVuela[i], arrayColor[i], arrayAlas[i], arrayNombreGallo[i], arrayFuerzaGallo[i], arrayDueñoGallo[i], arrayPuntosGallo[i]);
    return gallo;
}

function nuevoBatalla() {
    let gallo1 = crearGalleria(0);
    let gallo2 = crearGalleria(1);
    let gallo3 = crearGalleria(2);
    let gallo4 = crearGalleria(3);

    console.log("Da comienzo la batalla 1!");

    if (gallo1.getFuerza > gallo2.getFuerza) {
        console.log(gallo1.nombre + gallo1.darPicotazo());
        console.log(gallo1.nombre + gallo1.darPatadon());
        console.log(`Gana ${gallo1.nombre} (${gallo1.getFuerza}) a ${gallo2.nombre} (${gallo2.getFuerza})! Felicidadades ${gallo1.dueño}!`)


    } else if (gallo1.getFuerza == gallo2.getFuerza) {
        console.log(`${gallo1.nombre} ${gallo1.darPicotazo()}`);
        console.log(`${gallo2.nombre} ${gallo2.darPatadón()}`);
        console.log(`Ha habido empate entre ${gallo1.nombre} (${gallo1.getFuerza}) y ${gallo2.nombre} (${gallo2.getFuerza})!`)

    } else {
        console.log(gallo2.nombre + gallo2.darPicotazo());
        console.log(gallo2.nombre + gallo2.darPatadon());
        console.log(`Gana ${gallo2.nombre} (${gallo2.getFuerza}) a ${gallo1.nombre} (${gallo1.getFuerza})! Felicidadades ${gallo2.dueño}!`)

    }

    console.log(`
    Da comienzo la batalla 2!
    `);

    if (gallo1.getFuerza > gallo3.getFuerza) {
        console.log(`Gana ${gallo1.nombre} (${gallo1.getFuerza}) a ${gallo3.nombre} (${gallo3.getFuerza})! Felicidadades ${gallo1.dueño}!`)
    } else if (gallo1.getFuerza == gallo3.getFuerza) {
        console.log(`Ha habido empate entre ${gallo1.nombre} (${gallo1.getFuerza}) y ${gallo3.nombre} (${gallo3.getFuerza})!`)
    } else {
        console.log(`Gana ${gallo3.nombre} (${gallo3.getFuerza}) a ${gallo1.nombre} (${gallo1.getFuerza})! Felicidadades ${gallo3.dueño}!`)

    }

    console.log(`
    Da comienzo la batalla 3!
    `);

    if (gallo1.getFuerza > gallo4.getFuerza) {
        console.log(`Gana ${gallo1.nombre} (${gallo1.getFuerza}) a ${gallo4.nombre} (${gallo4.getFuerza})! Felicidadades ${gallo1.dueño}!`)
    } else if (gallo1.getFuerza == gallo4.getFuerza) {
        console.log(`Ha habido empate entre ${gallo1.nombre} (${gallo1.getFuerza}) y ${gallo4.nombre} (${gallo4.getFuerza})!`)
    } else {
        console.log(`Gana ${gallo4.nombre} (${gallo4.getFuerza}) a ${gallo1.nombre} (${gallo1.getFuerza})! Felicidadades ${gallo4.dueño}!`)
    }

    console.log(`
    Da comienzo la batalla 4!
    `);

    if (gallo2.getFuerza > gallo3.getFuerza) {
        console.log(`Gana ${gallo2.nombre} (${gallo2.getFuerza}) a ${gallo3.nombre} (${gallo3.getFuerza})! Felicidadades ${gallo2.dueño}!`)
    } else if (gallo2.getFuerza == gallo3.getFuerza) {
        console.log(`Ha habido empate entre ${gallo2.nombre} (${gallo2.getFuerza}) y ${gallo3.nombre} (${gallo3.getFuerza})!`)
    } else {
        console.log(`Gana ${gallo3.nombre} (${gallo3.getFuerza}) a ${gallo2.nombre} (${gallo2.getFuerza})! Felicidadades ${gallo1.dueño}!`)
    }

    console.log(`
    Da comienzo la batalla 5
    `);

    if (gallo2.getFuerza > gallo4.getFuerza) {
        console.log(`Gana ${gallo2.nombre} (${gallo2.getFuerza}) a ${gallo4.nombre} (${gallo4.getFuerza})! Felicidadades ${gallo2.dueño}!`)
    } else if (gallo2.getFuerza == gallo4.getFuerza) {
        console.log(`Ha habido empate entre ${gallo2.nombre} (${gallo2.getFuerza}) y ${gallo4.nombre} (${gallo4.getFuerza})!`)
    } else {
        console.log(`Gana ${gallo4.nombre} (${gallo4.getFuerza}) a ${gallo2.nombre} (${gallo2.getFuerza})! Felicidadades ${gallo4.dueño}!`)
    }

    console.log(`
    Da comienzo la batalla 6!
    `);

    if (gallo3.getFuerza > gallo4.getFuerza) {
        console.log(`Gana ${gallo3.nombre} (${gallo3.getFuerza}) a ${gallo4.nombre} (${gallo4.getFuerza})! Felicidadades ${gallo3.dueño}!`)
    } else if (gallo3.getFuerza == gallo4.getFuerza) {
        console.log(`Ha habido empate entre ${gallo3.nombre} (${gallo3.getFuerza}) y ${gallo4.nombre} (${gallo4.getFuerza})!`)
    } else {
        console.log(`Gana ${gallo4.nombre} (${gallo4.getFuerza}) a ${gallo3.nombre} (${gallo3.getFuerza})! Felicidadades ${gallo4.dueño}!`)
    }



}