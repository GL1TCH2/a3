
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
blockY = 1;
blockX = 1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject = "";

function newImage(get_Image) {
	// para enviar imagens
	fabric.Image.fromURL(get_Image, function (Img) {
		block_image_object = Img;
		block_image_object.scaleToWidth(blockImageWidth);
		block_image_object.scaleToHeight(blockImageHeight);
		block_image_object.set({
			top: blockY,
			left: blockX

		});
		canvas.add(block_image_object);
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '69') // adicione os códigos adequados às teclas
	{
		newImage('rr1.png');
		console.log("r");
		
		// enviar ranger escarlate
	}
	if (keyPressed == '86') {
		blockX = 200;
		newImage('gr.png');
		console.log("v");
		
		// enviar ranger verde
	}

	if (keyPressed == '65') {
		newImage('yr.png');
		console.log("y");
		blockX = 350;
		// enviar ranger amarelo
	}
	if (keyPressed == '82') {
		newImage('pr.png');
		console.log("p");
		blockX = 600;
		// enviar ranger rosa
	}
	if (keyPressed == '73') {
		newImage('br.png');
		console.log("i");
		blockX = 700;
		// enviar ranger índigo
	}

}

