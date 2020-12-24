const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3;
var boy;
var tree;
var stone;
var slingShot;

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	
	tree = new Tree(1000,200,450,450); 

	boy = new Boy(400,350,200,200);
	
  stone = new Stone(340,300,60);

	mango1 = new Mango(900,100,30);
	mango2 = new Mango(950,100,30);
	mango3 = new Mango(1000,125,30);

  slingShot = new SlingShot(stone.body,{x:340,y:300});
}


function draw() {
  Engine.update(engine);
  background("255");
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  slingShot.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);

}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
function detectcollision(st,mg){
mango1BodyPosition=mg.body.position
stoneBodyPosition=st.body.position

var distance=dist(mango1BodyPosition.x,mango1BodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y);
if((distance<= st.r + mg.r)){
Matter.Body.setStatic(mg.body,false);
}

}

