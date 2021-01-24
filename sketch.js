const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world
var ground
var stone, stoneIMG
var cityIMG
var sling
var ground1, ground2
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15

function preload(){
    stoneIMG=loadImage("stone.png")
    cityIMG=loadImage("city.jpg")
}

function setup(){
createCanvas(1200,600)

engine= Engine.create();
world= engine.world;
stone=Bodies.circle(380,250,40,{density:1.2})
World.add(world,stone)
sling=new Slingshot(this.stone,{x:440,y:145})
ground= new Ground(600,580,1200,20)
ground1= new Ground(250,360,20,430)
ground2= new Ground(340,145,200,20)

box1= new Box(650,570,70,70)
box2= new Box(720,570,70,70)
box3= new Box(790,570,70,70)

box4= new Box(650,500,70,70)
box5= new Box(720,500,70,70)
box6= new Box(790,500,70,70)

box7= new Box(650,430,70,70)
box8= new Box(720,430,70,70)
box9= new Box(790,430,70,70)

box10= new Box(650,360,70,70)
box11= new Box(720,360,70,70)
box12= new Box(790,360,70,70)

box13= new Box(650,290,70,70)
box14= new Box(720,290,70,70)
box15= new Box(790,290,70,70)
}



function draw(){
    background(cityIMG)
    Engine.update(engine)
    ground.display();
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    sling.display();
    imageMode(CENTER)
    image(stoneIMG,stone.position.x,stone.position.y,40,40)



}

function mouseDragged(){
    Matter.Body.setPosition(this.stone,{x:mouseX,y:mouseY})
}
