class Greeter {
  greeting: string; // property called greeting
  constructor(message: string) {
    this.greeting = message;
  }
  greet() { // method greet()
    return "Hello, " + this.greeting;
  }
}

let greets = new Greeter("world");
console.log(greets.greet());

// this class has 3 members: property, contructor and method
// the word 'this' refers to one of the members of the class, in this case to 'greeting'
// How do we contruct the intance of the class Greeter? -> we use 'new' in front of Greeter and save it in a variable
