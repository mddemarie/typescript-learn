// interface SearchFunc {
//  (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
var mySearch = function (src, sub) {
    var result = src.search(sub);
    console.log(result);
    return result > -1;
};
// -> this code will work with defined properties or without them using var mySearch with specified data type, e. g. in this case 'Boolean'
mySearch("abc", "a");
// -> .search searches if the given string is inside of the other string, this can return only 0 or -1; 0 for True and -1 for False
console.log("kjkj".search("kj"));
