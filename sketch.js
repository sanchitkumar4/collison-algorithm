var fixedRect,movingRect

function setup() {
  createCanvas(1200,900);
  fixedRect=createSprite(600, 200, 80, 80);
  fixedRect.shapeColor="red";
  movingRect=createSprite(800,700,90,90)
  movingRect.shapeColor="red";
}

function draw() {
  background(0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
   if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
   }
   else {
movingRect.shapeColor="red";
fixedRect.shapeColor="red";
   }
  drawSprites();
}