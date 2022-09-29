//  function totalArrayLengths(arr) {
//    let arrayLengths = [];
//    for (let index = 0,; index < arr.length; index++) {
//      arrayLengths.push(arr[index].length);
//    }
//    return arrayLengths;}
//  console.log(totalArrayLengths(["boo", "doooo", "hoo", "ro"]));


// for (/*initial conditions*/ ;/*checking */;/*after checking */) {
//   //bodyfunc:    arrayLengths.push(arr[index].length);
//      }

//      /*initial conditions*/
//      while(/*checking */){
//       //bodyfunc
//       /*after checking */
//      }

const arr= ["boo", "doooo", "hoo", "ro"]
    let index = 0; 
    let arrayLengths = [];
    while ( index < arr.length ){
    arrayLengths.push(arr[index].length);
    index++}
    console.log(arrayLengths);
