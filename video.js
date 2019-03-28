function main()
{
  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  display = document.getElementById("display")

  //-- Establecer el tamaño del vídeo
  video1.width = 300;
  video1.height= 200;
  video2.width = 300;
  video2.height= 200;
  video3.width = 300;
  video3.height= 200;
  display.width = 300;
  display.height= 200;
  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')

  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    display.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  }
  ver2.onclick = () => {
    display.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  }
  ver3.onclick = () => {
    display.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  }
  video1.onmouseover = () => {
    video1.autoplay = true;
  }
  video1.onmouseout = () => {
    console.log("Mouse out!!")
  }
}
