 /*var usuarios = [
    {"login": "bcf", "senha": "bcf"},
    {"login": "mamae", "senha": "abacaxi"},
    {"login": "papai", "senha": "melancia"},
];*/

function verificar(){
    let log = document.getElementById('login').value
    let sen = document.getElementById('senha').value

    if(log == "admin" && sen == "s"){
        window.alert("sucesso")
    } else{
        window.alert("deu merda")
    }
}