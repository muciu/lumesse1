//QUESTION - how to make it working ?
function Car() {
	
	var privateMileage = 0;

	//Private method
	function clearMileage() {
		privateMileage = 0;
	}

}


Car.prototype.drive = function(distance) {
	// ?? privateMileage += distance;
}
Car.prototype.currentMileage = function () {
	// ?? return privateMileage;
}
Car.prototype.putNewEngine = function() {
	//  ?? clearMileage();
	//Do some other stuff
}

var c = new Car();
c.drive(320);
c.drive(110);
c.currentMileage(); //outputs 430
c.clearMileage //undefined
c.privateMileage //undefined
