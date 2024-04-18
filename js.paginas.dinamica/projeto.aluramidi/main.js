const tocarSom = (idElementoSom) => document.querySelector(idElementoSom).play()

const listaDeTeclas = document.querySelectorAll(".tecla")

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = () => tocarSom(idAudio)

    tecla.onkeydown = () => tecla.classList.add("ativa")

    tecla.onkeyup = () => tecla.classList.remove("ativa")

}