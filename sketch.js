var paper1;
var dustbin1, dustbin2, dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   paper1 = new Paper(100, 581, 15);

   dustbin1 = new Dustbin(700, 590, 100, 10);
   dustbin2 = new Dustbin(750, 550, 10, 100);
   dustbin3 = new Dustbin(650, 550, 10, 100);

  ground = new Ground(400, 600, 820, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  ground.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:36,y:-36})
}
}
