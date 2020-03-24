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
console.log();

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

	


var canvas = document.getElementById("sig-canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#222222";
ctx.lineWidth = 4;



  var drawing = false;
  var mousePos = {
    x: 0,
    y: 0
  };
  var lastPos = mousePos;

  canvas.addEventListener("mousedown", function(e) {
    drawing = true;
    lastPos = canvasObjet.getMousePos(canvas, e);
    // console.log(lastPos);
  }, false);

  canvas.addEventListener("mouseup", function(e) {
    drawing = false;
    // console.log("hey 2!");
  }, false);

  canvas.addEventListener("mousemove", function(e) {
    mousePos = canvasObjet.getMousePos(canvas, e);
    //nouveau btn : valider (apparait si on fait un trait)
      document.getElementById('btnValid').style.display = 'block';
      // console.log("hey 3!");
  }, false);

  // Add touch event support for mobile
  canvas.addEventListener("touchstart", function(e) {

  }, false);

  canvas.addEventListener("touchmove", function(e) {
    var touch = e.touches[0];
    var me = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(me);
  }, false);

  canvas.addEventListener("touchstart", function(e) {
    mousePos = canvasObjet.getTouchPos(canvas, e);
    var touch = e.touches[0];
    var me = new MouseEvent("mousedown", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(me);
  }, false);

  canvas.addEventListener("touchend", function(e) {
    var me = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(me);
  }, false);

  // Prevent scrolling when touching the canvas
  document.body.addEventListener("touchstart", function(e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  document.body.addEventListener("touchend", function(e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  document.body.addEventListener("touchmove", function(e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);

  // Set up the UI
  // var sigText = document.getElementById("sig-dataUrl");
  var sigImage = document.getElementById("sig-image");
  var clearBtn = document.getElementById("sig-clearBtn");
  // var submitBtn = document.getElementById("sig-submitBtn");
  clearBtn.addEventListener("click", function(e) {
    e.preventDefault();
    canvasObjet.clearCanvas();
    // sigText.innerHTML = "Data URL for your signature will go here!";
    //sigImage.setAttribute("src", "");
  }, false);
  // submitBtn.addEventListener("click", function(e) {
  //   var dataUrl = canvas.toDataURL();
  //   // sigText.innerHTML = dataUrl;
  //   // sigImage.setAttribute("src", dataUrl);
  //   console.log("bien reçu la signature!");
  // }, false);

window.requestAnimFrame = (function(callback) {
     return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimaitonFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    })

var canvasObjet = new Canvas(canvas, mousePos, lastPos);
canvasObjet.drawLoop(drawing);



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








