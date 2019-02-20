//arguments object - no longer bound with arrow functions

const add = (a, b) => {
	//console.log(arguments);
	return a + b;
};
console.log(add(4, 2));

//this keyword no longer bound
 const user = {
 	name: 'Edward',
 	cities: ['San Francisco', 'Los Angelas'],
 	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city); 		
 	}
 };

 console.log(user.printPlacesLived());

 --------------------
 //challenge
 //
 const multiplier = {
 	arr: [],
 	num: x,
 	multiply() {
 		return this.arr.map((number) => number * this.num);
 	}
 }