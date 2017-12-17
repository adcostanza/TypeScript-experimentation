var Math_ = (function () {
    function Math_() {
    }
    Math_.prototype.add = function (x, y) {
        return x + y;
    };
    Math_.prototype.subtract = function (x, y) {
        return x - y;
    };
    Math_.prototype.multiply = function (x, y, z) {
        return x * y * z;
    };
    Math_.prototype.xyz = function (x) {
        return x;
    };
    return Math_;
}());
var AJ = (function () {
    function AJ() {
    }
    AJ.prototype.add = function (a, j) {
        return a + j;
    };
    return AJ;
}());
var m = new Math_();
console.log(m.add(2, 3));
console.log(m.subtract(4, 1));
console.log(m.xyz(3));
var aj = new AJ();
//# sourceMappingURL=math.js.map