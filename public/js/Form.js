

class Form{

	constructor() {
		
		

		$("#btnReserv").click(function(e){

			//dès qu'on appuie sur reserv, les infos inscrites st mises dans sessionStorage 
			//et LocalStorage
			//et on fait en sorte que leur contenu apparaisse en valeur pour 
			//l'inscription suivante (value = 'ce-qui-est-dans-les-Storage')

			var inputPrenom = document.getElementById("inputPrenom").value;
	 		var inputNom = document.getElementById("inputNom").value;
	 		var inputAdresse = document.getElementById("adresseMapInput").value;

			e.preventDefault();

			var errorPrenom = document.getElementById("zoneErrorPrenom");
			var errorNom = document.getElementById("zoneErrorNom");
			
			

			if (inputNom ==='' || inputNom == null){	
				errorNom.textContent = 'Champ nom vide';
			}

			else {
				errorNom.textContent = '';
			}

			if (inputPrenom === '' || inputPrenom == null){	
				errorPrenom.textContent = 'Champ prénom vide';
			}

			else {
				errorPrenom.textContent = '';
			}

			if (!(inputNom ==='' || inputNom == null) && !(inputPrenom === '' || inputPrenom == null)){
				
				var canvas = document.getElementById('canvasDiv');
				canvas.style.display = 'block';


				// var storagePrenom = sessionStorage.getItem('prenom');
				// var storageNom = sessionStorage.getItem('nom');
				// var storageAdresse = sessionStorage.getItem('adresse');

				// if (isset(storagePrenom) && isset(storageNom) && isset(storageAdresse)){
				// 	console.log("storage rempli déjà!");

				// 	storagePrenom = document.getElementById("inputPrenom").value;
				// 	storageNom = document.getElementById("inputNom").value;
				// 	storageAdresse = document.getElementById("inputAdresse").value;
				// }

				//session storage
				sessionStorage.setItem("prenom", inputPrenom);
				sessionStorage.setItem("nom", inputNom);
				sessionStorage.setItem("adresse", inputAdresse);
				sessionStorage.setItem("date1", Date.now());

				
				//ancien btn
				document.getElementById('btnReserv').style.display = 'none';
	
			}

		});

		$("#btnValid").click(function(e){
			e.preventDefault();
			document.getElementById('zoneTimer').style.display = 'block';

			var timer = new Timer();
			document.getElementById('btnValid').style.display = 'none';
			document.getElementById('btnConfirm').style.display = 'block';
			document.getElementById('btnCancel').style.display = 'block';

		});

		$("#btnConfirm").click(function(e){
			e.preventDefault();

			document.getElementById('zoneTimer').style.display = 'none';
			document.getElementById('reservConfirm').style.display = 'block';

		})

		
	}




}

