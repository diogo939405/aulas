function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpa')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Faltam dados')
    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <= 0){
            window.alert('passo invalido, consideraremos passo 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F603} `
            }
            //contagem decrescente
        }else{
            for(let c = i; c>=f;c-=p){
                res.innerHTML += ` ${c} \u{1F603} `
            }
        } 

    }
    res.innerHTML += `\u{1F3c1}`
}