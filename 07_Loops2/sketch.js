//Size of rectangles
let size = 50

//Initialization function
function setup() {
	//Set the size of rendering window - pixels
	createCanvas(500, 500);
	//noloop();
}

//Rendering function
function draw() {
	fill(215, 200, 170)
	for (let x = 0; x < 10; x++) {
		for (let i = 0; i < 10; i++) {
			rect(size * x, size * i, size, size);
		}
	}
}
