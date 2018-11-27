//Size of rectangles
let size = 50;

//Initialization function
function setup() {
	//Set the size of rendering window - pixels
	createCanvas(500, 500);
	//noloop();
	textSize(22);
	//textAllign(CENTER)
}

//Rendering function
function draw() {
	background(60);
	//Run nested loop for x, and y
	for (let y = 0; y < 10; y++) {
		for (let x = 0; x < 10; x++) {
			//Print results to console
			//Open Chrome > View > Developer > Javascript Console
			console.log("x: " + x + ", y: " + y)

			fill(225);
			text("Open the Developer > Javascript Console", 10, 100);
		}
	}

}
