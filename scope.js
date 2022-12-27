// node
// const a = 4 // a is a global variable, it can be accessed by the functions below

// function foo () {
//   const b = a * 3 // b cannot be accessed outside foo function, but can be accessed by functions defined inside foo

//   function bar (c) {
//     const b = 2 // another `b` variable is created inside bar function scope  
//     // the changes to this new `b` variable don't affect the old `b` variable  
//     console.log(a, b, c)
//   }
  
//   bar(b * 4);
// }


// foo() // 4, 2, 48

// IIFE, Immediately Invoked Function Expression, 
// - is a common pattern for creating local scopes.

// Example:

// (function () { // the function expression is surrounded by parenthesis  
//   // variables defined here
//   // can't be accessed outside
// })() // the function is immediately invoked 

// let d = 24;

// let d1 = (function (d) {
//   d = d + 3
//   return d
// })(d)
// d1
// d

// The challenge:

const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);   

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()

// Use your knowledge of the variables' scope and place the following code inside one of the functions in scope.js so the output is a: 1, b: 8, c: 6  

// console.log(`a: ${a}, b: ${b}, c: ${c}`);   
