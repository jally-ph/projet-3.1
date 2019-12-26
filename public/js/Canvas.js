class Canvas {

	constructor() {

		// var canvas;
		// var context;
		var canvasWidth = 300;
		var canvasHeight = 200;
		var padding = 25;
		var lineWidth = 8;
		// var colorPurple = "#cb3594";
		// var colorGreen = "#659b41";
		// var colorYellow = "#ffcf33";
		// var colorBrown = "#986928";
		// var outlineImage = new Image();
		// var crayonImage = new Image();
		// var markerImage = new Image();
		// var eraserImage = new Image();
		// var crayonBackgroundImage = new Image();
		// var markerBackgroundImage = new Image();
		// var eraserBackgroundImage = new Image();
		// var crayonTextureImage = new Image();
		// var clickX = new Array();
		// var clickY = new Array();
		// var clickColor = new Array();
		// var clickTool = new Array();
		// var clickSize = new Array();
		// var clickDrag = new Array();
		// var paint = false;
		// // var curColor = colorPurple;
		// var curTool = "crayon";
		// var curSize = "normal";
		// var mediumStartX = 18;
		// var mediumStartY = 19;
		// var mediumImageWidth = 93;
		// var mediumImageHeight = 46;
		// var drawingAreaX = 111;
		// var drawingAreaY = 11;
		// var drawingAreaWidth = 267;
		// var drawingAreaHeight = 200;
		// var toolHotspotStartY = 23;
		// var toolHotspotHeight = 38;
		// var sizeHotspotStartY = 157;
		// var sizeHotspotHeight = 36;
		// var sizeHotspotWidthObject = new Object();
		// sizeHotspotWidthObject.huge = 39;
		// sizeHotspotWidthObject.large = 25;
		// sizeHotspotWidthObject.normal = 18;
		// sizeHotspotWidthObject.small = 16;

	

		// var totalLoadResources = 8
		// var curLoadResNum = 0;
		// *
		// * Calls the redraw function after all neccessary resources are loaded.
		
		// function resourceLoaded()
		// {
		// 	if(++curLoadResNum >= totalLoadResources - 1){
		// 		redraw();
		// 	}
		// }


		/****************************************************************************** Simple Canvas */

		var clickX = new Array();
		var clickY = new Array();
		var clickDrag = new Array();
		var paint;
		var canvas;
		var context;
		/**
		* Creates a canvas element.
		*/
		function executeCanvas()
		{
			// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
			var canvasDiv = document.getElementById('canvasDiv');
			canvas = document.createElement('canvas');
			canvas.setAttribute('width', canvasWidth);
			canvas.setAttribute('height', canvasHeight);
			canvas.setAttribute('id', 'canvas');
			canvasDiv.appendChild(canvas);
			if(typeof G_vmlCanvasManager != 'undefined') {
				canvas = G_vmlCanvasManager.initElement(canvas);
			}
			context = canvas.getContext("2d");
			
			// Add mouse events
			// ----------------
			$('#canvas').mousedown(function(e)
			{
				// Mouse down location
				var mouseX = e.pageX - this.offsetLeft;
				var mouseY = e.pageY - this.offsetTop;
				
				paint = true;
				addClick(mouseX, mouseY, false);
				redraw();
				 //nouveau btn
				document.getElementById('btnValid').style.display = 'block';
			});
			
			$('#canvas').mousemove(function(e){
				if(paint){
					addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
					redraw();
				}
			});
			
			$('#canvas').mouseup(function(e){
				paint = false;
			  	redraw();
			});
			
			$('#canvas').mouseleave(function(e){
				paint = false;
			});
			
			$('#clearCanvas').mousedown(function(e)
			{
				clickX = new Array();
				clickY = new Array();
				clickDrag = new Array();
				clearCanvas(); 
			});
			
			// Add touch event listeners to canvas element
			canvas.addEventListener("touchstart", function(e)
			{
				// Mouse down location
				var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
					mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;
				
				paint = true;
				addClick(mouseX, mouseY, false);
				redraw();
			}, false);
			canvas.addEventListener("touchmove", function(e){
				
				var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
					mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;
							
				if(paint){
					addClick(mouseX, mouseY, true);
					redraw();
				}
				e.preventDefault()
			}, false);
			canvas.addEventListener("touchend", function(e){
				paint = false;
			  	redraw();
			}, false);
			canvas.addEventListener("touchcancel", function(e){
				paint = false;
			}, false);
		}

		function addClick(x, y, dragging)
		{
			clickX.push(x);
			clickY.push(y);
			clickDrag.push(dragging);
		}

		function clearCanvas()
		{
			context.clearRect(0, 0, canvasWidth, canvasHeight);
		}

		function redraw()
		{
			clearCanvas();
			
			var radius = 3;
			context.strokeStyle = "black";
			context.lineJoin = "round";
			context.lineWidth = radius;
					
			for(var i=0; i < clickX.length; i++)
			{		
				context.beginPath();
				if(clickDrag[i] && i){
					context.moveTo(clickX[i-1], clickY[i-1]);
				}else{
					context.moveTo(clickX[i]-1, clickY[i]);
				}
				context.lineTo(clickX[i], clickY[i]);
				context.closePath();
				context.stroke();
			}
		}

		
		executeCanvas();

	}

}

/**/