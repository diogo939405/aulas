
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('digite um numero')
    }else{
        let n = Number(num.value)
        tab.innerHTML=''
        for(c=1;c <= 10;c++){
            tab.innerHTML=''
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    } 
    
}