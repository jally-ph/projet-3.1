function getSomething() {
	let rachel= 1;
	if (rachel===1){
		let monique = 2;
		getMonique(monique);
		// console.log(monique);
	}
}

let lise = 4;
getMonique(lise);

let Axel = 25;
getMonique(Axel);


function getMonique(variable){
	let tableau = [];
	for (var i = 0; i >= variable.length; i++) {
		console.log(variable[i]);
	}
	tableau = variable;

}