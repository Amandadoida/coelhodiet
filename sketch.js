const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var linguica;
var natura;
let engine;
let world;
var grandechurrasco; 
var ground;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(200, 690, 600, 20);
linguica=new Rope(6,{x:245,y:30});

var options={
  density:0.001
}
natura=Bodies.circle(300,300,15,options);
Matter.Composite.add(linguica.body,natura);

grandechurrasco=new Grandechurrasco(linguica,natura)


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(natura.position.x,natura.position.y,15,15);
  


  ground.show();
  linguica.show();
}




