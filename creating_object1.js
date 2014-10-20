//Object literarl
var newObject = {}; 
 
//Creates object using expicit prototype
var newObject = Object.create(Object.prototype);


var newObjectWOprototype = Object.create(null);
 
// or creating object wrapper for given value
var newObject = new Object(); //empty object
var newString = new Object("Some text") // new String(...)
var newNumber = new Object(34) // new Number(...)