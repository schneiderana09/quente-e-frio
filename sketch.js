let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background("yellow"); // fundo de tela
 // circle(x,y,10)
  
  x = x + random(-2, 2)
  y = y + random(-2, 2)
  x = constrain(x,0,400)
  y = constrain(y,0,400)
  let distanciaX;
  let distanciaY;
  let distancia;
  distanciaX= mouseX - x;
  distanciaY= mouseY- y;
  distancia= dist(mouseX,mouseY,x,y); //funcao nativa para calcular distancia
  circle( mouseX,mouseY,distancia);
  
  dist(mouseX,mouseY,x,y)

  if(dist) 
  if(distancia<3) {
    text("Encontrei!", 200, 200);
    
   noLoop();
 }
  if(distancia>150){
 fill("blue")
  circle(mouseX,mouseY,distancia)
  } else if(distancia>100){ 
  fill("purple")
  circle(mouseX,mouseY,distancia)
  } else if(distancia>75){
    fill("orange")
    circle(mouseX,mouseY,distancia)
  } else if(distancia> 15){
     fill("red") 
    circle(mouseX,mouseY,distancia)
    }
  }
  