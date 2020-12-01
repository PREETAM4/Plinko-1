const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plinkos=[];
var particals=[];

function preload(){



}

function setup() {
	createCanvas(500, 400);
  

  engine = Engine.create();
	world = engine.world;

	ground=new Ground(240,400,900,20);
	stand1=new Dvision(5,350,10,200);
	stand2=new Dvision(100,350,10,200);
	stand3=new Dvision(200,350,10,200);
	stand4=new Dvision(300,350,10,200);
	stand5=new Dvision(400,350,10,200);
	stand6=new Dvision(495,350,10,200);

	
	for (var i =35; i <=width; i=i+50) {
		plinkos.push(new Plinko(i,75,10));
	}
	  
	for (var i = 10; i <=width-10; i=i+50) {
		plinkos.push(new Plinko(i,110,10));
	}
	  
	for (var i = 35; i <=width; i=i+50) {
		plinkos.push(new Plinko(i,145,10));
	}
	  
	 for (var i = 10; i <=width-10; i=i+50) {
		plinkos.push(new Plinko(i,180,10));
	 }
  
}

function draw() {
  background("black");
  textSize(17);
  fill("lime");
  text("Press Space To Drop The Particle",240,35);
  

  Engine.update(engine);

 
  ground.display();
  fill("brown");
  stand1.display();
  fill("brown");
  stand2.display();
  fill("brown");
  stand3.display();
  fill("brown");
  stand4.display();
  fill("brown");
  stand5.display();
  fill("brown");
  stand6.display();
  fill("brown");
  

  for(var i=0;i<plinkos.length;i++){
	plinkos[i].display();
	}
	for(var t=0;t<particals.length;t++){
	particals[t].display();
	}
	
  drawSprites();
}

function keyPressed(){
if(keyCode === 32){
	particals.push(new Particals(random(width/2-175,width/2+175),10,10))	
}
}
