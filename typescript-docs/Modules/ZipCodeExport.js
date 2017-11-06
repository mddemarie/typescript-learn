"use strict";
exports.__esModule = true;
/// < reference path="export.ts" />
exports.numberRegexp = /^[0-9]+$/;
var ZipCodeExport = /** @class */ (function () {
    function ZipCodeExport() {
    }
    ZipCodeExport.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeExport;
}());
exports.ZipCodeExport = ZipCodeExport;
