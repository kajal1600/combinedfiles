// 1. Assignment: Convert Regular Function with Single Parameter
// function greet(name) {
//     return Hello, `${name}!`;
//   }

//   arrwo function
// const greet=(name)=>{
//    return  ` hello ${name}! `
// }
// console.log(greet("aakash"));

//   // 2. Assignment: Convert Regular Function with Multiple Parameters
//   function add(a, b) {
//     return a + b;
//   }

// arrow function
// const add=(a,b)=>a+b;
// console.log(add(2,3));
  
//   // 3. Assignment: Convert Regular Function with Block Body
//   function multiply(a, b) {
//     const result = a * b;
//     return result;
//   }
  
// const mul=(a,b)=>a*b
// console.log(mul(3,4));

//   // 4. Assignment: Convert Regular Function with Default Parameter
//   function power(base, exponent = 2) {
//     return Math.pow(base, exponent);
//   }
  
// const power=(base,exponent)=>Math.pow(base,exponent)
// console.log(power(8,3));

//   // 5. Assignment: Convert Regular Function with Rest Parameter
//   function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//   }

  
//   // 6. Assignment: Convert Regular Function Returning Object
//   function createPerson(name, age) {
//     return {
//       name: name,
//       age: age,
//     };
//   }
  
// const person=(name,age)=>{
//     return{
//     name:name,
//     age:age,
// }
// }
// console.log(person('cheery',14));

//   //  7. Assignment: Convert Regular Function Inside Map
//   const numbers = [1, 2, 3, 4, 5];
//   const squared = numbers.map(function (num) {
//     return num * num;
//   });


// const array = [1, 2, 3, 4, 5];
// const square = array.map((num) => {
//   return num * num;
// });
// console.log(square);


  
//   // 8. Assignment: Convert Regular Function Using arguments
//   function totalSum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       total += arguments[i];
//     }
//     return total;
//   }
  
//   console.log(totalSum(1, 2, 3, 4, 5)); // Outputs 15
  
//   // 9. Assignment: Convert Regular Function with try...catch
//   function divide(a, b) {
//     try {
//       return a / b;
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   // 10. Assignment: Convert Regular Function Inside forEach
//   const numbers2 = [1, 2, 3];
  
//   numbers2.forEach(function (num) {
//     console.log(num * 2);
//   });