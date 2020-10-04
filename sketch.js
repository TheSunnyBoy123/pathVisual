var cols = 20;
var rows = 50;
let isMov = false;
let Cross;
let picx = 5000;
let picy = 5000;

function movPos() {
  isMov = true;
}

function putCross() {
  image(Cross, picx, picy, 30, 30);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  Cross = loadImage("cross.jpg");

  //dropdown for algs
  alg = createSelect();
  alg.position(10, 10);
  alg.option("1st Alg");
  alg.option("2nd Alg");

  //button for 'type of click'
  movBut = createButton("Move position");
  movBut.position(100, 10);
  movBut.mouseClicked(movPos);
}

function draw() {
  background(255, 0, 100);
  putCross();
  

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var x = i * 30;
      var y = j * 30;

      strokeWeight(1);
      textSize(8);
      text([i, j], x + 5, y + 135);

      noFill();
      stroke(0);
      strokeWeight(2);
      rect(x, y + 120, 30, 30);
    }
  }
}

function mouseClicked() {
  if (
    mouseX / 30 >= 0 &&
    mouseY / 30 - 4 >= 0 &&
    mouseX / 30 < rows &&
    mouseY / 30 - 4 < cols
  ) {
    console.log([floor(mouseX / 30), floor(mouseY / 30) - 4]);
    if (isMov) {
      isMov = !isMov;
      image(Cross, floor(mouseX / 30) * 30, floor(mouseY / 30) - 120, 30, 30);
    }
  }
}


