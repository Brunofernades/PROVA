var tela = 0;
var imagemfundo;
var fotoprogramador;
var fotoprogramador2;
//////////matrizes
var imgCartas = [];
var matrizimgcartas = [];
var matrizcartasviradas=[];
var Matrizmat=[];
var matrizvalores=[];
var valorescartas=[];
var lincolanterior=[];



var versocarta;
var cartaVirada;
////////////////////////////////////
var largurabotao = 200
var xmin = 110
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
/////////////////////////////////// 

var posinicialx = 400
var posinicialy = 110
var imgalturacarta = 210
var imglarguracarta = 210
var contapertadas = 0
var contador = 0


function preload() {
imagemfundo = loadImage("s12.jpg");
fotoprogramador = loadImage("bruno.jpeg");
fotoprogramador2 = loadImage("teo.jpg");
/*img1 = loadImage("carta1.jpg");*/
versocarta = loadImage("costadascartas.png");
fonte=loadFont("fonte.otf");
  for(i=1; i<=6; i++){
  tempImg=loadImage("imagens/cartas/"+i+".png");
  imgCartas.push(tempImg);
  valorescartas.push(i);
  tempImg=loadImage("imagens/cartas/"+i+".1.png");
  imgCartas.push(tempImg);
  valorescartas.push(i);
}
/////////////// definir a coluna l e a linha c
cont=0;
for (l=0; l<3; l++){
  tempImgLinha = [];
  tempvcartavirada=[];
  tempvvalor=[];
  tempvmatch=[];
  for(c=0; c<4; c++){
    tempImgLinha [c] = imgCartas[cont];
    tempvvalor[c] = valorescartas[cont];
    tempvcartavirada[c] = false;
    tempvmatch[c] = false;
    cont++;
  }
  matrizcartasviradas[l]=tempvcartavirada;
matrizimgcartas[l] = tempImgLinha;
matrizvalores[l]=tempvvalor;
Matrizmat[l]=tempvmatch;
  }

}


function setup() {
  createCanvas(1366, 768);
cartaVirada = true
/*console.log(matrizcartasviradas);
console.log(imgCartas.length);
console.log(Matrizmat);*/
}




function menu(){
  ///////////////////////////////////////
  //memoria nome do jogo 
  background(220)
  image(imagemfundo, 0, 0, 1366, 768)
  textFont(fonte)
  textSize(50);
  fill(30)
  text("JODO DA MEMORIA", 125, 115)
  //////////////////////////////////////////
  

  //botao iniciar
  fill(255,105,180)
  if (mouseX > xmin && mouseX < xmax && mouseY > ymin && mouseY < ymax ){
    fill(255,20,147);
   
    tela = 1
  }
    
  rect(xmin, ymin, largurabotao, alturabotao, 48);
    fill(0,0,0)
      text("Iniciar", 150, 195)
      /////////////////////////////
 // botao tutorial
 fill(255,105,180)
 if (mouseX > xmin && mouseX < xmax && mouseY > ymin2 && mouseY < ymax2 ){
   fill(255,20,147);
  
   tela = 3
 }
  rect(xmin, ymin2, largurabotao, alturabotao, 48);
    fill(0,0,0)//cor trexto
      text("Tutorial", 130, 265)
///////////////////////////////////
// botao Creditos
fill(255,105,180)
if (mouseX > xmin && mouseX < xmax && mouseY > ymin3 && mouseY < ymax3 ){
  fill(255,20,147);
 
  tela = 2
}
rect(xmin, ymin3, largurabotao, alturabotao, 48);
  fill(0,0,0)//cor trexto
    text("Creditos", 130, 337)
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
if (tela==1){
  jogotela()
}

}

function jogotela(){
  background(170)
  image(imagemfundo, 0, 0, 1366, 768)
   contador = 0

  fill(255,105,180)
  if (mouseX > xmin4 && mouseX < xmax4 && mouseY > ymin4 && mouseY < ymax4 ){
    fill(255,20,147);
   if (mouseIsPressed )
    tela = 0
  }
    
  rect(xmin4, ymin4, largurabotao, alturabotao, 48);
    fill(0,0,0)//cor trexto
      text("voltar", 70, 65)

    converterMouse(mouseX,mouseY);
    mostracartas();
}

function converterMouse(mx,my){
mx = mx - posinicialx;
my=my - posinicialy;
let posc = parseInt(mx/imglarguracarta);
let posl = parseInt(my/imgalturacarta);
console.log(posl+" "+posc);
poslc=[];
poslc[0]=posl;
poslc[1]=posc;
return poslc;


}

function mostracartas(){


 posx=posinicialx
 posy=posinicialy
for (l=0; l<3; l++){
   posx =posinicialx
    for(c=0; c<4; c++){
      if (matrizcartasviradas[l][c] || Matrizmat[l][c] ){
      image(matrizimgcartas[l][c],posx,posy,200,200,);
      }
      else{
        image(versocarta, posx, posy,200,200,);

      }
      posx=posx+imglarguracarta
    }
    posy=posy+imgalturacarta
}
}

function mouseClicked(){
  if (tela==0){
    if (mouseX > xmin && mouseX < xmax && mouseY > ymin && mouseY < ymax ){
      fill(255,20,147);
      tela = 1
    }
    if (mouseX > xmin && mouseX < xmax && mouseY > ymin3 && mouseY < ymax3 ){
      fill(255,20,147);
      tela = 2
    }
    if (mouseX > xmin && mouseX < xmax && mouseY > ymin2 && mouseY < ymax2 ){
      fill(255,20,147);
      tela = 3
    }

  }
  else{
    ///////////virar carta
    if(tela==1){
      lincol =converterMouse(mouseX,mouseY);
      console.log(lincol);
    matrizcartasviradas[lincol[0]][lincol[1]]=true;
    contapertadas = contapertadas + 1;
    console.log("cliques: "+contapertadas);
   
   
    if(contapertadas==2){
      if(matrizvalores[lincol[0]][lincol[1]] == matrizvalores[lincolanterior[0]][lincolanterior[1]]){
       console.log(Matrizmat)
        Matrizmat[lincol[0]][lincol[1]] = true;
        Matrizmat[lincolanterior[0]][lincolanterior[1]]=true;
      }

    }
      if(contapertadas>2){

          for(l=0; l<3; l++){
            for(c=0; c<4; c++){
              matrizcartasviradas[l][c]=false;
          
            }
          }
          matrizcartasviradas[lincol[0]][lincol[1]]=true;
          contapertadas=1
      }  
        if(contapertadas == 1){
            lincolanterior = lincol;

        }
    }
  }
}