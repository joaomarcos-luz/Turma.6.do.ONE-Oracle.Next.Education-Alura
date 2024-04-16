const listaTeclas = document.querySelectorAll(".tecla")
const res = document.querySelector("div")

let contador = 0

const incrementar = () => {
    contador ++
    res.innerHTML = `Contador: ${contador}`
}

let i = 0

for (const tecla of listaTeclas) {
     tecla.addEventListener("click", incrementar)
 }