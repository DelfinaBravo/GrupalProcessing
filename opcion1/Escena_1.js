let moises;
let marAbierto;
let y; // posición vertical de la imagen
let marCerrado;
let fondo;

function preload() {
  marAbierto = loadImage('../mediaBravoDelfina/marabierto.png');
  marCerrado = loadImage('../mediaBravoDelfina/marcerrado.png');
  moises = loadImage('../imagenes/imgp1/moises.gif');
}

function setup() {
  createCanvas(1366, 768);
  y = height; // Inicializa la posición y en la parte inferior del lienzo
  fondo = marAbierto; // Inicializa el fondo con marAbierto
}

function draw() {
  background(fondo);
  
  if (y >= -moises.height) { // Dibuja la imagen solo si aún no ha salido de la pantalla
    image(moises, 123, y);
    y -= 2; // Mueve la imagen hacia arriba (decrementa y)
  } else {
    fondo = marCerrado; // Cambia el fondo a marCerrado
  }
}
