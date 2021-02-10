
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1 = new Bob(300,350,50,50)
   bob2 = new Bob(350,350,50,50)
   bob3 = new Bob(400,350,50,50)
   bob4 = new Bob(450,350,50,50)
   bob5 = new Bob(500,350,50,50)

   ground = new frames(400,700,800,20)
   topwall = new frames(400,200,260,10)

   bound1 = new binds(bob1.body,topwall.body,-bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  topwall.display();
  bound1.display();
  drawSprites();
 
}



