
	//function pr afficher 1 img


let plus = 0;	
let slides = document.getElementsByClassName("sliderImg");


function change(){
	  
	let i;
	
	for (i = 0; i < slides.length; i++) {
	    slides[i].setAttribute("style", "z-index: 1");
	    
	}
	plus++;
	if (plus> slides.length) {plus = 1}
	slides[plus-1].setAttribute("style", "z-index: 2");
	let x = setTimeout(change, 5000); 

	//chevrons
	if ($("#chevronRight").click(function(){
	    slides[plus-1].setAttribute("style", "z-index: 1");
	    plus++;
	    if (plus> slides.length) {plus = 1}
	    slides[plus-1].setAttribute("style", "z-index: 2");
	 
	    clearTimeout(x);
	    x = setTimeout(change, 5000); 
	    console.log("chevronRight Ok!");
	  }));
	 
	
	if ($("#chevronLeft").click(function(){
	 	slides[plus-1].setAttribute("style", "z-index: 1");
	    plus--;
	   	if (plus<1) {plus=4}
	    slides[plus-1].setAttribute("style", "z-index: 2");
	    clearTimeout(x);
	    x = setTimeout(change, 5000); 
	    console.log("chevronLeft Ok!");
	 
	}));

	//pause & play
	if ($("#pause").click(function(){
	    clearTimeout(x); 
	    let play = document.getElementById("play");
	    play.setAttribute("style", "z-index: 5");
	    console.log("Pause Ok!");
	}));
	  

	if ($("#play").click(function() { 
	    play.setAttribute("style", "z-index: 3");
	    setTimeout(change, 3000);
	    console.log("Play Ok!");
	}));


	//avec clavier
	document.addEventListener("keydown", function(event) {
	 	if (event.which===39){
		   	slides[plus-1].setAttribute("style", "z-index: 1");
		    plus++;
		    if (plus> slides.length) {plus = 1}
		    slides[plus-1].setAttribute("style", "z-index: 2");
		    clearTimeout(x);
		    x = setTimeout(change, 5000); 
		    console.log("FlècheLeft Ok!");
	  	}

	  	if (event.which===37){
	     	slides[plus-1].setAttribute("style", "z-index: 1");
	    	plus--;
	   		if (plus<1) {plus=4}
	    	slides[plus-1].setAttribute("style", "z-index: 2");
	    	clearTimeout(x);
	     	x = setTimeout(change, 5000); 
	     	console.log("FlècheRight Ok!");
	  	}
	  
	})


	}


	  

	

	

	


