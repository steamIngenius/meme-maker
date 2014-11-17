function convertToGrayscale() {
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext("2d");

	var image = ctx.getImageData(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < image.data.length; i = i + 4) { // skip through 4 values at a time
		// compute average
		var avg = (image.data[i] + image.data[i + 1] + image.data[i + 2] ) / 3;

		// assign it to our data
	    image.data[i] = avg;
	    image.data[i + 1] = avg;
	    image.data[i + 2] = avg;
	}

	ctx.putImageData(image, 0, 0);
}

function textChangeListener(evt) {
	// grab the id and value of what changed
	var id = evt.target.id;
	var text = evt.target.value;

	// update the text accordingly
	if (id == "topLineText") {
		window.topLineText = text;
	} else {
		window.bottomLineText = text;
	}

	// refresh meme contents with changes
	redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);
}

function redrawMeme(image, topLine, bottomLine) {
	// get 2d context of the canvas
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext("2d");

	// clear canvas
	canvas.width = canvas.width;

	// draw image
	if (image != null) {
		ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	}

	// set up text
	ctx.font = "bold 36px Impact";
	ctx.lineWidth = 2;
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	ctx.textAlign = "center";

	// draw top text
	if (topLine != null) {
		ctx.fillText(topLine.toUpperCase(), canvas.width / 2, 40);	
		ctx.strokeText(topLine.toUpperCase(), canvas.width / 2, 40);
	}

	// draw bottom text
	if (bottomLine != null) {
		ctx.fillText(bottomLine.toUpperCase(), canvas.width / 2, canvas.height - 60);	
		ctx.strokeText(bottomLine.toUpperCase(), canvas.width / 2, canvas.height - 60);
	}
	
}

function saveFile() {
	// convert the canvas to an image and open in a new tab/window
	window.open(document.querySelector('canvas').toDataURL());
}

function handleFileSelect(evt) {
	var file = evt.target.files[0];
	var reader = new FileReader();

	reader.onload = function(fileObject) {
		var data = fileObject.target.result;

		var image = new Image();
		image.onload = function() {
			window.imageSrc = this;
			redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);
		}

		image.src = data;
		console.log(fileObject.target.result);
	}

	reader.readAsDataURL(file);
}

window.topLineText = "type your meme -->";
window.bottomLineText = "";

var input1 = document.getElementById('topLineText');
var input2 = document.getElementById('bottomLineText');

input1.oninput = textChangeListener;
input2.oninput = textChangeListener;

document.getElementById('file').addEventListener('change', handleFileSelect, false);
document.getElementById('saveButton').addEventListener('click', saveFile, false);
document.getElementById('convertToGrayscale').addEventListener('click', convertToGrayscale, false);