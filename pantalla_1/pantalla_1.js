let a = 0;
let fondo = 0;
let personaje;
let img; // Declarar variable 'img'.
function setup() {
  createCanvas(1366, 768);
  img = loadImage('../imagenes/imgp1/fondop1.jpeg');
  personaje = loadImage('../imagenes/imgp1/moises.gif');
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
  let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  // Establecer propiedades del texto
  textSize(15.4); // Tamaño de la fuente
  textAlign(CENTER); // Alineación del texto
  // Obtener dimensiones del texto
  let textoAncho = textWidth(texto);
  let textoAlto = textAscent() + textDescent();
  // Definir posición y tamaño del cuadro de texto
  let cuadroX = 235;
  let cuadroY = 590;
  let cuadroAncho = textoAncho - 1950;
  let cuadroAlto = textoAlto + 100;
  // Dibujar el cuadro
  fill(255,238,169); // Color del cuadro
  rect(cuadroX, cuadroY, cuadroAncho, cuadroAlto); // Dibujar el cuadro
  // Color del texto
  fill(1);
  text(texto, cuadroX , cuadroY , cuadroAncho , cuadroAlto ); // Posición y tamaño del texto dentro del cuadro
}
