// In that file, define a variable named    
//   numbers that references this array:      


//      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]       

//   Like above, define a variable named      
//   filtered that references the result of   
//   numbers.filter().

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filtered = numbers.filter(function evenNumbers (number){
  return number % 2 === 0
});

console.log(filtered);

//   The function that you pass to the        
//   .filter() method will look something     
//   like this:

//      function evenNumbers (number) {       
//        return number % 2 === 0
//      }

//   Pay close attention to the syntax used   
//   throughout your solution. Use
//   console.log() to print the filtered      
//   array to the terminal.
