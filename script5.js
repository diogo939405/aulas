//window.alert('Seja bem vindo ao meu site')

function clicar(){
    let nome = window.prompt("fale seu nome")
    let n1 = window.prompt(`Digite sua primeira nota ${nome}`)
    let n2 = window.prompt(`Digite sua outra nota ${nome}`)
    let re = window.document.getElementById('res')

   if(n1>n2){
    re.innerHTML = `${n1} é maior que ${n2}`
   }else if(n1<n2){
    re.innerHTML = `${n1} é menor que ${n2}`
   } else{
    re.innerHTML = ` ${n1} e ${n2} são iguais`
   }
   

   // let s = (Number(n1) + Number(n2))
   // let me = (Number(n1) + Number(n2)) / 2

  /*  let msg = ''
    if(Number(me)<=5){
        e.innerHTML = `estude mais`
    }else{
        e.innerHTML = `parabens` 
    }

   re.innerHTML = `sua media final de ${me}`
    */
   
   


















    //re.innerHTML = `Olá <strong>${x}</strong>, o dobro de ${num} é ${mul} e a metade é ${met}`
   // re.innerHTML = `calculando a média de ${nome}`
   // re.innerHTML = `a Soma de ${n1} + ${n2} é igual a = ${s}`
    //re.innerHTML = `A média final de ${nome} é igual a  ${me}`
     

}