var rainDrops = [];
function setup() {
	createCanvas(700, 800); // make an HTML canvas element width x height pixels
	angleMode(DEGREES);
	ellipseMode(RADIUS);

	for (var i = 0; i < 60; i++) {
		rainDrops.push(new RainDrop(i));
	}
}

function draw() {
	var bgCol;
	if (hour() / 2 > 0) {
		bgCol = 0;
	} else {
		bgCol = 255;
	}
	background(bgCol);
	noStroke();
	/*
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(255);
	text(second(), 10, 90);
	*/

	var sc = 350;

	fill(bgCol);
	ellipse(width/2, height-200, sc, sc/2);

	strokeWeight(2);
	fill(0, 119, 190, 100);
	stroke(0, 119, 190);
	let eWh = map(hour() % 12, 0, 12, sc-50, sc);
	let eHh = map(hour() % 12, 0, 12, (sc-50)/2, sc/2);
	ellipse(width/2, height-200, eWh, eHh);

	fill(bgCol);
	ellipse(width/2, height-200, sc-50, (sc-50)/2);

	fill(115, 194, 251, 100);
	stroke(115, 194, 251);
	let eWm = map(minute(), 0, 60, sc-150, sc-50);
	let eHm = map(minute(), 0, 60, (sc-150)/2, (sc-50)/2);
	ellipse(width/2, height-200, eWm, eHm);
	
	fill(bgCol);
	ellipse(width/2, height-200, sc-150, (sc-150)/2);

	fill(0, 128, 255, 100);	
	stroke(0, 128, 255);
	let eWs = map(second(), 0, 60, 0, sc-150);
	let eHs = map(second(), 0, 60, 0, (sc-150)/2);
	ellipse(width/2, height-200, eWs, eHs);

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
			ellipse(this.x, this.y, this.r*2, this.r);
		}
	}
}
