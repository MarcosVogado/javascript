function contar() {
    // Pegando os valores digitados nos campos
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    // Pegando o campo para a resposta
    var res = document.getElementById('res')
    //Criando o contador
    var i = Number(ini.value)
    // Validando e contando
    if (ini.value.length == 0 || fim.value.length == 0 || ini.value == fim.value){
        window.alert('[ERRO] Preencha os campos corretamente')
    } else if (Number(pas.value < 1)){
        window.alert('Já que não foi posto um valor válido, faremos de 1 em 1 ok!')
        // Limpando o campo
        res.innerHTML = `Contando: <br>`

        if (ini.value < Number(fim.value)) {
            for (i;i<=fim.value;i++){
                res.innerHTML += ` ${i}	\u{27A1} `
            }   
        } else {
            for (i;i>=fim.value;i--){
                res.innerHTML += ` ${i}	\u{27A1} `
            }
        }
        res.innerHTML += ' FIM! \u{2705}'
    } else {
        // Limpando o campo
        res.innerHTML = `Contando: <br>`

        if (ini.value < Number(fim.value)) {
            for (i;i<=fim.value;i+=Number(pas.value)){
                res.innerHTML += ` ${i}	\u{27A1} `
            }   
        } else {
            for (i;i>=fim.value;i-=Number(pas.value)){
                res.innerHTML += ` ${i}	\u{27A1} `
            }
        }
        res.innerHTML += ' FIM! \u{2705}'
    }
}