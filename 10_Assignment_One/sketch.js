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

var cells = []; //This array is a list of data. In this case, "cells". It is identified by an index number representing its position.

function setup() { //Initalisation function
  createCanvas(541, 841); //Sets the size of the rendering window
	cells.push(new Cell()); //Cell (capitalised) is the name of the constructor function that makes cell objects
  cells.push(new Cell()); //Cells (plural) is the array holding a list of cell objects.
}

function draw() { //Rendering function
  background(80);
	for (var i = 0; i < cells.length; i++) {
		cells[i].move();
		cells[i].show();
	}
}

function mousePressed() { //Global event that detects if the user has pressed the mouse
	for (var i = cells.length-1; i >= 0; i--) {
		if (cells[i].clicked(mouseX, mouseY)) {
			cells.push(cells[i].mitosis());
			cells.push(cells[i].mitosis());
			//If the cells are clicked on, code will make two new cells from the mitosis function
			//console.log("CLICKED");
			cells.splice(i, 1); //The moment the [i] cell is clicked, it will be deleted and break down into two new cells
		}
	}
}

function Cell(pos, r, c)  { //This particular constructor function represents a cell object

	if (pos) {
		this.pos = pos.copy();
	} else {
		this.pos = createVector(random(width), random(height));
	}

	this.r = r || 60; //Radius
	this.c = c || color(random(100, 255), 0, random(100, 255)); //Colour of the cell

	this.clicked = function(x, y) {
		var d = dist(this.pos.x, this.pos.y, x, y);
		if (d < this.r) { //If the distance is less than the radius, then the cell has been clicked
				return true;
				} else {
				return false;
		}
	}

	this.mitosis = function () { //This function will help with the act of splitting the cells
		this.pos.x += random(-this.r, this.r); //Before the new cell is made, the position will be altered randomly based on the radius variable
		var cell = new Cell(this.pos, this.r*0.8, this.c); //A new cell will be made at a specific position, with radius multiplied by 0.8 and the variable assigned colour
		return cell;
	}

	this.move = function() { //This function will allow the cells to 'shake' in the rendering window
		var vel = p5.Vector.random2D();
		this.pos.add(vel);
	}

	this.show = function() {
		noStroke(); //There will be no outline around the shape
		fill(this.c);
		ellipse(this.pos.x, this.pos.y, this.r, this.r)

			}
		}
