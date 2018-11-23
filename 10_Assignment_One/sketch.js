//This array is a list of data. In this case, "cells". It is identified by an index number representing its position
var cells = [];

//Initalisation function
function setup() {
	//Sets the size of the rendering window
	createCanvas(541, 841);
	//Cell (capitalised) is the name of the constructor function that makes cell objects
	cells.push(new Cell());
	//Cells (plural) is the array holding a list of cell objects.
	cells.push(new Cell());
}
//Rendering function
function draw() {
	background(80);
	for (var i = 0; i < cells.length; i++) {
		cells[i].move();
		cells[i].show();
	}
}
//Global event that detects if the user has pressed the mouse
function mousePressed() {
	for (var i = cells.length - 1; i >= 0; i--) {
		if (cells[i].clicked(mouseX, mouseY)) {
			cells.push(cells[i].mitosis());
			cells.push(cells[i].mitosis());
			//If the cells are clicked on, code will make two new cells from the mitosis function
			//console.log("CLICKED");
			//The moment the [i] cell is clicked, it will be deleted and break down into specified new cells
			cells.splice(i, 0.5);
		}
	}
}
//This particular constructor function represents a cell object
function Cell(pos, r, c, dx, dy) {

	if (pos) {
		this.pos = pos.copy();
	} else {
		this.pos = createVector(random(width), random(height));
	}

	this.r = r || 100; //Radius of the cells
	//Colour of the cell
	this.c = c || color(random(100, 255), random(100, 255), random(100, 255));

    //These are the directional values for x and y
	this.dx = dx || random(-1, 1);
	this.dy = dy || random(-1, 1);

	this.clicked = function(x, y) {
		var d = dist(this.pos.x, this.pos.y, x, y);
		//If the distance is less than the radius, then the cell has been clicked
		if (d < this.r) {
			return true;
		} else {
			return false;
		}
	}
	//This function will help with the act of splitting the cells
	this.mitosis = function() {
		//Before the new cell is made, the position will be altered randomly based on the radius variable
		this.pos.x += random(-this.r, this.r);
		this.c = color(random(100, 255), random(100, 255), 0, random(100, 255));
		//A new cell will be made at a specific position, with radius multiplied by 0.8 and the variable assigned colour
		var cell = new Cell(this.pos, this.r * 0.8, this.c);
		return cell;
	}

	this.move = function() {
		this.pos.add(this.dx, this.dy);
		//The above code reverses the direction of the ellipses if they exceed the boundry of the width
		if (this.pos.x > width - this.r / 2) {
			this.dx = random(-1, -0.1);
		} else if (this.pos.x < 0 + this.r / 2) {
			this.dx = 1;
		}
		//The above code reverses the direction of the ellipses if they exceed the boundry of the height
		else if (this.pos.y > height - this.r / 2) {
			this.dy = random(-1, -0.1);
		} else if (this.pos.y < 0 + this.r / 2) {
			this.dy = +1;
		}
	}
	this.show = function() {
		//There will be no outline around the shape
		noStroke();
		fill(this.c);
		ellipse(this.pos.x, this.pos.y, this.r, this.r)
	}
}
