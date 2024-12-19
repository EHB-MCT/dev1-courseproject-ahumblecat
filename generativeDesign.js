"use strict";
import { context, canvas } from "./scripts/context.js";
// Parameters for the grid
let cols = 15; // Number of columns
let rows = 10; // Number of rows
let margin = 20; // Margin between circles

let cellWidth = canvas.width / cols;
let cellHeight = canvas.height / rows;

function getRandomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

// Draw the grid of circles
function drawRGBBalls() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			// Calculate the center of each cell
			let x = col * cellWidth + cellWidth / 2;
			let y = row * cellHeight + cellHeight / 2;

			// Randomize the radius
			let radius = Math.random() * (cellWidth / 2 - margin);

			// Set random color
			context.fillStyle = getRandomColor();

			// Draw the circle
			context.beginPath();
			context.arc(x, y, radius, 0, Math.PI * 2);
			context.fill();
		}
	}
}
drawRGBBalls();
