function changeImage(x){
    if(x==1){
        document.getElementById("img").src = './imagens/ligada.png'
        
    } if(x==2){
        document.getElementById("img").src = './imagens/desligada.png'
    }
}
function mudar(car){
    document.getElementById("img").src='./imagens/'+car+'.png' 
    
}