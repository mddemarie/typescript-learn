// interface StringArray {
//  [index: number]: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let myArray: StringArray;
var myArray = ["Bob", "Fred"];
console.log(myArray);
var myStr = myArray[0];
console.log(myStr);
// -> we can specify in the interface what values we are going to use while indexing, in this case e.g. index: number
// -> but we also do not have to use the indexing
// interface states that when a StringArray is indexed with a number, it will return a string.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
