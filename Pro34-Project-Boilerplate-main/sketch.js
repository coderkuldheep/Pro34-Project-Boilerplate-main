
 //const Engine = Matter.Engine;
 //const World = Matter.World;
 //const Bodies = Matter.Bodies;
 // const Body = Matter.Body;

 var shooter;
 var ball;
 var basket;
 var bg_img;

 function preload (){
 bg_img = loadImage('court.png');
 }

 function setup() {
  createCanvas(400,400);

 // engine = Engine.create();
 // world = engine.world;
 
  
  //shooter = createSprite(100,150,20,20);
  //shooter.scale = 0.2;

  basket = createSprite(80,160,30,30);
  basket.scale = 0.3;
 }


function draw() 
{
  background('red');
  //  Engine.update(engine);
      
    drawSprites();
}

