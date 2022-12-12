function square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
square.prototype.isSquare = function () {
  return this.a === this.b && this.a === this.c && this.a === this.d;
};

const square1 = new square(1, 1, 1, 1);
console.log(square1.isSquare());
