const dia = document.getElementById('dias')
const hora = document.getElementById('horas')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('segundos')



const dataFim = "2024-01-01"

function countdown(){
    
    const anoNovo = new Date(dataFim)

    const dataAtual = new Date();

    const totalSegundos = (anoNovo - dataAtual)/1000

    const dia2 = Math.floor(totalSegundos/3600/24)
    const hora2 = Math.floor(totalSegundos/3600) % 24
    const minuto2 = Math.floor(totalSegundos/60) % 60
    const segundo2 = Math.floor(totalSegundos) % 60

    dia.innerHTML = format(dia2);
    hora.innerHTML = format(hora2);
    minuto.innerHTML = format(minuto2);
    segundo.innerHTML = format(segundo2);

}

function format(time){
    console.log(time)
    return time < 10 ? `0${time}`: time
}

countdown();
setInterval(countdown,1000)