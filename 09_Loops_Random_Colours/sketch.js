//Size of large rectangles
let size = 50

//Initialization function
function setup() {
	//Set the size of rendering window - pixels
	createCanvas(500, 500);
	//noloop();

	//Set up the frame rate (frames per second)
	//Default is 60 fps
	frameRate(3)
}

//Rendering function
function draw() {

	//Background colour, grid lines
	stroke(0);
	strokeWeight(1);

	//Size of grid canvas
	for (let x = 0; x < 10; x++) {
		for (let i = 0; i < 10; i++) {
			fill(215, 200, 170);
			rect(size * x, size * i, size, size);

			//Random colour (animated by framerate)
			fill(random(225), random(225), random(225));
			rect(size * x + 12.5, size * i + 12.5, size / 2, size / 2);


		}
	}
}
