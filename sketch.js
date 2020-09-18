const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
//user created


var engine,world;
//proper physics engine

var Box1,Box2,Ground1;

function setup() {

 var canvas= createCanvas(600,400);
    engine=Engine.create();
    world= engine.world;
    Box1=new Box(200,300,50,50);
    Box2=new Box(230,100,50,50);
    Ground1=new Ground(300,390,600,20); 
   
      
}

function draw() {
  background("black");  
  Engine.update(engine);

  Ground1.display();
  Box1.display();                                                                                           
  Box2.display();
 

  

  drawSprites();

}







