function setup() {
	// Create the canvas
	createCanvas(720, 400);
	background(50);

	strokeWeight(3);
	//Draw Line (green to yellow)
	stroke(44, 200, 100);
	line(636, 359, 80, 359);
	//Draw Line (red to yellow)
	stroke(300, 10, 10);
	line(69, 70, 647, 330);
	//Draw Line (yellow to blue)
	stroke(300, 300, 50);
	line(677, 318, 677, 80);
	//Draw Line (green to blue)
	stroke(44, 200, 100);
	line(72, 334, 646, 68);
	//Draw Line (blue to red)
	stroke(20, 50, 200);
	line(81, 41, 636, 41);
	//Draw Line (red to green)
	stroke(300, 10, 10);
	line(41, 319, 41, 80);


	// Set colors (blue)
	fill(20, 50, 300, 200);
	stroke(20, 50, 200);
	// An ellipse
	ellipse(677, 41, 80, 80);

	// Set colors (yellow)
	fill(300, 300, 50, 200);
	stroke(300, 300, 50);
	// An ellipse
	ellipse(677, 359, 80, 80);

	// Set colors (red)
	fill(300, 10, 10, 200);
	stroke(300, 10, 10);
	// An ellipse
	ellipse(41, 41, 80, 80);


	// Set colors (green)
	fill(44, 250, 100, 200);
	stroke(44, 200, 100);
	// An ellipse
	ellipse(41, 359, 80, 80);




}
