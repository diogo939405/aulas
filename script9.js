let re = document.getElementById('res')

function B1(){
    let cubo = Number(window.prompt('digite um numero'))
     let num = Number(cubo) ** 3
     
     re.innerHTML = ` o cubo do seu ${cubo} é ${num}`

}