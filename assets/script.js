
const fechaEvento = new Date("Oct 15, 2026 21:00:00").getTime();

setInterval(()=>{

    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;

    document.getElementById("dias").innerHTML =
        Math.floor(distancia/(1000*60*60*24));

    document.getElementById("horas").innerHTML =
        Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

    document.getElementById("minutos").innerHTML =
        Math.floor((distancia%(1000*60*60))/(1000*60));

    document.getElementById("segundos").innerHTML =
        Math.floor((distancia%(1000*60))/1000);

},1000);
