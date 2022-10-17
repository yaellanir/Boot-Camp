
// question 1

var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}
b = 5;
return otherFunction;// ? console.log (result); = the answer is 5
}
var firstResult = someFunction(9);
var result = firstResult(2);


question 2
var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a);
// 1

// question 3 

let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}
// 3