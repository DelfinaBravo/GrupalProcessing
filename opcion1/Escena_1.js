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
  audioD= createAudio('../audio/titanic.mp3');
  moises = loadImage('../Media_ChavezFernanda/moisesvara.png');
  multitud = loadImage('../mediaBravoDelfina/multitud.png');
}

function setup() {
  createCanvas(1366, 768);
  marAbierto = loadImage('../mediaBravoDelfina/marabierto.png');
  marCerrado = loadImage('../mediaBravoDelfina/marcerrado.png');
  pulgar = loadImage('../Media_ChavezFernanda/Pulgar_Arriba.gif');

  y = height; // Inicializa la posición y en la parte inferior del lienzo
  fondo = marAbierto; // Inicializa el fondo con marAbierto

  TamañoImagenes()
}

function draw() {
  background(fondo);
  audioD.play();
  Caminan();
  FinalBueno();
}

function Caminan(){
  if (y >= -moises.height) { // Dibuja la imagen solo si aún no ha salido de la pantalla
    image(multitud, 250, y + 200); 
    image(multitud, 450, y + 200); 
    image(multitud, 250, y + 250); 
    image(multitud, 450, y + 250); 
    //
    image(moises, 290, y - 130); 
    
    y -= 1; // Mueve la imagen hacia arriba (decrementa y)
    
  } else {
    fondo = marCerrado; // Cambia el fondo a marCerrado
    moisesDesaparecido = true; // Marca que Moisés ha desaparecido
  } 
}

function FinalBueno(){
  if (moisesDesaparecido) { // Si Moisés ha desaparecido, dibuja el gif del pulgar arriba
    image(pulgar, 350, 200); // Dibuja el gif del pulgar arriba en la posición deseada
    textSize(32); 
    fill(1); 
    textAlign(CENTER); 
    text("FINAL BUENO", 650 ,600); 
  
    //que despues de 3,5 segundos redireccione a "pantalla1".
    setTimeout(()=>{window.location.href = '../pantalla_1/index.html';},3500); 
  }
}

function TamañoImagenes(){
  let newWidth = moises.width * 1.2; // Multiplica por 0.8 para hacer la imagen más pequeña
  let newHeight = moises.height * 1.2; // Multiplica por 0.8 para hacer la imagen más pequeña
  moises.resize(newWidth, newHeight);

  // Redimensiona la imagen de la multitud manteniendo la proporción
  let nuevoancho = multitud.width * 1; 
  let nuevoalto = multitud.height * 1; // Multi
  multitud.resize(nuevoancho, nuevoalto);
}
