var tela = 0;
var imagemfundo;
var fotoprogramador;
var fotoprogramador2;
////////////////////////////////////
var largurabotao = 200
var xmin = 237
var xmax = xmin + largurabotao
var ymin = 150
var alturabotao = 60
var ymax = ymin + alturabotao
//////////////////////////////////
//tutorial
var ymin2 = ymin + 70
var ymax2 = ymin2 + alturabotao
//////////////////////////////////
var ymin3 = ymin + 140
var ymax3 = ymin3 + alturabotao
//////////////////////////////////
var ymin4 = 20
var ymax4 = ymin4 + alturabotao
var xmax4 = 220
var xmin4 = 20

function preload() {
imagemfundo = loadImage("s12.jpg")
fotoprogramador = loadImage("bruno.jpeg")
fotoprogramador2 = loadImage("teo.jpg")

fonte=loadFont("fonte.otf")
}
function setup() {
  createCanvas(1366, 768);
}

function menu(){
  ///////////////////////////////////////
  //memoria nome do jogo 
  background(220)
  image(imagemfundo, 0, 0, 1366, 768)
  textFont(fonte)
  textSize(50);
  fill(230)
  text("MEMORIA", 245, 115)
  //////////////////////////////////////////
  

  //botao iniciar
  fill(255,105,180)
  if (mouseX > xmin && mouseX < xmax && mouseY > ymin && mouseY < ymax ){
    fill(255,20,147);
   if (mouseIsPressed )
    tela = 1
  }
    
  rect(xmin, ymin, largurabotao, alturabotao, 48);
    fill(0,0,0)//cor trexto
      text("Iniciar", 270, 195)
      /////////////////////////////
 // botao tutorial
 fill(255,105,180)
 if (mouseX > xmin && mouseX < xmax && mouseY > ymin2 && mouseY < ymax2 ){
   fill(255,20,147);
  if (mouseIsPressed )
   tela = 3
 }
  rect(xmin, ymin2, largurabotao, alturabotao, 48);
    fill(0,0,0)//cor trexto
      text("Tutorial", 260, 265)
///////////////////////////////////
// botao Creditos
fill(255,105,180)
if (mouseX > xmin && mouseX < xmax && mouseY > ymin3 && mouseY < ymax3 ){
  fill(255,20,147);
 if (mouseIsPressed )
  tela = 2
}
rect(xmin, ymin3, largurabotao, alturabotao, 48);
  fill(0,0,0)//cor trexto
    text("Creditos", 260, 337)
///////////////////////////////////
}
function aCreditos(){
  background(170)
  image(imagemfundo, 0, 0, 1366, 768)
  image(fotoprogramador, 200, 150, 150, 190)
  image(fotoprogramador2, 900, 150, 150, 190)
  fill(12)
  textSize(80)
  text("Creditos", 590, 70)
  textSize(40)
  text("Bruno Fernandes Celestino da Silva", 40, 400)
  textSize(40)
  text("Função: Programador", 40, 450)
  textSize(40)
  text("Graduando:", 40, 500)
  textSize(40)
  text("Ciência e tecnologia(UFRN)", 40, 550)
  text("Teofilo Lopes da Silva Neto", 800, 400)
  textSize(40)
  text("Função: Programador", 800, 450)
  textSize(40)
  text("Graduando:", 800, 500)
  textSize(40)
  text("Ciência e tecnologia(UFRN)", 800, 550)
  fill(255,105,180)
  if (mouseX > xmin4 && mouseX < xmax4 && mouseY > ymin4 && mouseY < ymax4 ){
    fill(255,20,147);
   if (mouseIsPressed )
    tela = 0
  }
    
  rect(xmin4, ymin4, largurabotao, alturabotao, 48);
    fill(0,0,0)//cor trexto
      text("voltar", 70, 65)

}

function atutorial(){
  background(170)
  image(imagemfundo, 0, 0, 1366, 768)
  fill(12)
  textSize(80)
  text("tutorial", 590, 70)
    textSize(40)
    text("A jogada é quando um jogador vira duas cartas e coloca-as para cima,", 70, 200)
    textSize(40)
    text("para que todos os jogadores podem ver. Se o jogador virar duas cartas", 70, 250)
    textSize(40)
    text("que não correspondem, ambos as cartas serão virados para baixo", 70, 300)
    textSize(40)
    text("novamente no mesmo local.", 70, 350)
    fill(255,105,180)
  if (mouseX > xmin4 && mouseX < xmax4 && mouseY > ymin4 && mouseY < ymax4 ){
    fill(255,20,147);
   if (mouseIsPressed )
    tela = 0
  }
    
  rect(xmin4, ymin4, largurabotao, alturabotao, 48);
    fill(0,0,0)//cor trexto
      text("voltar", 70, 65)
}

function draw() {
 if(tela==0){
   menu(); 
}
if(tela==2){
  aCreditos();
}

if (tela==3){
  atutorial()
}

}
