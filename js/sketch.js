const canvasHeight = 500;
const canvasWidth = 1000;

var ballX = canvasWidth / 2;
var ballY = canvasHeight / 2;

var ballSize = 30;

var strokeColor = 'black';
var ballColor = 'white';
//współrzędne paletki gracza pierwszego
var paddlePX = 50;
var paddlePY = 180;
//współrzędne paletki gracza drugiego
var paddlePTX = 930;
var paddlePTY = 180;
//wysokosc paletki
paddleHeight = 140;
//szerokosc paletki
paddleWidth = 20;
//szybkosc piłki
ballSpeedX = -4;
ballSpeedY = -4;
//wielkość linii środkowych
const lineWidth = 6;
const lineHeight = 20;
//prędkoś poruszania się paletek
var paddleSpeed = 10;

function setup(){
  frameRate(60);
  createCanvas(canvasWidth, canvasHeight);
};
function draw(){
  background('gray');
  lines();
  ball();
  paddleOne();
  paddleTwo();
  move();
};

function ball(){
  ellipse(ballX, ballY, ballSize, ballSize);
  fill(ballColor);
  stroke(strokeColor);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if(ballY - 15 < 0){
    ballSpeedY = -ballSpeedY;
  }
  if(ballY + 15 > canvasHeight){
    ballSpeedY = -ballSpeedY;
  }
  if(ballX - 10 < 0){
    ballSpeedX = -ballSpeedX;
  }
  if(ballX + 10 > canvasWidth){
    ballSpeedX = -ballSpeedX;
  }
};

function paddleOne(){
  rect(paddlePX, paddlePY, paddleWidth, paddleHeight, 20);
  if(paddlePY >= canvasHeight - paddleHeight){
    paddlePY = canvasHeight - paddleHeight
  }
  if(paddlePY <= 0){
    paddlePY = 0
  }
};
function paddleTwo(){
  rect(paddlePTX, paddlePTY, paddleWidth, paddleHeight, 20);
  if(paddlePTY >= canvasHeight - paddleHeight){
    paddlePTY = canvasHeight - paddleHeight
  }
  if(paddlePTY <= 0){
    paddlePTY = 0
  }
};

function lines(){
  for (
    var linePosition = 20;
    linePosition < canvasHeight;
    linePosition += 2 * lineHeight
  ) {
    rect(canvasWidth / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);
  }
};

function move(){
  if(keyIsDown(38)){
    paddlePTY = paddlePTY - paddleSpeed;
  }
  if(keyIsDown(40)){
    paddlePTY = paddlePTY + paddleSpeed;
  }
  if(keyIsDown(87)){
    paddlePY = paddlePY - paddleSpeed;
  }
  if(keyIsDown(83)){
    paddlePY = paddlePY + paddleSpeed;
  }
};
