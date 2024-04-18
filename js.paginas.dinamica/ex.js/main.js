const nomePalíndromo = (palavra) => {

    const palavraPalíndromo = palavra.toUpperCase().split("").reverse().join("");

    if (palavra.toUpperCase() === palavraPalíndromo) {
        console.log(`A palavra: ${palavra}, é sim um Palíndromo!`)
        return
    }
        console.log(`A palavra: ${palavra}, não é Palíndromo!`)

}


nomePalíndromo("aia")