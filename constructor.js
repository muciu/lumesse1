//Constructor
function Car(manufacturer) {
	this.mileage = 0;
	this.manufacturer = manufacturer;
}

//Creating object
var car = new Car('Lancia');

//Factory method
Car.createCar = function(manufacturer) {
	return new Car(manufacturer);
}

//polimorphism
function Animal() {
	this.move = function() {
	}
}

function Dog() {
	this.bark = function () {
		console.log('wof!');
	}
}

Dog.prototype = new Animal()

Dog.__proto__ == ??
Animal.__proto__ == ??

var d = new Dog()
d instanceof Animal
d.__proto__ == ??

//Question:
function Car() {
	this.publicMethod = function() {
		//Do some stuff
	}
}
//Why  `publicMethod` is bad???