function carregar() {
    //Pegando os elementos onde serão inseridos as informações.
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    //Pegando todas as informações do dia, e pondo na variável hora só a hora do dia.
    var data = new Date()
    var hora = data.getHours()

    //Fazendo a condição para cada imagem.
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#C1C7CA'
    } else if (hora < 18) {
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#81513D'
    } else {
        //Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#01264B'
    }
}
