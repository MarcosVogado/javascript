//Criando a lista
var list = []

function addn() {
    //lendo o número digitado 
    let txtn = document.getElementById('txtn')
    let n = (Number(txtn.value))
    list.push(n)

    //Puxando o elemento para a resposta
    let seltab = document.getElementById('seltab')

    //inserindo o valor na tabela
    let item = document.createElement('option')
    item.text = `Valor ${n} foi adicionado.`
    seltab.appendChild(item)
}

function analisar() {
    let res = document.getElementById('res') 
    
    let soma = 0
    let maior = 0
    let menor = list[0]

    for(let i = 0; i < list.length; i++){
        soma += list[i]
        if(maior < list[i]){
            maior = list[i]
        } if (menor > list[i]){
            menor = list[i]
        }
    }

    let media = soma / list.length

    res.innerHTML = `Temos ao todo ${list.length} números cadastrados<br>`
    res.innerHTML += `A soma dos valores é: ${soma}<br>`
    res.innerHTML += `O maior valor é: ${maior}<br>`
    res.innerHTML += `O menor valor é: ${menor}<br>`
    res.innerHTML += `A média dos valores digitados é: ${media}`
}

   

