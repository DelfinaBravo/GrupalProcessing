let imagenFondo; // Variable para almacenar la imagen de fondo
let boton;
let logo;

function setup() {
  imagenFondo = loadImage('fondo.jpg');
  logo = loadImage('logo.png');
  createCanvas(1366, 768);
  boton = createButton('ENTRAR AL JUEGO');
}

function draw() {
  background(imagenFondo);
  BotonEntrar();
  image(logo,450,-40);
}

function BotonEntrar(){
  //toda la funcion para configurar al método del boton.
  boton.position(555,500);
  boton.size(300,100);
  boton.style('border', '3px solid red');
  boton.style('font-size', '32px');
  boton.mousePressed(Entrar);
}

function Entrar(){
  boton.hide();//el método hide sirve para que el elemento deje ser visible 
  //y el método show() sirve para mostrar nuevamente.
  logo = false;  // deja de mostrar el logo.
}
