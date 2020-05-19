const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbin1,dustbin2;
var ground;
var paper;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;


	dustbin1 =new Dustbin(790,225,280,PI/2);

	dustbin2 =new Dustbin(1080,225,280,PI/2);

	paper =new Paper(200,200);

	ground=new Ground(600,380,1200,20);

	
	
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

	ground.display();

	dustbin1.display();

	dustbin2.display();

	paper.display();

	

	

  drawSprites();
 
}
function keyPressed() {
    if (keyCode === 38){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85} );
		console.log(60);
    
    }
  }


