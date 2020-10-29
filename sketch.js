const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backgroundImg,platform;
var engine, world;

var car1;
var platform;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;

    car1 = new Car(200,200,50,40,1);
    
    platform = new Ground(300,300,40,40);

     
}

function draw(){
    background(255,255,255);
    Engine.update(engine);


    car1.display();
    platform.display();
}

