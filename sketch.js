
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1;
var rect2;
var rect3;

var paperball

var Ground1

function preload()
{
	
}

function setup() {
  var canvas=createCanvas(1250,650);
  
  engine = Engine.create();
  world = engine.world;
  
  rect1 = new Dustbin(1200,520,20,200);
  rect2 = new Dustbin(1000,520,20,200);
  rect3 = new Dustbin(1100,620,200,20);
  Ground1 = new Ground(width/2,630,width,20)
  paperball = new Paper(200,580,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Ground1.display();
  rect1.display();
  rect2.display();
  rect3.display();
  paperball.display();
  drawSprites();
 
}

 
 function keyPressed() {
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paperball.body,paperball.body.position,{x:50,y:-50});
     
   }
 }

