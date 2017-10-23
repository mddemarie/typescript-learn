// in JavaScript
var a = 10;

function f() {
  var message = "Hello, world!";
  return message;
}

function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  }
}

var g = f();
g(); // returns '11'
// this above function g will modify var a whenever it is called

function f() {
  var a = 1;

  a = 2;
  var b = g();
  a = 3;

  return b;

  function g() {
    return a;
  }
}

f(); // returns '2'

// Scoping rules in TypeScript

function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }
  return x;
}

f(true); // returns '10'
f(false); // returns 'undefined'

// The problem with the var: there is no error if we declare the same variable multiple times, see below
function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}
// the var i will be accindently overwritten by i that is in in the inside loop

// Variable capturing quirks
for (var i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i); }, 100 * i);
}
// -> this will execute the function setTimeout after certain number of miliseconds
// output will be:
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// instead of numbers from 0 to 9

// Let declarations
let hello = 'Hello!';
// -> we use this syntax because JavaScript var has above described problems

function f(input: boolean) {
  let a = 100;

  if (input) {
    // Still okay to reference 'a'
    let b = a + 1
    return b;
  }
  // Error: 'b' doesn't exist here
  return b;
}

// -> a’s scope is limited to the body of f while b’s scope is limited to the containing if statement’s block.

try {
  throw "oh no!";
}
catch (e) {
  console.log("Oh well.");
}

// Error: 'e' doesn't exist here
console.log(e)

a++; // illegal to use 'a' before it's declared;
let a;

function foo() {
  // okay to capture 'a'
  return a;
}

// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();
let a;

// Re-declarations and Shadowing

// Javascript:
function f(x) {
  var x;
  var x;

  if (true) {
    var x;
  }
}
// -> usually the source of bugs!!!

let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope

function f(x) {
  let x = 100; // error: interferes with parameter declaration
}

function g() {
  let x = 100;
  var x = 100; // error: can't have both declarations of 'x'
}

function fl(condition, x) {
  if (condition) {
    let x = 100;
    return x;
  }
  return x;
}

fl(false, 0); // returns '0'
fl(true, 0); // returns '100'

function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
}

// Block-scoped variable capturing
function theCityThatAlwaysSleeps() {
  let getCity;

  if (true) {
    let city = "Seattle";
    getCity = function() {
      return city;
    }
  }
  return getCity();
}

for (let i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i); }, 100 * 1);
}
// Output:
// 0
// 1
// 2
// 3
// 4
// 5
// etc.

// CONST declarations
const numLivesForCat = 9;
// = they have the same scoping as let, but you can't re-assign to them

const numLivesForCat = 9;
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat,
}

// Error
kitty = {
  name: "Danielle",
  numLives: numLivesForCat
};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

// let vs. const
// Destructuring
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

// much more convinient indexing
first = input[0]
second = input[1]

// swap variables
[first, second] = [second, first]

function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f([1, 2]);

// it is possible to create a variable for the remaining items in a list using ...
let [first, ...rest] = [1, 2, 3, 4]
console.log(first); // outputs 1
console.log(rest); // outputs 2, 3, 4
let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1

let [, second, , fourth] = [1, 2, 3, 4];

// Object destructuring
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};

let { a, b } = o;
({a, b} = { a: "baz", b: 101 });

let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

// Property renaming
let { a: newName1, b: newName2 } = o;

let newName1 = o.a;
let newName2 = o.b;

let { a, b }: { a: string, b: number } = o;

function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
}

// Function declarations
type C = { a: string, b?: number }
function f({ a, b }: C): void {
  // ...
}

function f({ a, b }) = { a: "", b: 0 }): void {
  // ...
}
f(); // ok, default to { a: "", b: 0 }

function f({ a, b = 0 }) = { a: ""}): void {
  // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to { a: "" }, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument

// Spread
// = the opposite of destructuring
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];

// output:
// [0, 1, 2, 3, 4, 5]

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

// BUT: this will overwrite food in defaults what we do not want:
let defaults = { food: "spicy", price: "$$", ambiance: "noisy"};
let search = { food: "rich", ...defaults};

class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
clone.m(); // error!
