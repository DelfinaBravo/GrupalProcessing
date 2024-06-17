let fondo = 0;
let personaje;
let fondop; // Declarar variable 'img'.
function setup() {
  createCanvas(1366, 768);
  fondop = loadImage('f1.png');
  personaje = loadImage('m.gif');
}


function draw() {
  background(0); // Establecer color de fondo
  // Muestra la imagen en su tamaño original en la posición (0,0)
  image(fondop, 160, 0);
    pantalla1();
}

function pantalla1(){
  // Definir el texto que quieres mostrar
  // Mostrar la imagen del personaje con un tamaño diferente
  let nuevoAncho = 700; // Nuevo ancho deseado para la imagen (en píxeles)
  let nuevoAlto = 900; // Nuevo alto deseado para la imagen (en píxeles)
  image(personaje, 90, 120, nuevoAncho, nuevoAlto);
  let texto = "Moisés proclamó: He cumplido mi deber según la voluntad de Dios. Ahora dejó este mundo en paz. Ante esto, el pueblo exclamó con angustia: ¡Moisés ha muerto! ¿Qué será de nosotros ahora? En ese momento, una voz del cielo los reconfortó: No temas, pueblo mío. Mi amor y protección siempre estarán con vosotros. El pueblo respondió con fervor: ¡Creemos en ti, oh Señor! Te seguiremos todos los días de nuestras vidas. Mientras tanto, el Faraón, impactado por los acontecimientos, admitió: ¡Mi poder ha sido desafiado por un Dios más grande! Debo reconsiderar mis acciones.' Finalmente, el pueblo declaró con convicción: '¡La fe en Dios nos ha liberado y nos guiará hacia el futuro!";
  // Establecer propiedades del texto
  textSize(15.4); // Tamaño de la fuente
  textAlign(CENTER); // Alineación del texto
  // Obtener dimensiones del texto
  let textoAncho = textWidth(texto);
  let textoAlto = textAscent() + textDescent();

  // Definir posición y del cuadro de texto
  //horizontal
  let cuadroX = 250;
  //vertical
  let cuadroY = 590;
  // ancho
  let cuadroAncho = textoAncho - 3600;
  //alto
  let cuadroAlto = textoAlto + 100;
  // Dibujar el cuadro
  fill(255,238,169); // Color del cuadro
  rect(cuadroX, cuadroY, cuadroAncho, cuadroAlto); // Dibujar el cuadro
  // Color del texto
  fill(1);
  text(texto,cuadroX,cuadroY,cuadroAncho,cuadroAlto); // Posición y tamaño del texto dentro del cuadro
}
