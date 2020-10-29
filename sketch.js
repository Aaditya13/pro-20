var car,wall;
var speed,weight,wall,deformation;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50)
  speed=Math.round(random(55,90))
  weight=random(400,1500)
  car.velocityX=speed;
    wall=createSprite(1500,200,60,height/2)
}
function draw() {
  background(220);
  console.log(speed)
  if(car.isTouching(wall)){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(255,0,0) 
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}