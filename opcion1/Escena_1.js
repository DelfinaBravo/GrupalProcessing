let moises;
let marAbierto;
let multitud;
let y; // posición vertical de la imagen
let marCerrado;
let fondo;
let pulgar;
let moisesDesaparecido = false; // Variable para rastrear si Moisés ha desaparecido
let audioD;
function preload() {
  
}

function setup() {
  createCanvas(1366, 768);
  marAbierto = loadImage('../mediaBravoDelfina/marabierto.png');
  marCerrado = loadImage('../mediaBravoDelfina/marcerrado.png');
  moises = loadImage('../Media_ChavezFernanda/moisesvara.png');
  multitud = loadImage('../mediaBravoDelfina/multitud.png');
  pulgar = loadImage('../Media_ChavezFernanda/Pulgar_Arriba.gif');
  audioD= createButton('../audio/multitudpersonas.mp3');

  y = height; // Inicializa la posición y en la parte inferior del lienzo
  fondo = marAbierto; // Inicializa el fondo con marAbierto

  // Redimensiona la imagen de Moisés manteniendo la proporción
  let newWidth = moises.width * 1.4; // Multiplica por 0.8 para hacer la imagen más pequeña
  let newHeight = moises.height * 1.4; // Multiplica por 0.8 para hacer la imagen más pequeña
  moises.resize(newWidth, newHeight);

  // Redimensiona la imagen de la multitud manteniendo la proporción
  let nuevoancho = multitud.width * 1.2; // Multiplica por 1.3 para agrandar la imagen
  let nuevoalto = multitud.height * 1.2; // Multiplica por 1.3 para agrandar la imagen
  multitud.resize(nuevoancho, nuevoalto);
}

function draw() {
  background(fondo);
  audioD.play();
  if (y >= -moises.height) { // Dibuja la imagen solo si aún no ha salido de la pantalla
    image(multitud, 123, y); // Dibuja la imagen redimensionada de la multitud
    image(moises, 420, y - 120); // Dibuja la imagen redimensionada de Moisés un poco más arriba de la multitud
    y -= 2; // Mueve la imagen hacia arriba (decrementa y)
    
  } else {
    fondo = marCerrado; // Cambia el fondo a marCerrado
    moisesDesaparecido = true; // Marca que Moisés ha desaparecido
  }

  if (moisesDesaparecido) { // Si Moisés ha desaparecido, dibuja el gif del pulgar arriba
    image(pulgar, 600, 400); // Dibuja el gif del pulgar arriba en la posición deseada
   
  }

}
