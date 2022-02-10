let j;
function setup() {
  // put setup code here
  createCanvas(400,400);
  j = 0;
}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(3)
  stroke(243,31,22)
  point(175,100)
  line(130,160,220,160)

  fill((50,205,50))
  rect(130,120,90,20)

  strokeWeight(2)
  stroke(1,31,22)
  fill(90,166,2)
  ellipse(150, 80, 20, 20)
  ellipse(200, 80, 20, 20)

  strokeWeight(0)
  //noStroke()

  fill(90,2,2)
  strokeJoin(ROUND)
  triangle(170, 20, 150, 40, 130, 20)
  triangle(220, 20, 200, 40, 180, 20)
  arc(100, 80, 40, 40, radians(0), radians(180))
  arc(250, 80, 40, 40, radians(0), radians(-180))

  strokeWeight(3)
  beginShape();
  vertex(300,100)
  vertex(300,70)
  vertex(250,150)
  endShape(CLOSE);

  strokeWeight(3)
  beginShape();
  vertex(50,100)
  vertex(30,70)
  vertex(25,150)
  endShape(CLOSE);

  for (var i=0; i<=400; i++){
    x = i
    y = 300 + 20*Math.sin(PI*x/20)
    point(x,y)
  }

  var y = 200 + 20*Math.sin(PI*x/20);
  var r = 50 + 10*Math.sin(PI*x/20);
  j += 1
  fill(240,192,35)
  ellipse(y, y, r, r)
}