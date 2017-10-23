// interface StringArray {
//  [index: number]: string;
// }

// let myArray: StringArray;
let myArray = ["Bob", "Fred"];
console.log(myArray);

let myStr: string = myArray[0];
console.log(myStr);

// -> we can specify in the interface what values we are going to use while indexing, in this case e.g. index: number
// -> but we also do not have to use the indexing

// interface states that when a StringArray is indexed with a number, it will return a string.

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// Error: indexing with a 'string' will sometimes get you an Animal!
// interface NotOkay {
//  [x: number]: Animal;
//  [x: string]: Dog;
// }

// -> this will not work because Numeric index type 'Animal' is not assignable to string index type 'Dog'.

interface NumberDictionary {
  [index: string]: number;
  length: number; // ok, length is a number
  // name: string; // error, the type of 'name' is not a subtype of the indexer
}
