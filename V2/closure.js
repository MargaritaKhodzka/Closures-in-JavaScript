var birds = 3;

function dogHouse() {
	var dogs = 8;
	// console.log(birds); // 3
	// console.log(dogs); // 8

 	// inner function. Has access to the outer function scope
	function showDogs() {
		console.log(dogs);
	}
	return showDogs();
}

var getDogs = dogHouse();
getDogs;

// console.log(birds); // 3
// console.log(dogs); // ReferenceError
