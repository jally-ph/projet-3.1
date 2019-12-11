

class Form{

	constructor() {
		
		

		$("#btnReserv").click(function(e){

			//dès qu'on appuie sur reserv, les infos inscrites st mises dans sessionStorage 
			//et LocalStorage
			//et on fait en sorte que leur contenu apparaisse en valeur pour 
			//l'inscription suivante (value = 'ce-qui-est-dans-les-Storage')



			e.preventDefault();
			var inputPrenom = document.getElementById("inputPrenom").value;
			var inputNom = document.getElementById("inputNom").value;
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
				
				var canvas = document.getElementById('displayCanvas');
				canvas.style.display = 'block';
				//ancien btn
				document.getElementById('btnReserv').style.display = 'none';
	
			}

		});

		$("#btnValid").click(function(e){
			console.log('validbtn!');

			e.preventDefault();
			//if paint = true;
			document.getElementById('zoneTimer').style.display = 'block';
			var timer = new Timer();
			
		});

		
	}




}

