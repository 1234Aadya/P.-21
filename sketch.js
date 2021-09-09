const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,leftWall,rightWall;
var world;
var radius=40;

function preload()
{
	
}

function setup() {
createCanvas(windowWidth,windowHeight);

engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
var ball_options = {
	isStatic:false,
	density:0.2,
	restitution:0.3,
	friction:0

}
	
ball = Bodies.circle(200,350,12,ball_options);
World.add(world,ball);

ground = new Ground(width/2,600,width,20);
leftWall = new Ground(1000,600,20,120);
rightWall = new Ground(1400,600,20,120);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius);
  ground.display();
  leftWall.display();
  rightWall.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}

