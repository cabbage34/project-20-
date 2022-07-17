var bg_img , astronaut,sleep,brush,gym,eat,bath,move






function preload(){
bg_img = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
eat = loadAnimation("eat1.png","eat2.png");
bath = loadAnimation("bath1.png","bath2.png");
move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
 astronaut = createSprite(400, 200, 50, 50);
 astronaut.addAnimation("sleep",sleep);
 astronaut.scale = 0.1;

  
}

function draw() {
  background(bg_img);  
  textSize(20);
   fill("white")
   text("Instructions:",20, 35);
    textSize(15);
     text("Up Arrow = Brushing",20, 55);
      text("Down Arrow = Gymming",20, 70); 
      text("Left Arrow = Eating",20, 85);
       text("Right Arrow = Bathing",20, 100);
        text("m key = Moving",20, 115);

        edges = createEdgeSprites()
        astronaut.bounceOff(edges)

        if(keyDown("UP_ARROW")){
          astronaut.addAnimation("brushing",brush);
          astronaut.changeAnimation("brushing")
        }

        if(keyDown("DOWN_ARROW")){
          astronaut.addAnimation("gymming",gym);
          astronaut.changeAnimation("gymming")
        }

        if(keyDown("LEFT_ARROW")){
          astronaut.addAnimation("eating",eat);
          astronaut.changeAnimation("eating")
        }

        if(keyDown("RIGHT_ARROW")){
          astronaut.addAnimation("bathing",bath);
          astronaut.changeAnimation("bathing")
        }

    
  drawSprites();
}