let age = 20;

let message = (age >= 18) ? "You are an adult" : "You are a minor";

console.log(message); // Output: You are an adult






// Original array
let numbers = [5, -3, 10, -7, 2];

// Function to calculate square of a number
function square(x) {
  return x * x;
}

// Function to calculate cube of a number
function cube(x) {
  return x * x * x;
}

// Function to check if a number is negative
function isNegative(x) {
  return x < 0;
}

// Using ternary operator to apply different functions based on the condition
let result = numbers.map(num => isNegative(num) ? cube(num) : square(num));

console.log(result); // Output: [25, -27, 100, -343, 4]
