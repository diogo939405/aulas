let re = document.getElementById('res')
function B1(){
    let x = Math.floor(Math.random()*100)
    re.innerHTML += `<p>olha seu ${x}</p>`
}

function B2(){

    re.innerHTML = null
}