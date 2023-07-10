function insert(num){
     document.getElementById('resultado').innerHTML += num
    
}

function apagar(){
    document.getElementById('resultado').innerHTML = ""
}

function calc(){
    
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('resultado').innerHTML = "vazio..."
    }
    
    
}