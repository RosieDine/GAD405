//let r = 255;
//let g = 255;
//let b = 255;
//var size;

//Initalisation function
//function setup(){
//Set the size of rendering window - pixels
//createCanvas(594, 841);
//stroke(0);

//Rendering function
//function draw(){
//if (mouseIsPressed) {
//r = random(255);
//g = random(255);
//b = random(255);
  //size = random(300);

  //fill(r, g, b);
  //Display the ellipses
  //ellipse(mouseX, mouseY, size, size);

//  }
//}
var cells = [];

//Initalisation function
function setup() {
    //This sets the size of the rendering window
  createCanvas(594, 841);
  //Cell (capitalised) is the name of the constructor function that makes cell objects
  //Cells (plural) is the array holding a list of cell objects.
  cells.push(new Cell());
}

//Rendering function
function draw() {
  background(0);
  for (var i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();
  }
}
//Global event that detects if the user has pressed the mouse
function mousePressed(){
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].clicked(mouseX, mouseY)) {

    }
  }

//This particular constructor function represents a cell object
function cell() {
  //createVector stores the objects position (with random height and width)
  this.pos = createVector(random(width), random(height));
  //When the cells split, the input number will be their radius
  this.r = 80;
  //This is the colour of the cell
  this.c = colour(random(100, 255), 0, random(100, 255));

  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }

  }

  //This will allow the cells to move around the screen with a random varaible
  //(named velocity) value
  this.move = function() {
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
  }

  this.show = function() {
    //There will be no outline around the shape
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.pos.r, this.pos.r)
    }
  }
}
