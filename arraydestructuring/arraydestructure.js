// 1. Array Destructuring
// const numbers = [1, 2, 3, 4, 5];
// const [abc, xyz, , pwq] = numbers;

// console.log(abc); 
// console.log(xyz); 
// console.log(pwq); 
// console.log('')

// 2. Object Destructuring
// const person = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     city: "New York",
//     state: "NY",
//     country: "USA",
//   },
// };

// const {
//   address: { city, dob },
//   age,
//   name
// } = person;
 


// console.log(name); // 
// console.log(age); //
// console.log(city); //
// console.log(dob); //

// 3. Renaming Variables
// const person2 = {
//   name: "John Doe",
//   age: 30,
// };

// const { name:fullName, age:years} = person2;

// console.log(fullName, years);
// console.log(name, age); 

// console.log(fullName); // John Doe
// console.log(years); // 30

// 4. Default Values
// const numbers2 = [1, 2];
// const [first1, second1, third1 = 3] = numbers2;

// console.log(first1); // 1
// console.log(second1); // 2
// console.log(third1);



// 1. Assignment: Array Destructuring
// const numbers = [1, 2, 3, 4, 5];

// const [first, second, , fourth] = numbers;

// console.log(first); 
// console.log(second); 
// console.log(fourth); 

// // 2. Assignment: Object Destructuring
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// const { firstName, lastName, age } = person;

// console.log(firstName); 
// console.log(lastName); 
// console.log(age); 

// // 3. Assignment: Default Values in Object Destructuring
// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const { firstName, lastName, age = 25 } = person;

// console.log(firstName); 
// console.log(lastName); 
// console.log(age); 

// // 4. Assignment: Nested Object Destructuring
// const user = {
//   id: 1,
//   username: "john_doe",
//   details: {
//     fullName: "John Doe",
//     email: "john@example.com",
//   },
// };

// const {
//   username,
//   details: { fullName, email },
// } = user;

// console.log(username); 
// console.log(fullName); 
// console.log(email); 

// // 5. Assignment: Destructuring in Function Parameters
// function printUser({ name, age }) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }

// const user = { name: "Bob", age: 30 };
// printUser(user); 

// // 6. Assignment: Rest in Array Destructuring
// const colors = ["red", "green", "blue", "yellow"];

// const [primary, secondary, ...restColors] = colors;

// console.log(primary); 
// console.log(secondary); 
// console.log(restColors); 

// // 7. Assignment: Rest in Object Destructuring
// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "silver",
// };

// const { make, model, ...otherDetails } = car;

// console.log(make); 
// console.log(model);
// console.log(otherDetails); 

// // 8. Assignment: Destructuring with Function Return
// function getCoordinates() {
//   return [10, 20];
// }

// const [x, y] = getCoordinates();

// console.log(x); // Output: 10
// console.log(y); // Output: 20

// // 9. Assignment: Destructuring with Aliases
// const person = {
//   first: "John",
//   last: "Doe",
// };

// const { first: firstName, last: lastName } = person;

// console.log(firstName); // Output: John
// console.log(lastName); // Output: Doe

// // 10. Assignment: Destructuring in Nested Arrays
// // Destructuring in Nested Arrays
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const [[a, b, c], [d, e, f], [g, h, i]] = matrix;

// console.log(a, b, c); // Output: 1 2 3
// console.log(d, e, f); // Output: 4 5 6
// console.log(g, h, i); // Output: 7 8 9

// // 11. Assignment: Destructuring with Functions and Objects
// const getUser = () => {
//   return {
//     id: 1,
//     username: "john_doe",
//     details: {
//       fullName: "John Doe",
//       email: "john@example.com",
//     },
//   };
// };

// const {
//   id,
//   username,
//   details: { fullName, email },
// } = getUser();

// console.log(id); // Output: 1
// console.log(username); // Output: john_doe
// console.log(fullName); // Output: John Doe
// console.log(email); // Output: john@example.com

// // 12. Assignment: Destructuring with Default Values and Functions
// const getPerson = () => {
//   return {
//     name: "Alice",
//     age: undefined,
//   };
// };

// const { name, age = 25 } = getPerson();

// console.log(name); // Output: Alice
// console.log(age); // Output: 25 (default value)

// // 13. Assignment: Deep Destructuring in Nested Arrays
// // Deep Destructuring in Nested Arrays
// const nestedMatrix = [
//   [1, [2, 3], 4],
//   [5, [6, 7], 8],
//   [9, [10, 11], 12],
// ];

// const [[a, [b, c], d], [e, [f, g], h], [i, [j, k], l]] = nestedMatrix;

// console.log(a, b, c, d); // Output: 1 2 3 4
// console.log(e, f, g, h); // Output: 5 6 7 8
// console.log(i, j, k, l); // Output: 9 10 11 12

// // 14. Assignment: Destructuring in Function Parameters with Default Values
// const printDetails = ({ name, age = 30, country = "USA" }) => {
//   console.log(Name: ${name}, Age: ${age}, Country: ${country});
// };

// const personDetails = { name: "Bob", age: 25 };

// printDetails(personDetails); // Output: Name: Bob, Age: 25, Country: USA

// // 15. Assignment: Destructuring in a For-of Loop
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// for (const { id, name } of users) {
//   console.log(User ID: ${id}, Name: ${name});
// }