//Initialisation function
function setup(){
createCanvas(500, 500);

}
//Rendering function
function draw(){
//Background colour
background(0); //Set the background colour to black(0).

//Map function
//This re-maps a number from one range to another
var BlueMap = map(mouseX, 0, width, 0, 255);
var RedMap = map(mouseY, 0, height, 0, 255);
var YellowMap = map(mouseX, 0, width, 255, 0);
var GreenMap = map(mouseY, 0, height, 0, 255);


//Rectangle colour (Blue)
fill(0, 0, 255, BlueMap);
//A rectangle and positon
rect(0, 0, 250, 250);

//Rectangle colour (Red)
fill(255, 0, 0, RedMap);
//A rectangle and position
rect(250, 0, 250, 250);

//Rectangle colour (Yellow)
fill(255, 255, 0, YellowMap);
//A rectangle and postion
rect(0, 250, 250, 250);

//Rectangle colour (Green)
fill(0, 128, 0, GreenMap);
//A rectangle and postion
rect(250, 250, 250, 250);


}
