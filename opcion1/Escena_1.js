let moises;
let marAbierto;
let multitud;
let y; 
let marCerrado;
let fondo;
let pulgar;
let MoisesDesa = false; 
let audioF;

function preload() {
  audioF= createAudio('../audio/titanic.mp3');
  moises = loadImage('../Media_ChavezFernanda/moisesvara.png');
  multitud = loadImage('../mediaBravoDelfina/multitud.png');
}

function setup() {
  createCanvas(1366, 768);
  marAbierto = loadImage('../mediaBravoDelfina/marabierto.png');
  marCerrado = loadImage('../mediaBravoDelfina/marcerrado.png');
  pulgar = loadImage('../Media_ChavezFernanda/Pulgar_Arriba.gif');

  y = height; // Inicializa la posición y en la parte inferior del lienzo
  fondo = marAbierto; 
  TamañoImagenes()
}

function draw() {
  background(fondo);
  //El audio de fondo reproduciendose todo el tiempo.
  audioF.play();
  Caminan();
  FinalBueno();
}

function Caminan(){
  if (y >= -moises.height) { // Dibuja la imagen solo si aún no ha salido de la pantalla
    image(multitud, 250, y + 200); 
    image(multitud, 450, y + 200); 
    image(multitud, 250, y + 250); 
    image(multitud, 450, y + 250); 
    //SEPARADOR
    image(moises, 290, y - 130); 
    
    y -= 1; //decrementa la imagen haciendo que suba para arriba.
    
  } 
  else{
    //Cambia el fondo a Marcerrado y Mo
    fondo = marCerrado; // Cambia el fondo a marCerrado
    MoisesDesa= true; // Marca que Moisés ha desaparecido
  } 
}

function FinalBueno(){
   // Si Moisés ha desaparecido, dibuja el gif "PulgarArriba" y redirecciona a "Pantalla1"
  if (MoisesDesa){

    //imagen PulgarArriba
    image(pulgar, 350, 200); 

    //Texto "Final Bueno"
    textSize(32); 
    fill(1); 
    textAlign(CENTER); 
    text("FINAL BUENO", 650 ,600); 
  
    //que despues de 3,5 segundos redireccione a "pantalla1".
    setTimeout(()=>{window.location.href = '../pantalla_1/index.html';},3500); 
  }
}

function TamañoImagenes(){

  //Ancho y Alto de la imagen "Moises"
  let MAncho = moises.width * 1.2; 
  let MAlto = moises.height * 1.2;
  moises.resize(MAncho,MAlto);

  //Ancho y Alto de la imagenes "Multitud"
  let MuAncho = multitud.width * 1; 
  let MuAlto = multitud.height * 1; 
  multitud.resize(MuAncho, MuAlto);
}
