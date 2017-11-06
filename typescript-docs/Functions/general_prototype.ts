var person = {
    name: "Brendan Eich",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
}

var bind = function(func, thisValue) {
    return function() {
        return func.apply(thisValue, arguments);
    }
}

var boundHello = bind(person.hello, person);
boundHello() // "Brendan Eich says hello world"