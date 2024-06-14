let a = 0;
let fondo = 0;
let personaje;
let img; // Declarar variable 'img'.
function setup() {
  createCanvas(1366, 768);
  img = loadImage('f2.jpeg');
  personaje = loadImage('m.gif');
}


function draw() {
  background(0); // Establecer color de fondo
  // Muestra la imagen en su tamaño original en la posición (0,0)
  image(img, 160, 0);
  if(a == 0){
    pantalla1();
  }
}


function pantalla1(){
  // Definir el texto que quieres mostrar
  // Mostrar la imagen del personaje con un tamaño diferente
  let nuevoAncho = 700; // Nuevo ancho deseado para la imagen (en píxeles)
  let nuevoAlto = 900; // Nuevo alto deseado para la imagen (en píxeles)
  image(personaje, 90, 120, nuevoAncho, nuevoAlto);
  let texto = "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  // Establecer propiedades del texto
  textSize(15.4); // Tamaño de la fuente
  textAlign(CENTER); // Alineación del texto
  // Obtener dimensiones del texto
  let textoAncho = textWidth(texto);
  let textoAlto = textAscent() + textDescent();
  
  
  // Definir posición y del cuadro de texto
  //horizontal
  let cuadroX = 290;
  //vertical
  let cuadroY = 590;
  // ancho
  let cuadroAncho = textoAncho - 850;
  //alto
  let cuadroAlto = textoAlto + 100;
  // Dibujar el cuadro
  fill(255,238,169); // Color del cuadro
  rect(cuadroX, cuadroY, cuadroAncho, cuadroAlto); // Dibujar el cuadro
  // Color del texto
  fill(1);
  text(texto, cuadroX + 1, cuadroY + 19, cuadroAncho - 10, cuadroAlto - 10); // Posición y tamaño del texto dentro del cuadro
}
