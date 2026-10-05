function buscarEndereco(cep) {
    if(validaCep(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(json => {
            if(json.erro) {
                alert("CEP inválido!");
                return;
            }
            let logradouro = document.querySelector("#logradouro");
            let bairro = document.querySelector("#bairro");
            let localidade = document.querySelector("#localidade");
            let estado = document.querySelector("#estado");

            logradouro.value = json.logradouro;
            bairro.value = json.bairro;
            localidade.value = json.localidade;
            estado.value = json.estado;
     })
    }
}

function validaCep(cep) {
    let regex = /^\d{8}$/;
    return regex.test(cep);
}
