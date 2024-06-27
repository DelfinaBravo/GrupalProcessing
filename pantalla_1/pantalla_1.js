let moises;
let fondo;
let boton;
let audio;
function setup() {
  createCanvas(1366, 768);
  fondo = loadImage('../Media_ChavezFernanda/Mar_Fondo.jpg');
  moises = loadImage('../Media_ChavezFernanda/moisesvara.png');
  audio = createAudio('../audio/botonaudio.mp3');
  gente=loadImage('../mediaBravoDelfina/multitud.png')
}

function draw() {
  background(fondo); 
  pantalla1();
  //Creación de los botones 
  boton1 = createButton('LEVANTAR VARA');   
  configurarBoton(boton1,210,60,'../opcion1/index.html');
  boton2 = createButton('GOLPEAR VARA');
  configurarBoton(boton2,600,60,'../opcion2/index.html');
  boton3 = createButton('SOSTENER VARA');
  configurarBoton(boton3,990,60,'../opcion3/index.html');
}

function configurarBoton(boton, x, y, url) {
  boton.position(x, y);
  boton.size(150, 90);
  boton.style('border', '3px solid black');
  boton.style('font-size', '20px');
  boton.style('background', '#FFEEA9');
  boton.mousePressed(() => {
    audio.play();
    //verifica si "url" no esta vacia o tiene un valor null, si contiene ejecuta el if.
    if (url) {
      setTimeout(() => {
        window.location.href = url;
      }, 500);
    }
  });
}

function pantalla1(){
  let nuevoAncho = 700; // Nuevo ancho deseado para la imagen (en píxeles)
  let nuevoAlto = 900; // Nuevo alto deseado para la imagen (en píxeles)
  image(moises, 90, 120, nuevoAncho, nuevoAlto);
  multitud();
  let texto = "¡Bienvenido a 'Shalom Moisés'! te enfrentarás a decisiones cruciales que determinarán tu destino. Tres opciones se presentan ante ti: ¿levantar la vara con firmeza, sostenerla con sabiduría o usarla para golpear? Cada elección trae consigo consecuencias únicas que moldearán tu viaje a través de este emocionante mundo lleno de sorpresas y desafíos.";
  // Establecer propiedades del texto
  textSize(16); // Tamaño de la fuente
  let cuadroX = 280;
  let cuadroY = 590;
  let cuadroAncho = 800; // Ajusta el ancho según sea necesario
  let cuadroAlto = 118; // Ajusta el alto según sea necesario
  fill(255, 238, 169);
  rect(cuadroX, cuadroY, cuadroAncho, cuadroAlto);
  fill(1);
  text(texto, cuadroX + 10, cuadroY + 20, cuadroAncho - 20, cuadroAlto - 40);
}

function multitud(){
  let Ancho = 1000; // Nuevo ancho deseado para la imagen (en píxeles)
  let Alto = 900; // Nuevo alto deseado para la imagen (en píxeles)
  image(gente, -700, 350, Ancho, Alto);
  image(gente, -400, 350, Ancho, Alto);
  image(gente, -100, 350, Ancho, Alto);
  image(gente, 10, 350, Ancho, Alto);
  image(gente, 90, 350, Ancho, Alto);
  image(gente, 300, 350, Ancho, Alto);
  image(gente, 500, 350, Ancho, Alto);
  image(gente, 700, 350, Ancho, Alto);
  image(gente, 900, 350, Ancho, Alto);
}