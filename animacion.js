let imagenFondo; // Variable para almacenar la imagen de fondo
let boton;
function setup() {
  imagenFondo = loadImage('fondo.jpg');
  createCanvas(1366, 768);
  boton = createButton('ENTRAR AL JUEGO');
}

function draw() {
  background(imagenFondo);
  BotonEntrar(); 
}

function Entrar(){
  boton.hide();//el método hide sirve para que el elemento deje ser visible 
  //y el método show() sirve para mostrar nuevamente.
}

function BotonEntrar(){
  //toda la funcion para configurar al método del boton.
  boton.position(550,500);
  boton.size(300,100);
  boton.style('border', '3px solid red');
  boton.style('font-size', '32px');
  boton.mousePressed(Entrar);
}
