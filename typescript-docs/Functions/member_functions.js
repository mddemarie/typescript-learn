var person = {
    name: "Brendan Eich",
    hello: function (thing) {
        console.log(this + " says hello " + thing);
    }
};
person.hello.call(person.name, "world");
// -> inside of the object (dictionary) can be a function that can be called 
