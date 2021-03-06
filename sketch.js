const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground;
var ball;

function setup() {
  
 var canvas= createCanvas(400,400);
 engine=Engine.create()
 world=engine.world
 var options={isStatic:true}
 ground=Bodies.rectangle(200,390,400,20,options);
 World.add(world,ground)
 //console.log(object)
 //console.log(object.time)
//console.log(object.position.x)
//console.log(object.position.y)
var ball_options={restitution:1}
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball)
  
}

function draw() {
  background("skyblue");
  Engine.update(engine)  
 rectMode(CENTER);
 rect (ground.position.x,ground.position.y, 400, 20);
 ellipseMode(RADIUS);
 ellipse(ball.position.x, ball.position.y, 20,20);
  drawSprites();
}