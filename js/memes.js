var c = document.querySelector("#c");
var ctx = c.getContext("2d");

// ctx.fillRect(100, 100, 100, 100);
// ctx.strokeRect(50, 50, 50, 50);

ctx.fillStyle = "black";
ctx.strokeStyle = "gray";

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(75, 75);
ctx.lineTo(125, 75);
ctx.lineTo(125, 125);
ctx.fill();

ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.textAlign = "center";
ctx.font = "bold 36px Impact";
ctx.lineWidth = 2;
ctx.fillText("canvas memes!".toUpperCase(), c.width / 2, 40);
ctx.strokeText("canvas memes!".toUpperCase(), c.width / 2, 40);
