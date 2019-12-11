class Timer {

	constructor() {
		//document.getElementById("zoneTimer").style.display = "none";
		
		var min = 20;
		var sec = 0;
		var timerElt = document.getElementById("timer");

		var timer = setInterval(function(){start()}, 1000);

		function start() {

			if (sec <= 0){
				min--;
				sec = 59;
			}

			else{
				sec--;
			}

			if (min <= 0 && sec <= 0){
				clearInterval(timer);
			}

			timerElt.textContent = min + " : " + sec;

		}
	}


	

}



