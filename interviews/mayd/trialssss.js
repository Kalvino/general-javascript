var x = 0;
var C = /** @class */ (function () {
    function C() {
        this.x = "hello";
    }
    C.prototype.m = function () {
        // This is trying to modify 'x' from line 1, not the class property
        x = 4;
        return x;
    };
    return C;
}());
var c = new C();
console.log(c.x);
console.log(c.m());
console.log(x);


