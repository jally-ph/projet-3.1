

class MapData  {

	

	constructor (ajax) {

		this.method = "GET";
		this.url = "https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=0dd39fb7d2b169fac1860b7627dda27fab246e44";
		
		//this.getMap();
		this.ajax = ajax; //ajax déterminé dans main.js
		this.mapInfo();
	}


	//get the map
	/*getMap () {
		mapboxgl.accessToken = 'pk.eyJ1IjoiamFsbHktcGgiLCJhIjoiY2swdGMwNHZjMGFzZDNicGU2bHVhODkwbCJ9.T83X_8s7_gWjdH67B7Zcew';
		var map = new mapboxgl.Map({
		    container: 'map',
		    style: 'mapbox://styles/mapbox/streets-v11',
		    //coordonnées Toulouse
		    center: [1.433333, 43.600000],
			zoom: 10
		   });
	}*/


	mapInfo () {

		 mapboxgl.accessToken = 'pk.eyJ1IjoiamFsbHktcGgiLCJhIjoiY2swdGMwNHZjMGFzZDNicGU2bHVhODkwbCJ9.T83X_8s7_gWjdH67B7Zcew';
		 var map = new mapboxgl.Map({
		     container: 'map',
		     style: 'mapbox://styles/mapbox/streets-v11',
		     //coordonnées Toulouse
		     center: [1.433333, 43.600000],
		 	zoom: 10

		   })
	
		

		this.ajax.ajaxGet(this.url, (response) => {
			let markers = JSON.parse(response);
			//console.log(markers.length);
			for (var i = 0; i < markers.length; i++) {
				
				//console.log(markers[i]);
				var lat = markers[i]["position"]["lat"];
				var long = markers[i]["position"]["lng"];
				var description = markers[i]["address"];

				var geojson = {
				  type: 'FeatureCollection',
				  features: [{
				    type: 'Feature',
				    geometry: {
				      type: 'Point',
				      coordinates: [long, lat]
				    },
				    properties: {
				      title: 'Mapbox',
				      description: [description]
				    }
				  },
				 ]
				};

				//console.log(geojson["features"][0]["geometry"]["coordinates"]);

				// !!!!!!!  - add markers to map
				geojson.features.forEach(function(marker) {

				  var el = document.createElement('div');
				  el.className = 'marker';
				 
				  new mapboxgl.Marker(el)
				    .setLngLat(geojson["features"][0]["geometry"]["coordinates"])
				    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    				.setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
				    .addTo(map);
				});

				}

				
		});





	}



	

	


	

}



	



