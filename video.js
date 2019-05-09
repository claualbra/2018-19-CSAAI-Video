function main()
{
  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  display = document.getElementById("display")
  tiempo = document.getElementById("tiempo")

  //-- Establecer el tamaño del vídeo
  video1.width = 300;
  video1.height= 200;
  video2.width = 300;
  video2.height= 200;
  video3.width = 300;
  video3.height= 200;
  display.width = 500;
  display.height= 400;
  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')
  loop = document.getElementById('loop')
  var finish = 0;

  //-- Al apretar el boton de ver video
  video1.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"

  function hora(segundos){
    var d=new Date(segundos*1000);
    // Ajuste de las 23 horas
    var hora = (d.getHours()==0)?23:d.getHours()-1;
    var hora = (hora<9)?"0"+hora:hora;
    var minuto = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
    var segundo = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
    return hora+":"+minuto+":"+segundo;
  }
  ver1.onclick = () => {
    display.src = video1.src;
    display.currentTime = video1.currentTime;
    video1.style.border = '5px solid gray';
    video2.style.border = '0px';
    video3.style.border = '0px';
  }
  ver2.onclick = () => {
    display.src =video2.src;
    display.currentTime = video2.currentTime;
    video2.style.border = '5px solid gray';
    video1.style.border = '0px';
    video3.style.border = '0px';
  }
  ver3.onclick = () => {
    display.src =video3.src;
    display.currentTime = video3.currentTime;
    video3.style.border = '5px solid gray';
    video2.style.border = '0px';
    video1.style.border = '0px';
  }
  loop.onclick = () => {
    if (loop.style.border == '5px solid gray') {
         loop.style.border = '0px';
         init = 0;
         finish = 0;
         // Si se quita el bucle el video vuelve a sincro con los pequeños
         if (video1.style.border == '5px solid gray'){
           display.currentTime = video1.currentTime;
         }
         if (video2.style.border == '5px solid gray'){
           display.currentTime = video2.currentTime;
         }
         if (video3.style.border == '5px solid gray'){
           display.currentTime = video3.currentTime;
         }
     } else {
         init = new Number(document.getElementById("start").value);
         finish = document.getElementById("end").value;
         loop.style.border = '5px solid gray';
         display.currentTime = init;
     }
  }


  setInterval(()=>{
    if (finish != 0){
         if (display.currentTime > finish){
             display.currentTime = init;
         }
     }
    tiempo.innerHTML = hora(display.currentTime);
  },20); //-- timer

  video1.onmouseover = () => {
    video1.muted=false;
  }
  video1.onmouseout = () => {
    video1.muted=true;
  }
  video2.onmouseover = () => {
    video2.muted=false;
  }
  video2.onmouseout = () => {
    video2.muted=true;
  }
  video3.onmouseover = () => {
    video3.muted=false;
  }
  video3.onmouseout = () => {
    video3.muted=true;
  }
}
