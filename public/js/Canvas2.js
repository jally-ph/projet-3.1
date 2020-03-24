class Canvas {

	constructor() {
		
		this.canvasWidth = 300;
		this.canvasHeight = 200;
		this.padding = 10;
		this.lineWidth = 8;
		this.clickX = new Array();
		this.clickY = new Array();
		this.clickDrag = new Array();
		this.paint;
		this.canvas;
		this.context;

	}

	/* Creates a canvas element*/
	executeCanvas(){
		// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
		var canvasDiv = document.getElementById('canvasDiv');
		this.canvas = document.createElement('canvas');
		this.canvas.setAttribute('width', this.canvasWidth);
		this.canvas.setAttribute('height', this.canvasHeight);
		this.canvas.setAttribute('id', 'canvas');
		canvasDiv.appendChild(this.canvas);
		if(typeof G_vmlCanvasManager != 'undefined') {
			this.canvas = G_vmlCanvasManager.initElement(this.canvas);
		}
		this.context = this.canvas.getContext("2d");
	}

	addClick(x, y, dragging){
		// console.log(this.clickX);
		this.clickX.push(x);
		this.clickY.push(y);
		this.clickDrag.push(dragging);
	}

	clearCanvas(){
		this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
	}

	redraw(){
		this.clearCanvas();
		
		var radius = 3;
		this.context.strokeStyle = "black";
		this.context.lineJoin = "round";
		this.context.lineWidth = radius;

		for(var i=0; i < this.clickX.length; i++)
		{		
			this.context.beginPath();
			if(this.clickDrag[i] && i){
				this.context.moveTo(this.clickX[i-1], this.clickY[i-1]); //0,0
			}else{
				this.context.moveTo(this.clickX[i]-1, this.clickY[i]);
			}
			this.context.lineTo(this.clickX[i], this.clickY[i]);
			this.context.closePath();
			this.context.stroke();
		}
	}

}


////////////////////////////////////////////////////////////////////////////////////main!!!


//CANVA
var canvas = new Canvas();
canvas.executeCanvas();

// Add mouse events
			// à la plce de e.pageX, mettre : e.scrollTop et e.scrollLeft
			// ----------------
			$('#canvas').mousedown(function(e){
			// Mouse down location
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			
			canvas.paint = true;
			console.log(mouseX +" / " + mouseY);
			canvas.addClick(mouseX, mouseY, false);
			canvas.redraw();
			});

			$('#canvas').mousemove(function(e){
				if(canvas.paint){
					canvas.addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
					canvas.redraw();
			//nouveau btn : valider (apparait si on fait un trait)
			document.getElementById('btnValid').style.display = 'block';
				}
			});

			$('#canvas').mouseup(function(e){
				canvas.paint = false;
				canvas.redraw();
			});

			$('#canvas').mouseleave(function(e){
				canvas.paint = false;
			});

			$('#clearCanvas').mousedown(function(e)
			{
				canvas.clickX = new Array();
				canvas.clickY = new Array();
				canvas.clickDrag = new Array();
				canvas.clearCanvas(); 
			});

			$("#btnNewOrder").click(function(e){
				canvas.clickX = new Array();
				canvas.clickY = new Array();
				canvas.clickDrag = new Array();
				canvas.clearCanvas();
			});


// Tactile ::::   Add touch event listeners to canvas element
canvas.canvas.addEventListener("touchstart", function(e)
{
	// Mouse down location
	var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
	mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;
	
	this.paint = true;
	this.addClick(mouseX, mouseY, false);
	this.redraw();
}, false);

canvas.canvas.addEventListener("touchmove", function(e){
	var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
	mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;

	if(this.paint){
		//nouveau btn : valider (apparait si on fait un trait)
		document.getElementById('btnValid').style.display = 'block';
		this.addClick(mouseX, mouseY, true);
		this.redraw();
	}
	e.preventDefault()
}, false);

canvas.canvas.addEventListener("touchend", function(e){
	this.paint = false;
	this.redraw();
}, false);

canvas.canvas.addEventListener("touchcancel", function(e){
	this.paint = false;
}, false);



