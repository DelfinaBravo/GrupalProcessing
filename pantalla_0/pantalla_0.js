let imagenFondo; 
let logo;
let boton;

function setup() {
  createCanvas(1366, 768);
  imagenFondo = loadImage('../imagenes/imgp0/fondo.png');
  logo = loadImage('../imagenes/imgp0/logo.png');
}

function draw() {
  background(imagenFondo);
  image(logo, 450, -40);
  boton = createButton('INICIAR JUEGO');  
  configurarBoton();
}

function configurarBoton(){
  boton.position(555, 500);
  boton.size(300, 100);
  boton.style('border', '3px solid black');
  boton.style('font-size', '32px');
  boton.style('background','yellow');
  // Asociar el botón a la otra página HTML
  // Cuando el boton es presionado rederecciona a la otra pantalla0.
  boton.mousePressed(() => {
    window.location.href = '../pantalla_1/index.html';
  });

}

