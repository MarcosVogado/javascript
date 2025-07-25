//Criando a lista
var list = []

function addn() {
    //lendo o número digitado 
    let txtn = document.getElementById('txtn')
    let n = (Number(txtn.value))

    if(n < 1 || n > 100){
        window.alert('Adicione um valor entre 1 e 100!')
    } else if (list.indexOf(n) == -1){
        list.push(n)

        res.innerHTML = ''

        //Puxando o elemento para a resposta
        let seltab = document.getElementById('seltab')

        //inserindo o valor na tabela
        let item = document.createElement('option')
        item.text = `Valor ${n} foi adicionado.`
        seltab.appendChild(item)
    } else {
        window.alert('Este valor já exite, adicione um valor diferente!')
    }

    txtn.value = ''
    txtn.focus()

    res.innerHTML = ''
}

function analisar() {
    if(list.length < 1) {
        window.alert('Adcione valores antes de finalizar!')
    }

    let res = document.getElementById('res') 
    
    let soma = 0

    list.sort()

    for(let i = 0; i < list.length; i++){
        soma += list[i]
        /*
        if(maior < list[i]){
            maior = list[i]
        }
        if (menor > list[i]){
            menor = list[i]
        }
        */
    }

    let media = soma / list.length

    //Exibindo na tela
    res.innerHTML = `Temos ao todo ${list.length} números cadastrados<br>`
    res.innerHTML += `A soma dos valores é: ${soma}<br>`
    res.innerHTML += `O maior valor é: ${list[list.length-1]}<br>`
    res.innerHTML += `O menor valor é: ${list[0]}<br>`
    res.innerHTML += `A média dos valores digitados é: ${media}`
}

   

