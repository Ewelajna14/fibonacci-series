function fibonacci(num) {
if(num === 0) return 0
if(num === 1) return 1
else return fibonacci(num-2) + fibonacci(num-1)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: big number");
  console.log("=>", fibonacci(17));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// fibonacci(2) => 1
// number with second index has value 1
// every value is the sum of the two values preceding it
// 0, 1, 1, 2, 3, 5, 8
// 0+1 = 1, 1+1 =2, 1+2=3, 2+3=5, 3+5=8 ....
// indexes =  values
// 0=0, 1=1, 2=1, 3=2, 4=3, 5=5, 6=8, 7=13, 8...


// if I need to know value of index it means I need data in array
//  num = [index] egz [3]
// 
// And a written explanation of your solution
