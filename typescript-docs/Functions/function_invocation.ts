function hello(thing) {
    console.log(this + " says hello " + thing);
}

hello.call("bla", "world");

(function() {}) ();
(function() {}).call(this);