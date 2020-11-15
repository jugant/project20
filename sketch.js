var car,wall;
var speed,Weight;

function setup() {
  createCanvas(1600,400);
   speed=random(55,90);
   Weight=random(400,1500);

   car=createSprite(200,200,50,50);
   wall=createSprite(1300,200,20,height/2);
 
   car.velocityX = speed;

   speed=random(55,150);
   Weight=random(400,1500);

   //car.shapeColor=color(255);
}

function draw() {
   background(0);
   if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=(0.5  * Weight *speed* speed)/22509;

    if(deformation>180){
      car.shapeColor=color("red");
      wall.shapecolor=color("white");
    }

    
     if(deformation>80 && deformation<180){
     car.shapeColor=color("yellow");
      wall.shapeColor=color("white");
   }

    if(deformation<80)
    {
      car.shapeColor=color("green");
      wall.shapeColor=color("white");
      
    }


}
 drawSprites();
}
