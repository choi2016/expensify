var nameVar = 'Edward';
var nameVar = 'Haru';
console.log('nameVar', nameVar);

let nameLet = 'Dad';
nameLet = 'Father';
console.log('nameLet', nameLet);

const nameConst = 'Dog';
console.log('nameConst', nameConst);

//block scoping
const fullName = 'Edward Choi';
let firstName;

if (fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);
-----------------------------------------
//reg arrow function
let getFirstName = (fullName) => {
	return fullName.split(' ')[0];
};

//shorthand arrow function
let getFirst = (fullName) => fullName.split(' ')[0];




