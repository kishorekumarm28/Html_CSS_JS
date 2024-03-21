const array1 = [1, 2, 3];
const array2 = [4, 5, 6];


const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]



const numbers = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}
const result = sum(...numbers);
console.log(result); // Output: 6
