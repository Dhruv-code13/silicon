var zombie1
var zombie1pre
var zombie2
var zombie2pre
var zombie3
var zombie3pre
var mappre
var map1
var player 
var playerpre
var pow
var powpre
var gun
var gunSound
var gamestate=0

function preload() {
  zombie1pre=loadImage("images/zombie1.png")
  zombie2pre=loadImage("images/zombie2.png")
  zombie3pre=loadImage("images/zombie3.png")
  mappre=loadImage("images/Black-Ops-4-Zombies.mp4_000082516-720x405.jpg")
  playerpre=loadImage("images/Capt Price.png")
  powpre=loadImage("images/pow.png")
  gunSound = loadSound("images/gun.mp3");

}
function setup() {

  createCanvas(displayWidth-20,displayHeight-20);
  console.log(height)
  map1=createSprite(width/2,height/2,width,height)
  map1.addImage(mappre)
  map1.scale=2.7
 player=createSprite(1700,500)
 player.addImage(playerpre)
 player.scale=2
zombieGroup=new Group()

 
}

function draw() {
  
  
if(frameCount%50==0){
  zombie1=createSprite(random(10,width-50),random(10,height-50),50,50)
  var r=Math.round(random(1,3))
  if(r==1){
    zombie1.addImage(zombie1pre)
    zombie1.velocityX=0.8
  }
  if(r==2){
    zombie1.addImage(zombie2pre)
    zombie1.velocityX=1
}
if(r==3){
  zombie1.addImage(zombie3pre)
  zombie1.velocityX=2.5
}
zombieGroup.add(zombie1)
  }
  for (var i = 0; i < zombieGroup.length; i++) {
    if(mousePressedOver(zombieGroup.get(i))){
    pow=createSprite(1500,350)
    pow.addImage(powpre)
    pow.lifetime=3
    pow.scale=0.3
    gunSound.play()
    zombieGroup.get(i).destroy();
    }
        
    }
 
  drawSprites();
}