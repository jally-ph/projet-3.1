

class MapData  {

	


	//complete data
	constructor (method, url) {

		method = "GET";
		url = "https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=0dd39fb7d2b169fac1860b7627dda27fab246e44";
	
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
		    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
		        let response = JSON.parse(this.responseText);
		        /*console.log(response);*/
		        //utiliser une fonction pr récup ??
		      
		    }
		};
		request.open(method, url);
		request.send();
		
	}



	//get the map
	getMap () {
		mapboxgl.accessToken = 'pk.eyJ1IjoiamFsbHktcGgiLCJhIjoiY2swdGMwNHZjMGFzZDNicGU2bHVhODkwbCJ9.T83X_8s7_gWjdH67B7Zcew';
		  var map = new mapboxgl.Map({
		    container: 'map',
		    style: 'mapbox://styles/mapbox/streets-v11',
		    //coordonnées Orléans
		    center: [1.433333, 43.600000],
			zoom: 10
		   });
	}

	//get positions
	getPositions () {
		
		/*for (var i = 0; i >= 0; i++) {
			Things[i]
		}*/

	}

	


	

}



	
   


