var pic = document.getElementById('vimage');
var pX, pY;
pX = pY = null;

var drawLine = function(x1, y1, x2, y2){
	var color = '#'+Math.random().toString(16).substr(-6); //another color
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.setAttribute("stroke", color);
	pic.appendChild(line);
}

var drawCircle = function(cx, cy){
	var color = '#'+Math.random().toString(16).substr(-6);
	var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	dot.setAttribute("cx", cx);
	dot.setAttribute("cy", cy);
	dot.setAttribute("r", 10);
	dot.setAttribute("fill", color);
	dot.setAttribute("stroke", color);
	pic.appendChild(dot);
}

pic.addEventListener('click', function (e){
	var x = event.clientX;
	var y = event.clientY;


	if (! (pX == null || pY == null)){
		//make a circle
		drawLine(pX, pY, x, y);
		drawCircle(pX, pY);
	}

	drawCircle(x, y);

	pX = x;
	pY = y;

});

var clicked = document.getElementById('erase');
clicked.addEventListener('click', function (e) {
	pX = pY = null;
	while (pic.childNodes.length > 0){
		pic.removeChild(pic.childNodes[0]);
	}
});