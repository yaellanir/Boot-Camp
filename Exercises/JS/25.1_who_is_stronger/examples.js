// ? call = passes arguments 
// ? apply = takes an array as an argument 
// ? bind = just like call and apply you can
// ? borrow functionalities from other libraries 
// ? on your object temporarily - bind binds it 
//! example 1 for call
// let add = function (c){
//   console.log(this.a + this.b);
// }
// let obj = {
//   a:1,
//   b:2
// };
// add.call(obj,3)

//! example 2 for call
// let argsToArray = function (){
//   [].slice.call(arguments);
// };
// argsToArray(1,2,3)


//! example 3 for call
// let mamal = function (){
  // this.legs = legs;
// }
//  let cat = function (legs, isDomesticated) {
//   mamal.call(this,legs);
//   this.isDomesticated = isDomesticated;
//  };

// let lion  = new cat (4, false);
// console.log(lion)

//! example 1 for apply
// arrays do not have the function of min ..
// min is part of the Math folder so we can apply it to what we need 
// let numArray = [1, 2, 3, 4, 5];
// Math.min.apply(null, numArray)

//! example 1 for bind
// let button = function (content, isDomesticated) {
//   this.content = content;};
  
//   button.prototype.click = function (){
//     console.log(`${this.content} clicked`);
//   }

//   let newButton = new button ('add')
//   let boundButton = newButton.click.bind(newButton)
// boundButton();

//! example 2 for bind
// let myObj = {
//   asyncGet(callbackFunc){
//     callbackFunc()
//   },
// parse(){
//   console.log('parse called');
// },
// render(){
//   this.asyncGet(function(){
//     this.parse();
//   }.bind(this));
// }
// };    ---- binding outer this to inner this





