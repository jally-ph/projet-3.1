

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
				
				var positions = markers[i]["position"];
				var lat = markers[i]["position"]["lat"];
				var long = markers[i]["position"]["lng"];
				var address = markers[i]["address"];
				

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
				      description: [address]
				    }
				  },
				 ]
				};

				
				// !!!!!!!  - add markers to map
				/*geojson.features.forEach(function(marker) {

				  var el = document.createElement('div');
				  el.className = 'marker';
				 
				  new mapboxgl.Marker(el)
				    .setLngLat(geojson["features"][0]["geometry"]["coordinates"])
				    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    				.setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
				    .addTo(map);
				});

				*/

				//console.log(getPositions());



				}

				//tentative clusters

			map.on('load', () => {
			  // add a clustered GeoJSON source for powerplant
			  map.addSource('markers-clusters', {
			    'type': 'geojson',
			    'data': markers,
			    'cluster': true,
			    'clusterRadius': 80
			  });
			  
			  console.log();

			  

			  map.addLayer({
				id: "clusters",
				type: "circle",
				source: "markers-clusters",
				filter: ["has", "point_count"],
				paint: {
				"circle-color": [
				"step",
				["get", "point_count"],
				"#51bbd6",
				100,
				"#f1f075",
				750,
				"#f28cb1"
				],
				"circle-radius": [
				"step",
				["get", "point_count"],
				20,
				100,
				30,
				750,
				40
				]
				}
				});
				 
				map.addLayer({
				id: "cluster-count",
				type: "symbol",
				source: "markers-clusters",
				filter: ["has", "point_count"],
				layout: {
				"text-field": "{point_count_abbreviated}",
				"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
				"text-size": 12
				}
				});
				 
				map.addLayer({
				id: "unclustered-point",
				type: "circle",
				source: "markers-clusters",
				filter: ["!", ["has", "point_count"]],
				paint: {
				"circle-color": "#11b4da",
				"circle-radius": 4,
				"circle-stroke-width": 1,
				"circle-stroke-color": "#fff"
				}
				});

				// inspect a cluster on click
				map.on('click', 'clusters', function (e) {
				var features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
				var clusterId = features[0].properties.cluster_id;
				map.getSource('markers-clusters').getClusterExpansionZoom(clusterId, function (err, zoom) {
				if (err)
				return;
				 
				map.easeTo({
				center: features[0].geometry.coordinates,
				zoom: zoom
					});
				});
				});
				 
				map.on('mouseenter', 'clusters', function () {
				map.getCanvas().style.cursor = 'pointer';
				});
				map.on('mouseleave', 'clusters', function () {
				map.getCanvas().style.cursor = '';
				});
			});


			
				
		});





	}



	

	


	

}



	



