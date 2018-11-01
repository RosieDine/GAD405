let size = 50

//Initialization function
function setup() {
//Set the size of rendering window - pixels
 createCanvas(500,500);
  //noloop();
}

//Rendering function
function draw(){
 fill(215, 200, 170)
for (let x = 0; x < 10; x++) {
 //Top rectangle (0 is the top of the canvas)
 rect(size*x, 0, size, size);
 //Middle rectangle (225 is middle value)
 rect(size*x, 225, size, size);
 //Bottom rectangle
 rect(size*x, height-size, size, size);


  }

}
