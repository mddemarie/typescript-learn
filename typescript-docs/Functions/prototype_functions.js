var person = {
    name: "Brendan Eich",
    hello: function (thing) {
        console.log(this.name + " says hello " + thing);
    }
};
// var boundHello = function(thing) { return person.hello.call(person, thing); }
// boundHello("world");
person.hello.call(person, "world");
// -> 'this' can be anything passed to the function in form of argument or 
// it can be also one of the keys of the object (dictionary), then we use e.g. 'this.name' 
