var rainDrops = [];
/*let fiji;
function preload() {
	fiji = loadImage('fiji.png');
}*/

function setup() {
	createCanvas(700, 800); // make an HTML canvas element width x height pixels
	angleMode(DEGREES);
	ellipseMode(RADIUS);

//	image(fiji, 0, 0);

	for (var i = 0; i < 60; i++) {
		rainDrops.push(new RainDrop(i));
	}

}
function draw() {
	background(0);
	noStroke();
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(255);
	text(second(), 10, 90);

	strokeWeight(4);
	fill(0, 119, 190);
	stroke(0, 119, 190);
	//stroke(0, 128, 255);
	let eWh = map(hour(), 0, 24, 300, 400);
	let eHh = map(hour(), 0, 24, 150, 200);
	ellipse(width/2, 600, eWh, eHh);

	fill(115, 194, 251);
	//stroke(115, 194, 251);
	stroke(0, 128, 255);
	let eWm = map(minute(), 0, 60, 200, 300);
	let eHm = map(minute(), 0, 60, 100, 150);
	ellipse(width/2, 600, eWm, eHm);
	
	fill(0, 128, 255, 100);	
	stroke(0, 128, 255);
	let eWs = map(second(), 0, 60, 0, 200);
	let eHs = map(second(), 0, 60, 0, 100);
	ellipse(width/2, 600, eWs, eHs);

	noFill();
	for (var i = 0; i < second(); i++) {
		rainDrops[i].update();
		rainDrops[i].display();
	}	
}

class RainDrop {
	
	constructor(n) {
		this.reset();
		this.s = n;
	}

	reset() {
		this.x = width/2;
		this.y = -100;
		this.vy = 8;
		this.maxy = this.y + height - 100;
		this.r = 0;
		this.tr = 100;
	}

	update() {
		if (this.y < this.maxy) {
			this.y += this.vy	
		} else {
			this.r++;
		}
		if (this.r > this.tr && second()-1 == this.s) {
			this.reset();
		}
	}

	display() {
		stroke(0, 128, 255);
		strokeWeight(4);
		if (this.y < this.maxy) {
	//		stroke(255);
			push();
			translate(this.x, this.y);
			beginShape();
			fill(0, 128, 255);	
			strokeWeight(2);
			vertex(0, -40);
			quadraticVertex(24, 0, 0, 2);
			quadraticVertex(-24, 0, 0, -40);
			endShape(CLOSE);
			pop();
		} else {
			stroke(0, 128, 255, map(this.r, 0, this.tr, 255, 0));
		//	fill(0, 128, 255, map(this.r, 0, this.tr, 255, 0));	
			ellipse(this.x, this.y, this.r*2, this.r);
		}
	}
}
