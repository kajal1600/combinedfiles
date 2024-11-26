// 1. Assignment: Array Spread
// const numbers = [1, 2, 3];
// const moreNumbers = [...numbers, 4, 5];

// console.log(moreNumbers); // Output: [1, 2, 3, 4, 5]

// // 2. Assignment: Object Spread
// const person = { name: "John", age: 30 };
// const updatedPerson = { ...person, age: 31 };

// console.log(updatedPerson); // Output: { name: "John", age: 31 }

// // 3. Assignment: Merging Arrays with Spread
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray = [...arr1, ...arr2];

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// // 4. Assignment: Copying an Array with Spread
// const originalArray = [10, 20, 30];
// const copiedArray = [...originalArray];

// console.log(copiedArray); // Output: [10, 20, 30]

// // 5. Assignment: Combining Spread and Rest Parameters
// function mergeArrays(...arrays) {
//   return [].concat(...arrays);
// }

// const result = mergeArrays([1, 2], [3, 4], [5, 6]);
// console.log(result); // Output: [1, 2, 3, 4, 5, 6]

// // 6. Assignment: Using Spread in Function Arguments
// function sumNumbers(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];
// const sum = sumNumbers(...numbers);

// console.log(sum); // Output: 6

// // 7. Assignment: Cloning an Object with Nested Properties
// const originalObject = {
//   name: "John",
//   address: { city: "New York", zip: "10001" },
// };

// const clonedObject = {
//   ...originalObject,
//   address: { ...originalObject.address },
// };

// console.log(clonedObject);

// // 8. Assignment: Using Spread with Strings
// const str = "Hello";
// const chars = [...str];

// console.log(chars); // Output: ["H", "e", "l", "l", "o"]

// // 9. Assignment: Combining Spread and Object Destructuring
// const person = { name: "Alice", age: 25, country: "USA" };
// const { name, ...rest } = person;

// console.log(name); // Output: Alice
// console.log(rest); // Output: { age: 25, country: "USA" }

// // 10. Assignment: Updating an Array Element with Spread
// const numbers = [1, 2, 3, 4, 5];
// const updatedNumbers = [...numbers.slice(0, 2), 10, ...numbers.slice(3)];

// console.log(updatedNumbers); // Output: [1, 2, 10, 4, 5]

// // 11. Assignment: Dynamic Object Merging
// function mergeObjects(baseObject, ...updates) {
//   return { ...baseObject, ...Object.assign({}, ...updates) };
// }

// const defaultConfig = { timeout: 5000, maxRetries: 3 };
// const userConfig = { maxRetries: 5, logLevel: "debug" };

// const mergedConfig = mergeObjects(defaultConfig, userConfig);
// console.log(mergedConfig);

// // 12. Assignment: Deep Copying an Object with Nested Arrays
// const originalObject = {
//   name: "John",
//   details: {
//     hobbies: ["reading", "coding"],
//     scores: [80, 90, 95],
//   },
// };

// const deepCopy = {
//   ...originalObject,
//   details: {
//     ...originalObject.details,
//     hobbies: [...originalObject.details.hobbies],
//     scores: [...originalObject.details.scores],
//   },
// };

// console.log(deepCopy);

// // 13. Assignment: Merging Arrays with Complex Objects
// const array1 = [{ id: 1, name: "Alice" }];
// const array2 = [{ id: 2, name: "Bob" }];

// const mergedArray = [...array1, ...array2];
// console.log(mergedArray);

// // 14. Assignment: Updating Nested Array Elements
// const users = [
//   { id: 1, name: "Alice", friends: ["Bob", "Charlie"] },
//   { id: 2, name: "Bob", friends: ["Alice", "David"] },
// ];

// const updatedUsers = users.map((user) => ({
//   ...user,
//   friends: user.id === 1 ? [...user.friends, "Eve"] : user.friends,
// }));

// console.log(updatedUsers);

// // 15. Assignment: Creating a Shallow Copy of an Array of Objects
// const originalArray = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];
// const copiedArray = [...originalArray];

// console.log(copiedArray);

// // 16. Assignment: Spreading Elements in a Function Call
// function calculateSum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];
// const sum = calculateSum(...numbers);

// console.log(sum);

// // 17. Assignment: Using Spread to Concatenate Arrays Conditionally
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const shouldConcatenate = true;

// const result = shouldConcatenate ? [...array1, ...array2] : array1;

// console.log(result);

// // 18. Assignment: Extracting Specific Properties from an Object
// const user = { id: 1, name: "John", email: "john@example.com" };

// const { id, ...rest } = user;
// console.log(rest);

// // 19. Assignment: Merging Arrays of Objects with a Key
// const array1 = [{ id: 1, value: "A" }];
// const array2 = [{ id: 2, value: "B" }];

// const mergedArray = [...array1, ...array2].reduce((acc, obj) => {
//   const existingIndex = acc.findIndex((item) => item.id === obj.id);
//   if (existingIndex !== -1) {
//     acc[existingIndex] = { ...acc[existingIndex], ...obj };
//   } else {
//     acc.push(obj);
//   }
//   return acc;
// }, []);

// console.log(mergedArray);

// // 20. Assignment: Using Spread with Sets
// const set1 = new Set([1, 2, 3]);
// const set2 = new Set([3, 4, 5]);

// const unionSet = new Set([...set1, ...set2]);
// console.log(unionSet)