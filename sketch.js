const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin1,dustbin2,dustbin3;

var groundSprite;
var dustbinSprite,dustbinImage
function preload()
{
	dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.4
    dustbinSprite=createSprite(610,600,200,213);
    dustbinSprite.addImage(dustbinImage);
    dustbinSprite.scale=0.55;
    groundSprite=new ground(400,680,800,10);
    paper1=new paper(100, 600,40);
  
    
	
    dustbin1=new dustbin(550, 625,5,100);
	dustbin2=new dustbin(610 , 660,100,5);
	dustbin3=new dustbin(670,625,5,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  groundSprite.display();

  paper1.display();
 
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
 
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body, paper1.body.position, {x:60,y:-60});
    }
}
    





