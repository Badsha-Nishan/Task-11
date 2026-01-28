// Object and String Task by PH

// String Task------------------------------

// Task-1:
// Count how many times a string has the letter a

// const letter =
//   "I'm a job holder. I'm From Bangladesh. I want to be a web developer.";

// const count = (letter.match(/a/g) || []).length;
// console.log(count);

// Task-2:
// Count how many times a string has the letter a or A

// const letter =
//   "is an Emmet abbreviation used in code editors like Visual Studio Code to instantly generate 20 words of placeholder text. Typing this in HTML and pressing TAb (or Enter in some editors) produces A 20-word string for web design mockups. ";

// const result = (letter.match(/a/gi) || []).length;
// console.log(result);

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

// const contain =
//   "is an Emmet abbreviation used in code editors like Visual Studio Code to instantly generate 20 words of placeholder text. Typing this in HTML and pressing Tab (or Enter in some editors) produces a 20-word string for web design mockups. ";

// if (
//   contain.includes("a") &&
//   contain.includes("e") &&
//   contain.includes("i") &&
//   contain.includes("o") &&
//   contain.includes("u")
// ) {
//   console.log("All the character is matching");
// } else {
//   console.log("some not matched");
// }

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// let x = "Badsha Nishan Is very cool man";
// const y = x.replace("man", "person"); //first value is search item, then replace item.
// console.log(y);

// Task-5:
// Capitalize Every first Letter of each word in a String

// Object Task---------------------------------------

// Task-1
// Access the golden rod color value in output.

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors.red);

// Task-2
// For this object below add a property named passenger capacity with value 5

// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };

// car.passenger = 5;

// console.log(car);

// Task-3
// Display the physics marks as output.

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics.marks)

// Task-4
// Count the number of properties.

// Input:

// let student = {
//   name: "Ariana Grande",
//   age: 21,
//   city: "Gaibandha",
//   isStudent: true,
// };

// console.log(Object.keys(student).length);

// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

// let myObject = {
//   name: "John Doe",
//   age: 25,
//   city: "Example City",
//   isStudent: true,
// };

// for (let val in myObject) {
//   console.log("key:", val, "| type:", typeof val);
// }
