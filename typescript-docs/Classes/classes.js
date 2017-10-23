var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greets = new Greeter("world");
console.log(greets.greet());
// this class has 3 members: property, contructor and method
// the word 'this' refers to one of the members of the class, in this case to 'greeting'
// How do we contruct the intance of the class Greeter? -> we use 'new' in front of Greeter and save it in a variable
