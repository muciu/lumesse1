function Car() {
	
	var privateMileage = 0;

	//Private method
	function clearMileage() {
		privateMileage = 0;
	}

	this.drive = function(distance) {
		privateMileage += distance;
	}

	this.currentMileage = function () {
		return privateMileage;
	}

	this.putNewEngine = function() {
		clearMileage();
		//Do some other stuff
	}

}

var c = new Car();
c.drive(320);
c.drive(110);
c.currentMileage(); //outputs 430
c.clearMileage //undefined
c.privateMileage //undefined
