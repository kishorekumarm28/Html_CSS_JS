let numbers = [2, 4, 6, 8, 10];

// Adding an element to the end of the array
numbers.push(12);
console.log(numbers); // Output: [2, 4, 6, 8, 10, 12]

// Removing the last element of the array
numbers.pop();
console.log(numbers); // Output: [2, 4, 6, 8, 10]

// Adding an element to the beginning of the array
numbers.unshift(0);
console.log(numbers); // Output: [0, 2, 4, 6, 8, 10]

// Removing the first element of the array
numbers.shift();
console.log(numbers); // Output: [2, 4, 6, 8, 10]

// Finding the index of an element in the array
let index = numbers.indexOf(6);
console.log(index); // Output: 2

// Removing elements from an array based on index
numbers.splice(index, 2);
console.log(numbers); // Output: [2, 4, 10]

// Reversing the order of elements in the array
numbers.reverse();
console.log(numbers); // Output: [10, 4, 2]

// Sorting the elements of the array
numbers.sort();
console.log(numbers); // Output: [10, 2, 4]



// Filter: Creating a new array with numbers greater than 5
let filteredNumbers = numbers.filter(num => num > 5);
console.log(filteredNumbers); // Output: [6, 8, 10]

// ForEach: Logging each element of the array
numbers.forEach(num => console.log(num)); // Output: 2, 4, 6, 8, 10

// Map: Creating a new array with each element doubled
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [4, 8, 12, 16, 20]



