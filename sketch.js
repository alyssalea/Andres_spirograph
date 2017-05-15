function setup() {
  createCanvas (windowWidth,windowHeight)
  frameRate (30)
  background (34,56,78)
}

function windowResized(){
  resizeCanvas (windowWidth,windowHeight)
  background (34,56,78)
}

function draw() {
  fill (0,0,0,0)
  stroke (random (255), random(255), random(255))
  ellipsev()
  if (keyIsDown (DOWN_ARROW))
  rectv ();
}

 function keyIsDown() {
  if(keyCode === DOWN_ARROW) {
    rectv();
  }
}

function ellipsev(){
  ellipse(width/2,height/2,random (width), random (height))
}

function rectv(){
  rectMode(CENTER);
  rect(width/2,height/2,random (width), random (height))
  
}

