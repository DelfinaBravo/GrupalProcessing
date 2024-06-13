let imagenFondo; // Variable para almacenar la imagen de fondo
let boton;
let logo;
let mostrarLogo = true;
let valorDesvanecer = 0;
let desvaneciendoEn = false;
let desvaneciendoFuera = false;
let tiempoInicioDesvanecer;


function setup() {
  createCanvas(1366, 768);
  imagenFondo = loadImage('fondo.jpg');
  logo = loadImage('logo.png');
  boton = createButton('ENTRAR AL JUEGO');
  configurarBoton();
}

function draw() {
  background(imagenFondo);
  if (mostrarLogo) {
    image(logo, 450, -40);
  }

  manejarEfectoDesvanecer();
}

function configurarBoton(){
  boton.position(555, 500);
  boton.size(300, 100);
  boton.style('border', '3px solid red');
  boton.style('font-size', '32px');
  boton.mousePressed(entrar);
}

function entrar(){
  boton.hide(); // Oculta el botón
  mostrarLogo = false; // Oculta el logo
  iniciarEfectoDesvanecer();
}

function manejarEfectoDesvanecer() {
  if (desvaneciendoEn) {
    valorDesvanecer = map(millis() - tiempoInicioDesvanecer, 0, 1500, 0, 255); // Aumenta opacidad en 1.5 segundos
    if (valorDesvanecer >= 255) {
      valorDesvanecer = 255;
      desvaneciendoEn = false;
      desvaneciendoFuera = true;
      tiempoInicioDesvanecer = millis();
    }
  } else if (desvaneciendoFuera) {
    valorDesvanecer = map(millis() - tiempoInicioDesvanecer, 0, 1500, 255, 0); // Disminuye opacidad en 1.5 segundos
    if (valorDesvanecer <= 0) {
      valorDesvanecer = 0;
      desvaneciendoFuera = false;
    }
  }

  if (desvaneciendoEn || desvaneciendoFuera) {
    fill(255, valorDesvanecer);
    rect(0, 0, width, height); // Dibuja un rectángulo blanco con opacidad variable
  }
}

function iniciarEfectoDesvanecer() {
  desvaneciendoEn = true;
  tiempoInicioDesvanecer = millis();
}