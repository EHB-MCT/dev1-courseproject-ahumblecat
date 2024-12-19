"use strict";
/** @type {CanvasRenderingContext2D} */
let context; // Declare context globally

setupCanvasContext();

export default context;

function setupCanvasContext() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d"); // Assign the global context variable
}