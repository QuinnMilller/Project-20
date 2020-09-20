var car, wall;
var speed, weight;
var car2, wall2;
var car3, wall3;
var car4, wall4;
var speed2, weight2;
var speed3, weight3;
var speed4, weight4;

function setup() {
  createCanvas(1600,1000);
  speed=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);
  weight=random(400,1500);
  weight2=random(400,1500);
  weight3=random(400,1500);
  weight4=random(400,1500);
  car=createSprite(50,200,50,50);
  car2=createSprite(50,400,50,50);
  car3=createSprite(50,600,50,50);
  car4=createSprite(50,800,50,50);
  wall=createSprite(1500,200,60,100);
  wall.shapeColor="white";
  wall2=createSprite(1500,400,60,100);
  wall2.shapeColor="white";
  wall3=createSprite(1500,600,60,100);
  wall3.shapeColor="white";
  wall4=createSprite(1500,800,60,100);
  wall4.shapeColor="white";
  car.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;
  
  
}

function draw() {
  background("black");  
  
  if (wall.x-car.x < (car.width+wall.width)/2)
    {
      car.velocityX=0;
      var defor = 0.5*weight*speed*speed/25000;
      if(defor<100)
      {
        car.shapeColor="green";
      }
      if(defor>=100&&defor<180)
      {
        car.shapeColor="yellow";
      }
      if(defor>=180)
      {
        car.shapeColor="red";
      }
    }
    if (wall2.x-car2.x < (car2.width+wall2.width)/2)
    {
      car2.velocityX=0;
      var defor2 = 0.5*weight2*speed2*speed2/25000;
      if(defor2<100)
      {
        car2.shapeColor="green";
      }
      if(defor2>=100&&defor2<180)
      {
        car2.shapeColor="yellow";
      }
      if(defor2>=180)
      {
        car2.shapeColor="red";
      }
    }
    if (wall3.x-car3.x < (car3.width+wall3.width)/2)
    {
      car3.velocityX=0;
      var defor3 = 0.5*weight3*speed3*speed3/25000;
      if(defor3<100)
      {
        car3.shapeColor="green";
      }
      if(defor3>=100&&defor<180)
      {
        car3.shapeColor="yellow";
      }
      if(defor3>=180)
      {
        car3.shapeColor="red";
      }
    }
    if (wall4.x-car4.x < (car4.width+wall4.width)/2)
    {
      car4.velocityX=0;
      var defor4 = 0.5*weight4*speed4*speed4/25000;
      if(defor4<100)
      {
        car4.shapeColor="green";
      }
      if(defor4>=100&&defor<180)
      {
        car4.shapeColor="yellow";
      }
      if(defor4>=180)
      {
        car4.shapeColor="red";
      }
    }
    if (keyDown("r"))
    {
      car.x = 50;
      car2.x = 50;
      car3.x = 50;
      car4.x = 50;
      car.velocityX = speed;
      car2.velocityX = speed2;
      car3.velocityX = speed3;
      car4.velocityX = speed4;
      car.shapeColor="gray";
      car2.shapeColor="gray";
      car3.shapeColor="gray";
      car4.shapeColor="gray";
      speed=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);
  weight=random(400,1500);
  weight2=random(400,1500);
  weight3=random(400,1500);
  weight4=random(400,1500);
    }
  drawSprites();
}