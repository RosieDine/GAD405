let tileSize = 50;

function setup() {
	createCanvas(500, 500); //Use this function to define the size of the output window
	stroke(255);

}

function draw() {
	background(0); //Set the background colour to black(0).

	//These 3 variables hold the mapped values from the mouse position
	var mouse1 = map(mouseY, 0, height, 0, 255);
	var mouse2 = map(mouseX, 0, width, 0, 255);
	var mouse3 = map(mouseY, 0, width, 255, 0);

	//Four different values are created. The alpha channel is controlled by the mouse
	//variabes made before. (Variable colour spelling can be English, but the colour
	//syntax with arguments need to have American spelling to work

	var colour1 = color(255, 37, 54);
	var colour2 = color(36, 194, 203, mouse1);
	var colour3 = color(36, 194, 203, mouse2);
	var colour4 = color(239, 100, 46, mouse3);

	//The nested for-loop creates the grid, and according to the position of the mouse,
	//the fill colour of the shape will be different

	for (let y = 0; y < height; y += tileSize) {
		for (let x = 0; x < width; x += tileSize) {


			//Create a conditional statment that will check the coordinates of the mouse
			//in relation to the position of the shapes on the grid, and according to this
			//a colour value will be selected

			if (mouseX > x && mouseX < x + tileSize && mouseY > y && mouseY < y + tileSize) fill(colour1);
			else if (mouseX > x && mouseX < x + tileSize) fill(colour2);
			else if (mouseY > y && mouseY < y + tileSize) fill(colour3);
			else fill(colour4);
			rect(x, y, tileSize, tileSize);

		}
	}
}
