// Creating an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "swimming", "traveling"],
    address: {
      street: "123 Main Street",
      city: "Anytown",
      country: "USA"
    }
  };
  
  // Accessing object properties
  console.log(person.firstName); // Output: John
  console.log(person.age); // Output: 30
  console.log(person.address.city); // Output: Anytown
  
  // Modifying object properties
  person.age = 35;
  person.hobbies.push("gardening");
  console.log(person.age); // Output: 35
  console.log(person.hobbies); // Output: ["reading", "swimming", "traveling", "gardening"]
  
  // Creating an array of objects
  let students = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 20 }
  ];
  
  // Accessing array elements
  console.log(students[0].name); // Output: Alice
  console.log(students[1].age); // Output: 25
  
  // Modifying array elements
  students[2].age = 21;
  console.log(students[2].age); // Output: 21
  