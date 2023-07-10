contador = 0
let re = window.document.getElementById('res')

function inserir(){
    contador++
    re.innerHTML = `existem ${contador}`
   
}



function zerar(){
    contador = 0
    re.innerHTML = null
}