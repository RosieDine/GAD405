var size;

//Initialization function
function setup() {
	createCanvas(500, 500);
	//Drawing speed(30fps)
	frameRate(20);
}

function draw() {
	//Call the customShape function
	customShape();
}

function customShape() {
	var size = random(200);
	var x = random(500);
	var y = random(500);

	//Circle shapes and their respective colour
	fill(255, 255, 255, 255);
	ellipse(x, y, size, size);
	fill(217, 224, 224);
	ellipse(x, y, size * 0.7, size * 0.7);
	fill(217, 224, 224);
	ellipse(x, y, size * 0.5, size * 0.5);
	fill(255, 20, 60);
	ellipse(x, y, size * 0.25, size * 0.25);
	fill(217, 220, 224);
	ellipse(x, y, size * 0.2, size * 0.2);

}
