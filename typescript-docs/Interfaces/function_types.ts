// interface SearchFunc {
//  (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
let mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  console.log(result);
  return result > -1;
}

// -> this code will work with defined properties or without them using var mySearch with specified data type, e. g. in this case 'Boolean'
// -> if I do not want to use the boolean for both parameters src and sub, I do not have to say this is boolean, in that case we remove the colon

mySearch("abc", "a");

// -> .search searches if the given string is inside of the other string, this can return only 0 or -1; 0 for True and -1 for False
console.log("kjkj".search("kj"));
