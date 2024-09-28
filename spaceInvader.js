signature();

function signature() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.beginPath();
	context.fillRect(50, 50, 300, 300); //square
	context.fillStyle = "lightgreen";
	context.fillRect(175, 75, 50, 50); //top of signature
	context.fillRect(125, 125, 50, 200); //left side of signature
	context.fillRect(225, 125, 50, 200); //left side of signature
	context.fillRect(175, 175, 50, 50); //middle of signature
}

//klaar
