//lancement diaporama



//AJAX
var ajax = new Ajax();

//=============================================================================================MAP
//MAP
var mapData = new MapData(ajax);

function reserverVelo(adress){
	var input = document.getElementById('adresseMapInput');
	var p = document.getElementById('adresseMap');
	p.innerHTML = adress;
	input.value = adress;
}

//==========================================================================================SLIDER
//SLIDER
var slides = document.getElementsByClassName("sliderImg");
var diapo = new Diapo(slides);
diapo.change();


//chevrons
if ($("#chevronRight").click(function(){
	diapo.plusRight(diapo.slides);
	console.log("chevronRight Ok!");
}));

	if ($("#chevronLeft").click(function(){
		diapo.plusLeft();
		console.log("chevronLeft Ok!");

	}));

//clavier
document.addEventListener("keydown", function(event) {
	if (event.which===39){
		diapo.plusRight(diapo.slides);
		console.log("FlècheLeft Ok!");
	}

	if (event.which===37){
		diapo.plusLeft();
		console.log("FlècheRight Ok!");
	}

});

//pause & play
if ($("#play").click(function() { 
	//console.log(play);
	play.setAttribute("style", "z-index: 3");
	diapo.change();
	console.log("Play Ok!");

}));

	if ($("#pause").click(function(){
		diapo.pause();
		play.setAttribute("style", "z-index: 5");
		console.log("Pause Ok!");
	}));

//===========================================================================================CANVA

	
// var canvasObjet = new Canvas;
// var canvas = document.getElementById("sig-canvas");
// var ctx = this.canvas.getContext("2d");
// ctx.strokeStyle = "#222222";
// ctx.lineWidth = 4;

 

// var drawing = false;
// var mousePos = {
// 				x: 0,
// 				y: 0
// 				};
// var lastPos = mousePos;

// canvasObjet.drawLoop();
  

// canvas.addEventListener("mousedown", function(e) {
// 		    canvasObjet.drawing = true;
// 		    canvasObjet.lastPos = canvasObjet.getMousePos(canvasObjet.canvas, e);
// 		  }, false);

// 		  canvas.addEventListener("mouseup", function(e) {
// 		    canvasObjet.drawing = false;
// 		  }, false);

// 		  canvas.addEventListener("mousemove", function(e) {
// 		    canvasObjet.mousePos = canvasObjet.getMousePos(canvasObjet.canvas, e);
// 		  }, false);

		  // Add touch event support for mobile
		//   canvas.addEventListener("touchstart", function(e) {

		//   }, false);

		//   canvas.addEventListener("touchmove", function(e) {
		//     var touch = e.touches[0];
		//     var me = new MouseEvent("mousemove", {
		//       clientX: touch.clientX,
		//       clientY: touch.clientY
		//     });
		//     canvasObjet.canvas.dispatchEvent(me);
		//   }, false);

		//   canvas.addEventListener("touchstart", function(e) {
		//     canvasObjet.mousePos = canvasObjet.getTouchPos(canvasObjet.canvas, e);
		//     var touch = e.touches[0];
		//     var me = new MouseEvent("mousedown", {
		//       clientX: touch.clientX,
		//       clientY: touch.clientY
		//     });
		//     canvasObjet.canvas.dispatchEvent(me);
		//   }, false);

		//   canvas.addEventListener("touchend", function(e) {
		//     var me = new MouseEvent("mouseup", {});
		//     canvasObjet.canvas.dispatchEvent(me);
		//   }, false);

		//     // Prevent scrolling when touching the canvas
		//   document.body.addEventListener("touchstart", function(e) {
		//     if (e.target == canvasObjet.canvas) {
		//       e.preventDefault();
		//     }
		//   }, false);
		//   document.body.addEventListener("touchend", function(e) {
		//     if (e.target == canvasObjet.canvas) {
		//       e.preventDefault();
		//     }
		//   }, false);
		//   document.body.addEventListener("touchmove", function(e) {
		//     if (e.target == canvasObjet.canvas) {
		//       e.preventDefault();
		//     }
		//   }, false);


		//   // Set up the UI
		// var sigText = document.getElementById("sig-dataUrl");
		//    // var sigImage = document.getElementById("sig-image");
		// var clearBtn = document.getElementById("sig-clearBtn");
		//   // var submitBtn = document.getElementById("sig-submitBtn");
		// clearBtn.addEventListener("click", function(e) {
		//    canvasObjet.clearCanvas();
		//     sigText.innerHTML = "Data URL for your signature will go here!";
		//     // sigImage.setAttribute("src", "");
		//   }, false);
		//   // submitBtn.addEventListener("click", function(e) {
		//   //   var dataUrl = canvas.toDataURL();
		//   //   sigText.innerHTML = dataUrl;
		//   //   sigImage.setAttribute("src", dataUrl);
		//   // }, false);



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





//================================================================================================
//TIMER
//SESSION STORAGE - si sessionsto à les var min et sec, il les récupère et continue le décompte
if (sessionStorage.timerMin && sessionStorage.timerSec){
	document.getElementById('zoneTimer').style.display = 'block';
	var timer = new Timer();
}

if (localStorage.nom && localStorage.prenom && sessionStorage.adresse){
			//timer ::: spanName
			document.getElementById('spanName').textContent = localStorage.prenom + " " + localStorage.nom;
			//spanAdresse
			document.getElementById('spanAdresse').textContent = sessionStorage.adresse;
		}


		$("#btnNewOrder").click(function(e){
			sessionStorage.removeItem('timerMin');
			sessionStorage.removeItem('timerSec');
			clearInterval(timer.timer);
			
		});








