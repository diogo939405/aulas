function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero_masculino = document.getElementById('masculino')
        var genero_feminino = document.getElementById('feminino')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (genero_masculino.checked) {
            var genero = 'homem'



        } else if (genero_feminino.checked) {
            var genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} e ${idade}.`
        res.style.textAlign = 'center'

    }
}

function stringToArray(string) {
    let y ="MInha casa"
    let x = string.toSplit()

    console.log(x)
}