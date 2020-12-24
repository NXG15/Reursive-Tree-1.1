let theta;

function setup() {
  createCanvas(1110,400);
}

function draw() {
  //WINTER
  background(194, 219, 237);
  frameRate(30);
  
  //tree lines
  stroke(0);

  //angles
  let angle = (mouseX*60/width)*90;
  theta = radians(angle);
  
  //SPRING
  if(mouseX >= width/4){
    background(0, 183, 255);
    stroke(43, 138, 57);
  }

  //SUMMER
   if(mouseX>= (width/4)*2){
    background(0, 183, 255);
    stroke(19, 107, 32);
    
  }

  //FALL
   if(mouseX >= width * 0.75){
    background(105, 229, 245);
    stroke(196, 127, 29);
    
  }

  //beginning of tree
  translate(width/2,height);
  line(0,0,0,-120);
  translate(0,-120);

  //branching
  branch(120);
}

function branch(h){
  //each branch will be 2/3 size of prev one
  h *= 0.66;

  //if length of the branch is greater than 2 pixels
  if(h>2){
    push(); //save where we are
    rotate(theta);
    
    //drawing the branch
    line(0,0,0,-h);
    translate(0,-h);

    //call function to draw 2 branches 
    branch(h);
    pop();

    //Left branch
    push();
    rotate(-theta);

    //draw the left branch
    line(0,0,0,-h);
    translate(0,-h);

    //call draw again
    branch(h);
    pop();
  }
}