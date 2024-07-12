async function buscarEndereco(cep) {

    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
             throw Error('CEP não existente!')  
        }
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')  // Corrigido aqui

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP invalido. tente novamente!</p>`
         console.log(erro)
    }
}

var cep = document.getElementById('cep')

cep.addEventListener('focusout', () => buscarEndereco(cep.value))