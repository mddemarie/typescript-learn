// we can create named functions or anonymous ones in JavaScript and TypeScript

// Named function
function add(x + y) {
  return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y; };

// Functions can refer to variable outside of the function body

let z = 100;

function addToZ(x, y) {
  return x + y + z;
}
