function hello(thing) {
    console.log(this + " says hello " + thing);
}

let person: any;
person = { name: "Brendan Eich" };
person.hello = hello;

person.hello("world") // still desugars to person.hello.call(person, "world")

hello("world") // "[object DOMWindow]world"