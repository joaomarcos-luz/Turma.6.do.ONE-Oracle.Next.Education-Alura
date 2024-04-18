const tocarSom = (seletorAudio) => {
    const elemento = document.querySelector(seletorAudio);
    if (elemento === null) {
        console.log("Elemento não encontrado.");
    } else {
        elemento.play(); // Adiciona essa linha para tocar o som
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla")

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrument}`

    tecla.onclick = () => tocarSom(idAudio)

    tecla.onkeydown = (evento) => {
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add("ativa")
        }
    }

    tecla.onkeyup = () => tecla.classList.remove("ativa")

}