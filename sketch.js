var bgImage, bg, obstaclesGroup, obstacleImage, coinGroup, coinImage;
var player, player_running, ground;
var score = 0;

function preload(){
bgImage = loadImage("images/Imported piskel.gif");
obstacleImage = loadImage("images/hurdle.png");
coinImage = loadImage("images/medal.png");
player_running = loadAnimation("images/runnerboy.png", "images/runnerboy-1.png", "images/runnerboy-3.png", "images/runnerboy-2.png");
}

function setup(){
var canvas = createCanvas(800, 400);

bg = createSprite(500,200,800,400);
bg.addImage(bgImage);
bg.scale = 3.7;
bg.x=bg.width/2;
bg.velocityX=-4;

player = createSprite(100, 320, 100, 100);
player.addAnimation("running",player_running);

ground = createSprite(100,400,800,40);
ground.visible = false;

obstacles = new Group();

score = 0;
}

function draw(){
background(0);
stroke(0);
fill(0);
text("Score: "+ score, 400,200);

if(bg.x<200){
    bg.x=bg.width/2; 
  }
  score = score + Math.round(getFrameRate()/60);

  if (keyDown("space") && player.y > 275){
    player.velocityY = -17;
  }
  if (keyDown("UP_ARROW") && player.y > 275){
    player.velocityY = -17;
  }
  player.velocityY = player.velocityY + 0.8;

  player.collide(ground);

  spawnObstacles();
drawSprites();
}

function spawnObstacles(){
  if (frameCount % 120 === 0) {
    var hurdle = createSprite(800,320,100,100);
    hurdle.addImage(obstacleImage);
    hurdle.scale = 0.25;
    hurdle.velocityX = -8;
  }
}

function spawnCoins(){
  if (frameCount % 100 === 0) {
    var coin = createSprite(800,120,100,100);
    coin.y = Math.round(random(80,120));
    coin.addImage(coinImage);
    coin.scale = 1;
    coin.velocityX = -8;
  }
}

