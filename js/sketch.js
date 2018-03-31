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

var leftscore = 0;
var rightscore = 0;

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
  score();
  gameOne();
  gameTwo();
};

function ball(){
  ellipse(ballX, ballY, ballSize, ballSize);
  fill(ballColor);
  stroke(strokeColor);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if(ballY - 15 < 0){
    ballSpeedY = -ballSpeedY;
    speedUp();
  }
  if(ballY + 15 > canvasHeight){
    ballSpeedY = -ballSpeedY;
    speedUp();
  }
  if (ballX <= 0) {
    ballX = canvasWidth / 2;
    ballY = canvasHeight / 2;

    rightscore++;

    plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    ballSpeedX = plusOrMinus * 4;
    plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    ballSpeedY = plusOrMinus * Math.round(Math.random() * 3 + 1);}
  if (ballX >= canvasWidth) {
    ballX = canvasWidth / 2;
    ballY = canvasHeight / 2;

    leftscore++;

    plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    ballSpeedX = plusOrMinus * 4;
    plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    ballSpeedY = plusOrMinus * Math.round(Math.random() * 3 + 1);}

  if (ballX <= paddlePX + paddleWidth + 10 && ballY <= paddlePY + paddleHeight + 10 && ballY >= paddlePY - 10) {
    ballSpeedX = -ballSpeedX;
    speedUp();
  }
  if (ballX >= paddlePTX - 10 && ballY <= paddlePTY + paddleHeight + 10 && ballY >= paddlePTY - 10) {
    ballSpeedX = -ballSpeedX;
    speedUp();
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

function speedUp() {
  //prędkość X
  if (ballSpeedX > 0 && ballSpeedX < 16) {
    ballSpeedX += .8;
  } else if (ballSpeedX < 0 && ballSpeedX > -16) {
    ballSpeedX -= .8;
  }
  //prędkośc Y
  if (ballSpeedY > 0 && ballSpeedY < 16) {
    ballSpeedY += .8;
  } else if (ballSpeedY < 0 && ballSpeedY > -16) {
    ballSpeedY -= .8;
  }
};
function score(){
  fill(255);
  textSize(80);
  stroke('black');
  text(leftscore, canvasWidth / 2 - 90, 100);
  text(rightscore, canvasWidth / 2 + 45, 100);
};

function gameOne(){
  if(leftscore >= 10){
    righscore = 0;
    leftscore = 0;
    ballSpeedX = 0;
    ballSpeedY = 0;
    ballSize = 0;
    fill('255');
    textSize(80);
    text('Koniec gry', canvasWidth / 2 - 180, canvasHeight / 2);
    textSize(30);
    text('Aby wznowić grę należy kliknąć klawisz [F5]', canvasWidth / 2 - 285, canvasHeight / 2 + 100);
  }
};
function gameTwo(){
  if(rightscore >= 10){
    righscore = 0;
    leftscore = 0;
    ballSpeedX = 0;
    ballSpeedY = 0;
    ballSize = 0;
    fill('');
    textSize(80);
    text('Koniec gry', canvasWidth / 2 - 180, canvasHeight / 2);
    textSize(30);
    text('Aby wznowić grę należy kliknąć klawisz [F5]', canvasWidth / 2 - 285, canvasHeight / 2 + 100);
  }
};
