const cria = document.getElementById("b");
const btn = document.getElementById("btn");
const tema = document.getElementById("tema");

const fundoDia = "images/bg.png";
const fundoNoite = "images/bg_noite.png";

let horas = 0;
let contador = 0;

let intervalo = null;
let intervaloFundo = null;
let time_click = null;
    let time_out = null;

const estados = {
    normal: "images/b_n.png",
    puto: "images/b_p.png",
    dormindo: "images/b_d.png",
    comendo: "images/b_c.png",
    morto: "images/b_m.png",
    feliz: "images/b_f.png"
};

function controlador() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;
        console.log("tempo:", contador);

        if (contador === 30) {
            cria.src = estados.puto;
        }

        if (contador === 60) {
            cria.src = estados.morto;
        }
    }, 1000);
}

function alimentar() {
    cria.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

    if (time_click) clearTimeout(time_click);
    if (time_out) clearTimeout(time_out);

    time_click = setTimeout(() => {
        cria.src = estados.feliz;
    }, 2000);
}

function atualizarfundo() {
    console.log("Horas:", horas);

    if (horas >= 12) {
        document.body.style.backgroundImage = `url('${fundoNoite}')`;
    } else {
        document.body.style.backgroundImage = `url('${fundoDia}')`;
    }
}

function iniciarCicloDiaNoite() {
    if (intervaloFundo) clearInterval(intervaloFundo);

    intervaloFundo = setInterval(() => {
        horas++;

        if (horas >= 24) horas = 0;

        atualizarfundo();
    }, 2000);
}

function AlternarTema() {
    if (horas < 12) {
        horas = 12;
    } else {
        horas = 0;
    }

    atualizarfundo();
}

tema.addEventListener("click", AlternarTema);

controlador();
iniciarCicloDiaNoite();
atualizarfundo();