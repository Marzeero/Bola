const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var btn1,btn2;

var primary, secondary, terceira;
var ground;
var left;
var right;
var top_wall;
var ball;
var options;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution : 0.95
  }


  var options = {
	isStatic:true
  }


  btn1 = createImg("push.png");
  btn1.position(50, 30);
  btn1.size(90,90);
  btn1.mousePressed(hforce)



  primary = Bodies.rectangle(420, 350, 15, 70,options)
  World.add(world,primary);


  secondary = Bodies.rectangle(550, 335, 15, 100,options)
  World.add(world,secondary);



  terceira = Bodies.rectangle(720, 319, 15, 140,options)
  World.add(world,terceira);
  
  ball = Bodies.circle(200,100,24,ball_options)
  World.add(world,ball);

  ground =new Ground(400,390,800,20);
  right = new Ground(790,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(400,10,800,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y, 24);
  rect(primary.position.x,primary.position.y, 15, 70)
  rect(secondary.position.x,secondary.position.y,15, 100)
  rect(terceira.position.x,terceira.position.y, 15, 140)
  


}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0})
}
