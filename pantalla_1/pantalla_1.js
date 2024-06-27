let moises;
let fondo;
let boton;
let audio;
function setup() {
  createCanvas(1366, 768);
  fondo = loadImage('../Media_ChavezFernanda/Mar_Fondo.jpg');
  moises = loadImage('../Media_ChavezFernanda/moisesvara.png');
  audio = createAudio('../audio/botonaudio.mp3');
}

function draw() {
  background(fondo); 
  pantalla1();
  //Creación de los botones 
  boton1 = createButton('LEVANTAR VARA');   
  configurarBoton(boton1,210,60,'../opcion1/index.html');
  boton2 = createButton('GOLPEAR VARA');
  configurarBoton(boton2,600,60,'');
  boton3 = createButton('SOSTENER VARA');
  configurarBoton(boton3,990,60,'../opcion3/index.html');
}

function configurarBoton(boton,x,y,url){
  boton.position(x, y);
  boton.size(150, 90);
  boton.style('border', '3px solid black');
  boton.style('font-size', '20px');
  boton.style('background','yellow');
  
  boton.mousePressed(() => {
    audio.play();
    if (url) {
      setTimeout(() => {
        window.location.href = url;
      }, 500); 
    }
  });

}

function pantalla1(){
  // Definir el texto que quieres mostrar
  // Mostrar la imagen del personaje con un tamaño diferente
  let nuevoAncho = 700; // Nuevo ancho deseado para la imagen (en píxeles)
  let nuevoAlto = 900; // Nuevo alto deseado para la imagen (en píxeles)
  
  image(moises, 90, 120, nuevoAncho, nuevoAlto);
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
