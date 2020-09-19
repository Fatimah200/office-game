
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1,dust2,dust3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1= new Dustbin(400,400,200,20);
	box2= new Dustbin(300,400,20,200);
	box3= new Dustbin(500,400,20,200);

	paper=new Paper(200,200,50);
	
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

dust1.display();
dust2.display();
dust3.display();

paper.display();

  
  drawSprites();
 
}



