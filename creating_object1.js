//Object literarl
var newObject = {}; 

var anotherObject = new function() {
	this.var1 = 'value1';
	this.method = function() {
		console.log('some method');
	}
}
 
//Creates object using expicit prototype
var newObject = Object.create(Object.prototype);


var newObjectWOprototype = Object.create(null);
 
// or creating object wrapper for given value
var newObject = new Object(); //empty object
var newString = new Object("Some text") // new String(...)
var newNumber = new Object(34) // new Number(...)