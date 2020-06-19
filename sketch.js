const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var engine, world;
var ground1,circle1;
var rectangle1,rectangle2,circle2;
var circle3;



function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
rectangle2=new Rectanglesay(600,290,70,70)
circle2=new Circleme(750,240,50)

circle3=new Circlet(650,190,80)

ground1 = new Ground(600,height,1200,20);

circle1 = new Circle(750,340,50);
rectangle1= new Rectangle(600,370,70,70);
}













function draw() {
  background(255,255,255);  
  circle1.display();
  rectangle1.display();
   ground1.display();
   circle2.display();
   rectangle2.display();
   circle3.display();
}
