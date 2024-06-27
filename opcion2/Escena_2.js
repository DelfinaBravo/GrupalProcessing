let fondo = 0;
let personaje;
let fondop;
let fondop2;
let gato;// Declarar variable 'img'.
let agua;
let pantallaActual = 1;
let choque;

function preload (){
  agua = loadSound('inunda.mp3');
  choque = loadSound('choque.mp3');
}

function setup() {
  createCanvas(1366, 768);
  fondop = loadImage('f1.png');
  fondop2 = loadImage('f2.png');
  personaje = loadImage('j.gif');
  gato = loadImage('mauri.gif');
  agua.onended(cambiarPantalla);
  choque.onended(Menu);
}

function draw() {
  background(0); // Establecer color de fondo
  // Muestra la imagen en su tamaño original en la posición (0,0)
  image(fondop, 160, 0);
  //image(fondop2, 160, 0);
  if (pantallaActual == 1) {
    pantalla1();
  } else {
    if (pantallaActual == 2) {
      pantalla2();
    }
  }
}
//pantalla2();

function pantalla1(){
  // Definir el texto que quieres mostrar
  // Mostrar la imagen del personaje con un tamaño diferente
  let nuevoAncho = 300; // Nuevo ancho deseado para la imagen (en píxeles)
  let nuevoAlto = 300; // Nuevo alto deseado para la imagen (en píxeles)
  image(gato, 450, 50, nuevoAncho, nuevoAlto);
  let texto = "HAGA CLICK EN CUALQUIER PARTE DE LA PANTALLA";
  // Establecer propiedades del texto
  textSize(15.4); // Tamaño de la fuente
  textAlign(CENTER); // Alineación del texto
  // Obtener dimensiones del texto
  let textoAncho = textWidth(texto);
  let textoAlto = textAscent() + textDescent();

  // Definir posición y del cuadro de texto
  //horizontal
  let cuadroX = 500;
  //vertical
  let cuadroY = 590;
  // anchos
  let cuadroAncho = 300;
  //alto
  let cuadroAlto = 50;
  // Dibujar el cuadro
  fill(255,238,169); // Color del cuadro
  rect(cuadroX, cuadroY, cuadroAncho, cuadroAlto); // Dibujar el cuadro
  // Color del texto
  fill(1);
  text(texto,cuadroX,600,cuadroAncho,cuadroAlto); // Posición y tamaño del texto dentro del cuadro
  if(mouseIsPressed){
    if(agua.isPlaying() == false){
      agua.play();
      setTimeout(()=>{window.location.href = '../pantalla_1/index.html';},10000);
    }
  }
  
  
}


function pantalla2(){
  image(fondop2, 160, 0);
  if(choque.isPlaying() == false){
      choque.play();
   }
  
}

function cambiarPantalla() {
  pantallaActual = 2;
  
}

function Menu(){
  background(255);
}
