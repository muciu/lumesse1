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