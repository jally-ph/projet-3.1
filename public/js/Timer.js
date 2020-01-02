class Timer {

	constructor() {
		//document.getElementById("zoneTimer").style.display = "none";
		
		
		
		var timerElt = document.getElementById("timer");
		var date1 = sessionStorage.getItem('date1');
		var date2 = Date.now();
		var diff = Math.round((date2 - date1)/60000);

		var min = 20 - diff;
		var sec = 0;

		var timer = setInterval(function(){start()}, 1000);

		function start() {

			if (sec <= 0){
				min--;
				sec = 59;
			}

			else{
				sec--;
				//fonctionne pas avec diff car, après 0 on va dans les négatifs. 
			}

			if (min <= 0 && sec <= 0){
				sessionStorage.removeItem('prenom');
				sessionStorage.removeItem('nom');
				sessionStorage.removeItem('adresse');
				document.getElementById('zoneTimer').style.display = 'none';
				document.getElementById('btnConfirm').style.display = 'none';
				document.getElementById('btnCancel').style.display = 'none';
				
			}

			timerElt.textContent = min + " : " + sec;
		

		}
	}


	

}



