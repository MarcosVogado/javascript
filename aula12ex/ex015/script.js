function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length < 4 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')

        var idade = ano - Number(fano.value)

        var gen = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else {
            gen = 'Mulher'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }

        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
        
    }
}

