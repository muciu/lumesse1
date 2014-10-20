// ECMAScript 3 compatible approaches
 
// Set properties
newObject.someKey = "Hello World";
 
// Get properties
var value = newObject.someKey;
 
 
// Set properties
newObject["someKey"] = "Hello World";
 
// Get properties
var value = newObject["someKey"];
 
 
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
 
// 3. Object.defineProperty
 
// Set properties
Object.defineProperty( newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true, //default false
    enumerable: true,//default false
    configurable: true//default false
});
 

// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );
 
// Populate the object with properties
defineProp( person, "car",  "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );
 
console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}
 