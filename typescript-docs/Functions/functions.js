// we can create named functions or anonymous ones in JavaScript and TypeScript
// Named function
function add(x) {
    if (x === void 0) { x = +y; }
    return x + y;
}
// Anonymous function
var myAdd = function (x, y) { return x + y; };
// Functions can refer to variable outside of the function body
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
