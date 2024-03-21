// Declaring and initializing variables
var firstName = "John";
var lastName = "Doe";
var age = 30;
var isStudent = false;

// Displaying the values of variables
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Modifying variables
age = age + 5; // Increasing age by 5
isStudent = true; // Updating isStudent to true

// Displaying the modified values of variables
console.log("Age after 5 years:", age);
console.log("Is Student now:", isStudent);


// // Using var
var x = 10;
console.log("Initial value of x (using var):", x); // Output: 10

if (true) {
    var x = 20; // Reassigning x within the block
    console.log("Value of x inside the block (using var):", x); // Output: 20
}

// console.log("Value of x outside the block (using var):", x); // Output: 20

// // Using let
// let y = 30;
// console.log("Initial value of y (using let):", y); // Output: 30

// if (true) {
//     let y = 40; // Declaring a new y variable within the block
//     console.log("Value of y inside the block (using let):", y); // Output: 40
// }

// console.log("Value of y outside the block (using let):", y); // Output: 30

// // Using const
// const z = 50;
// console.log("Value of z (using const):", z); // Output: 50

// // Attempting to reassign a value to a constant (will result in an error)
// // z = 60; // Uncommenting this line will cause an error

// // Declaring an object with const
// const person = {
//     name: "Alice",
//     age: 25
// };
// console.log("Initial value of person (using const):", person);

// // Modifying the properties of the object (allowed with const)
// person.age = 30;
// console.log("Modified value of person (using const):", person);
