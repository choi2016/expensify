
class Person {
	constructor(name = 'Anon', age = 0) {
		//inside class method, 'this' refers to the class instance
		this.name = name;
		this.age = age;
	}	
	getGreeting() {
		//return 'Hi, I am ' + this.name + '!';  
		return `Hi, I am ${this.name}!`
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`
	}
}

class Student extends Person{
	constructor(name, age, major){
		//super as a function refers to parent class constructor
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();
		
		if(this.hasMajor()) {
			description += `Their major is ${this.major}`;
		}

		return description;
	}
}

class Traveler extends Person{
	constructor(name, age, homeLocation){
		super(name, age);
		this.homeLocation = homeLocation;
	}
	getGreeting(){
		let greeting = super.getGreeting();

		if(this.homeLocation){
			greeting += ` I'm visiting from ${this.homeLocation}`;
		} 

		return greeting;
	}
}

//'new' creates a new instance. 
//In this case, me is the new instance of the Person class
const me = new Traveler('Edward Choi', 26, 'San Francisco');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());

