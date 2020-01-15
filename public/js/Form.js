

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
				
				var reg = /\s|\n|\d|&|\[|\]|\(|\)|\{|\}|\#|@|=|\+|°|\$|£|¤|%|µ|§|!|:|\/|\\|;|\.|,|\?|<|>|²|\*/;
				var testNom = inputNom.match(reg);
				var testPrenom = inputPrenom.match(reg);
				

				if (testNom !== null || testPrenom !== null){
					errorNom.textContent = 'Champ nom ou prénom invalide : vérifier que des espaces ou des caractères spéciaux ne soient pas contenus dans votre saisie.';
				}

				if (testNom == null && testPrenom == null){

					var canvas = document.getElementById('canvasDiv');
					canvas.style.display = 'block';

					//session storage
					localStorage.setItem("prenom", inputPrenom);
					localStorage.setItem("nom", inputNom);
					sessionStorage.setItem("adresse", inputAdresse);
					sessionStorage.setItem("date1", Date.now());
					
					//ancien btn
					document.getElementById('btnReserv').style.display = 'none';
		

				}
				
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

