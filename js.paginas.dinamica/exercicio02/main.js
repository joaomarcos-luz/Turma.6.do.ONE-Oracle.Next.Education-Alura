const listaTeclas = document.querySelectorAll(".tecla");
const res = document.querySelector("div");

let valorAnterior = 0; // Initialize to store accumulated sum

for (const tecla of listaTeclas) {
  tecla.addEventListener("click", (event) => {
    const valorAtual = parseInt(event.target.value);
    valorAnterior += valorAtual; // Update valorAnterior with sum
    res.innerHTML = `${valorAnterior}`; // Display accumulated value
  });
}

// let contador = 0

// const incrementar = () => {
//     contador ++
//     res.innerHTML = `Contador: ${contador}`
// }

// let i = 0

// for (const tecla of listaTeclas) {
//      tecla.addEventListener("click", incrementar)
//  }