var size;

//Initialization function
function setup() {
  createCanvas(500,500);
  //Drawing speed(20fps)
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

//Arc shapes and their respective colour
  //Using random fill RBG values with random alpha values
    fill(random(255), random(255), random(255), random(255));
    arc(x, y, size*0.9, size*0.9,radians(100),radians(270),PIE);
    fill(random(255), random(255), random(255), random(255));
    arc(x, y, size*0.7, size*0.7,radians(150),radians(270),PIE);
    fill(random(255), random(255), random(255), random(255));
    arc(x, y, size*0.5, size*0.5,radians(250),radians(270),PIE);

//Circle shapes and their respective colour
  //Using random fill RBG values with random alpha values
    fill(random(255), random(255), random(255), random(255));
    ellipse(x, y, size*0.25, size*0.25);
    fill(random(255), random(255), random(255), random(255));
    ellipse(x, y, size*0.2, size*0.2);
    fill(random(255), random(255), random(255), random(255));
    ellipse(x, y, size*0.1, size*0.1);


  }
