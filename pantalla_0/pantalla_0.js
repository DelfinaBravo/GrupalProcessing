let imagenFondo; 
let logo;
let boton;
let audio;

function setup() {
  createCanvas(1366, 768);
  imagenFondo = loadImage('../imagenes/imgp0/fondo.png');
  logo = loadImage('../imagenes/imgp0/logo.png');
  audio = createAudio('../audio/botonaudio.mp3');
  
  // Crear y configurar el botón una vez
  boton = createButton('INICIAR JUEGO');
  configurarBoton();
}

function draw() {
  background(imagenFondo);
  image(logo, 450, -40);
}

function configurarBoton() {
  boton.position(555, 500);
  boton.size(300, 100);
  boton.style('border', '3px solid black');
  boton.style('font-size', '32px');
  boton.style('background', '#FFEEA9');
  boton.mousePressed(BotonAudio);
}

function BotonAudio() {
  audio.play();
  // Retrasar la redirección para asegurar que el audio comienza a reproducirse
  // setTimeout es una función de JavaScript que ejecuta una función después de un retraso
  // especificado en milisegundos.
  setTimeout(()=>{window.location.href = '../pantalla_1/index.html';},500); 
}

