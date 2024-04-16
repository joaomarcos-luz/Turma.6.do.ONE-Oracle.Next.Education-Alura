const listaDeTeclas = document.querySelectorAll("input[type=button]")
const inpuTel = document.querySelector("input[type=tel]")


for (const teclas of listaDeTeclas) {
    
    const tecla = teclas //fosse for normal seria teclas[index]

    tecla.addEventListener("click", () => {
        inpuTel.value += tecla.value
    })
}
5






// const inputTel = document.querySelector("input[type=tel]")
// const delet = () => document.querySelector("input[type=tel]")

// document.querySelector(".delete").onclick = delet

