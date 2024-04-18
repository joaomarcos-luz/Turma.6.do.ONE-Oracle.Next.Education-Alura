const listaDeTeclas = document.querySelectorAll("input[type=button]")
const inpuTel = document.querySelector("input[type=tel]")

for (const teclas of listaDeTeclas) {
    teclas.addEventListener("click", (event) => {
        const tecla = event.target
        inpuTel.value += tecla.value
    })
}

for (const teclas of listaDeTeclas) {
    teclas.onkeydown = (evento) => {
        if(evento.code === "Enter" || evento.code === "Space"){
            teclas.classList.add("ativa")
        }
    }

    teclas.onkeyup = () => teclas.classList.remove("ativa")
}