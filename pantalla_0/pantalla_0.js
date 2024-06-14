let imagenFondo; // Variable para almacenar la imagen de fondo
let logo;

function setup() {
  createCanvas(1366, 768);
  imagenFondo = loadImage('../imagenes/imgp0/fondo.png');
  logo = loadImage('../imagenes/imgp0/logo.png');
}

function draw() {
  background(imagenFondo);
  image(logo, 450, -40);


}
//Llama al id del boton , y cuando se de click empieza a andar la funcion "entrar".
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btniniciar').addEventListener('click', entrar);
});


