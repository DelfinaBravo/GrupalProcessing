let fondo = 0;
let personaje;
let fondop; 
let moises;
let pulgar;
let audio;
let personajedesaparece = false;

let y = 768; // Variable global para la posición vertical de Moisés

function preload() {
  fondop = loadImage('../mediaBravoDelfina/cielo.jpeg');
  personaje = loadImage('../Media_ChavezFernanda/moisesvara.png');
  pulgar = loadImage('../Media_ChavezFernanda/pulgar abajo.gif');
  audio = loadSound('..audiojuanmattia/escena3.mp3');
}

function setup() {
  createCanvas(1366, 768);
  let newWidth = personaje.width * 1.4;
  let newHeight = personaje.height * 1.4;
  personaje.resize(newWidth, newHeight);
}

function draw() {
  background(0);

  // Dibuja la imagen de fondo
  image(fondop, 0, 0);

  // Dibuja el cuadro de texto
  let texto = "Moisés proclamó: He cumplido mi deber según la voluntad de Dios. Ahora dejó este mundo en paz. Ante esto, el pueblo exclamó con angustia: ¡Moisés ha muerto! ¿Qué será de nosotros ahora? En ese momento, una voz del cielo los reconfortó: No temas, pueblo mío. Mi amor y protección siempre estarán con vosotros. El pueblo respondió con fervor: ¡Creemos en ti, oh Señor! Te seguiremos todos los días de nuestras vidas. Mientras tanto, el Faraón, impactado por los acontecimientos, admitió: ¡Mi poder ha sido desafiado por un Dios más grande! Debo reconsiderar mis acciones.' Finalmente, el pueblo declaró con convicción: '¡La fe en Dios nos ha liberado y nos guiará hacia el futuro!";
  let cuadroX = 280;
  let cuadroY = 590;
  // Llama a la función para animar la subida de Moisés
  sube();
  let cuadroAncho = 800; // Ajusta el ancho según sea necesario
  let cuadroAlto = 100; // Ajusta el alto según sea necesario
  fill(255, 238, 169);
  rect(cuadroX, cuadroY, cuadroAncho, cuadroAlto);
  fill(1);
  text(texto, cuadroX + 10, cuadroY + 20, cuadroAncho - 20, cuadroAlto - 40);

  
}

function sube() {
  if (y >= -personaje.height) {
    image(personaje, 320, y - 120);
    y -= 1;
  } else {
    personajedesaparece = true;
  }

 
   // Si personajedesaparece es true, mostrar "final malo"
   if (personajedesaparece) {
    // Nuevo canvas para "final malo"
    let finalCanvas = createCanvas(300, 300); // Aumento el tamaño del canvas
    finalCanvas.position(500, 300); // Posición del nuevo canvas
  
    // Dibuja el gif del pulgar hacia arriba más grande
    let pulgarSize = 300; // Tamaño aumentado del pulgar
    image(pulgar, 40, -50, pulgarSize, pulgarSize);
    // Texto "Final malo" más grande debajo del gif
    fill(0);
    textSize(40); // Aumento del tamaño del texto
    textAlign(CENTER);
    text("Final malo", 200, 270); // Ajuste de la posición del texto
  }
}

