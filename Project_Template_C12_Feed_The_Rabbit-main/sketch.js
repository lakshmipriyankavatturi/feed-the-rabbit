var garden,rabbit;
var gardenImg,rabbitImg;
var appleImage,leafImage,orangeLeafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
  orangeLeafImage = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
 
  createApples();
  createLeaves();
  createOrangeleaves();
 
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //creating continous fruits
  var select_sprite = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_sprite== 1) {
      leafImage();
    } else if (select_sprite == 2) {
      orangeLeafImage();
    } else if (select_sprite == 3) {
      appleImage();
    } 
  }  
  drawSprites();
}

function createApples() {
  var red = createSprite(random(100,5000),40,10,10)
  red.addImage(appleImage);
  red.velocityY = 4;
  red.lifetime = 200;
  red.scale = 0.1;
}
function createLeaves() {
  var green = createSprite(random(100,3000),40,10,10)
  green.addImage(leafImage);
  green.velocityY = 4;
  green.lifetime = 200;
  green.scale = 0.1;
}
function createOrangeleaves() {
  var orange = createSprite(random(100,4000),40,10,10)
  orange.addImage(orangeLeafImage);
  orange.velocityY = 4;
  orange.lifetime = 200;
  orange.scale = 0.1;
}





