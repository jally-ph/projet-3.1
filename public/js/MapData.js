class MapData {



	//complete data
	constructor (method, url) {

		method = "GET";
		url = "https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=0dd39fb7d2b169fac1860b7627dda27fab246e44";
	
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
		    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
		        let response = JSON.parse(this.responseText);
		        console.log(response);
		    }
		};
		request.open(method, url);
		request.send();
		
	}

	//get the map
	getMap () {
		
	}

	//recup positions only - fonctionne pas encore!
	

}



