function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
//	noStroke();
	background(225);
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);

	var s = second();
	var m = minute();
	var h = hour();

	// dance
	// run
	// box

	// stick figure

	// head
	fill(255);
	ellipse(300, 50, 20, 20);
	line(300, 60, 300, 120);

	// legs
 	arc(300, 120, 280, 280, 0i


}
