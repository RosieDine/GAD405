var size;

//Initialization function
function setup() {
	createCanvas(500, 500);
	//Drawing speed(30fps)
	frameRate(30);
	noStroke();
}

function draw() {
	//Create a random number for every frame
	size = random(200);
	//Call the customShape function
	customShape();
}

function customShape() {
	fill(random(255), 0, random(255), random(255));
	ellipse(random(500), random(500), size, size);

}
