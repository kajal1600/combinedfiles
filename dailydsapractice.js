// var num= parseInt(prompt ("enter a number"))
// var sum=0
// function Add() {
//       for(let i=1;i<=num;i++){
//       sum=sum+i
//      }
//   return sum
//  }
//  Add()
//  document.write(`number sum is`,sum);


// program to calculate the are of triangle

// function area(height,width) {
//     let areaoftriangle=(height*width)
//     return areaoftriangle
// }
// console.log(area(5,4));

// program to display multipication of a table
// let number=5
// for(let i=1;i<=10;i++){
   
// let storedvariable= number*i
//  console.log(storedvariable);
 
// }


// console.log(arr);


// program to print all prime numbers in an interval


// var array = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]



// function isPrime(num) {
//   for (let start = 2; num > start; start++) {
//     if (num % start == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// let number=5
// let factorial=1
//     for(let i=1;i<=number;i++){
     
//       factorial=factorial*i
//     }
// console.log(factorial);

// let number = 5;
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//     factorial = factorial * i;
// }

// console.log(factorial);

// console.log(array.filter(isPrime))
    
// console.log(Math.sqrt(4));
// program to find the factorial of a number
// let sum = 0;

// function addition(num) {
//     num = prompt(`Enter a valid number`);
//     num = parseInt(num); // Convert input to integer

    

//     for (let i = 0; i <= num; i++) {
//         sum=sum+num(i); // Add each number from 0 to num to the sum array
//     }

//     return sum; // Return the sum array
// }

// console.log(addition());




// factor of a number

// var input = prompt("Enter the number to get factorial of: ");
//     var result = input;
//     for(var i=1;i < input;i++){
//        result = i * result;
//     }
//     document.write(result);


// program to display the sum of natural numbers




// find the lcm

// function lcm(a, b) {
//     // Find the maximum of the two numbers
//     let max = Math.max(a, b);

//     // Loop from max upwards
//     for (let i = max; ; i += max) {
//         // Check if i is divisible by both a and b
//         if (i % a === 0 && i % b === 0) {
//             return i; // Return the first number divisible by both
//         }
//     }
// }

// // // Example usage:
// console.log(lcm(12,18));


// find factors

// function findFactors(number) {
//     let factors = [];
    
//     // Loop from 1 to the number
//     for (let i = 1; i <= number; i++) {
//         // Check if i is a factor of the number
//         if (number % i === 0) {
//             factors.push(i); // If true, i is a factor
//         }
//     }
    
//     return factors;
// }

// // Example usage:
// console.log(findFactors(24));



// check number is armstrong or not?

// function Isarmstrong(num) {
//     const arr = num.toString(); // Corrected typo: 'tostring' should be 'toString'
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + Math.pow(parseInt(arr[i]), arr.length);
//     }
//     return sum === num;
// }

// console.log(Isarmstrong(153)); // Output: true
// console.log(Isarmstrong(123)); // Output: false


// program to make simple calculator to takes input from user

// // Function to perform addition
// function add(num1, num2) {
//     return num1 + num2;
// }

// // Function to perform subtraction
// function subtract(num1, num2) {
//     return num1 - num2;
// }

// // Function to perform multiplication
// function multiply(num1, num2) {
//     return num1 * num2;
// }

// // Function to perform division
// function divide(num1, num2) {
//     // Check if divisor is not zero
//     if (num2 !== 0) {
//         return num1 / num2;
//     } else {
//         return "Cannot divide by zero";
//     }
// }

// // Function to operate the calculator
// function calculator() {
//     // Get operation choice from user
//     let operation = prompt("Enter operation (+, -, *, /):");

//     // Get numbers from user
//     let number1 = parseFloat(prompt("Enter first number:"));
//     let number2 = parseFloat(prompt("Enter second number:"));

//     let result;

//     // Perform calculation based on operation choice
//     switch (operation) {
//         case '+':
//             result = add(number1, number2);
//             break;
//         case '-':
//             result = subtract(number1, number2);
//             break;
//         case '*':
//             result = multiply(number1, number2);
//             break;
//         case '/':
//             result = divide(number1, number2);
//             break;
//         default:
//             result = "Invalid operation";
//             break;
//     }

//     // Display the result to the user
//     console.log(`Result: ${result}`);
// }

// // Call the calculator function to start the program
// calculator();


// // program to find the sum of natural numbers
// function sumOfNaturalNumbers(n) {
//     // Initialize sum to store the cumulative sum
//     let sum = 0;

//     // Iterate through each natural number from 1 to n
//     for (let i = 1; i <= n; i++) {
//         sum += i; // Add current number i to sum
//     }

//     return sum; // Return the final sum
// }

// // Example usage:
// let n = 10; // Calculate sum of natural numbers up to 10
// let result = sumOfNaturalNumbers(n);
// console.log(`Sum of natural numbers up to ${n} is: ${result}`);


// program to  check if the numbers have same last digit


// function haveSameLastDigit(num1, num2) {
//     // Get the last digit of num1
//     let lastDigit1 = num1 / 10;

//     // Get the last digit of num2
//     let lastDigit2 = num2 / 10;

//     // Compare the last digits
//     if (lastDigit1 === lastDigit2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Example usage:
// let number1 = 123;
// let number2 = 456;

// if (haveSameLastDigit(number1, number2)) {
//     console.log(`Numbers ${number1} and ${number2} have the same last digit.`);
// } else {
//     console.log(`Numbers ${number1} and ${number2} do not have the same last digit.`);
// }



// hcf of a number

// let number1 = 36;
// let number2 = 60;
// while(number1 != number2){
//     if(number1 > number2) {
//         number1 -= number2;
//     }
//     else {
//         number2 -= number1;
//     }
// }

// console.log(`HCF is ${number1}`);

// to find the factor of a number

// function factor(num) {
//     let factors=[]
//     for(let i=0;i<=num;i++){
//     if(num%i===0){
// factors.push(i)
//     }
//     }
// return factors
// }
// console.log(factor(10));

// find the sum of natural number using recursion

// function sumOfNaturalNumbers(n) {
//     if (n <= 0) {
//         return 0; // Base case: sum is 0 for n <= 0
//     } else {
//         return n + sumOfNaturalNumbers(n - 1); // Recursive case: add n to sum of (n-1)
//     }
// }


// // Example usage:
// let n = 5;
// let sum_n = sumOfNaturalNumbers(n);
// console.log(`The sum of natural numbers from 1 to ${n} is: ${sum_n}`);

// javascript program to guess a random number


// function guessNumberGame() {
//     // Generate a random number between 1 and 100
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     console.log("Welcome to the Number Guessing Game!");
//     console.log("I have selected a random number between 1 and 100.");

//     let attempts = 0;
//     let guess;
    
//     while (true) {
//         guess = parseInt(prompt("Enter your guess (between 1 and 100):"));

//         if (isNaN(guess)) {
//             alert("Please enter a valid number.");
//             continue;
//         }

//         attempts++;

//         if (guess < randomNumber) {
//             console.log("Your guess is too low. Try again.");
//         } else if (guess > randomNumber) {
//             console.log("Your guess is too high. Try again.");
//         } else {
//             console.log(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`);
//             break;
//         }
//     }
// }

// // Call the function to start the game
// guessNumberGame();


// program to display fibnoacci sequence using recursion 
// Recursive function to find the nth Fibonacci number
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // Function to display the Fibonacci sequence up to a specified length
// function displayFibonacciSequence(length) {
//   for (let i = 0; i < length; i++) {
//     console.log(fibonacci(i));
//   }
// }

// // // Example usage
// const length = 10; // You can change this to display more or fewer numbers
// displayFibonacciSequence(length);


// program to find a factorial of a number using recursion
// function factorial(n) {
//   // Base case: factorial of 0 or 1 is 1
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   // Recursive case: n * factorial of (n-1)
//   return n * factorial(n - 1);
// }

// // Example usage
// const number = 5; // You can change this to any non-negative integer
// console.log(`The factorial of ${number} is: ${factorial(number)}`);


// program to sort words  characters alphabatically

// let str='hello aakash'
// let divided=str.split(' ');
// // console.log(divided);
// let stored=divided[0].split('').sort().join('')
// let second=divided[1].split('').sort().join('')
// console.log(`${stored}  ${second}`);


// replace character of a string
// let str='aakash'
// let result=str.split('')
// function replacing() {
// for(let i=0;i<=result.length;i++){
//   if(result[i]==='k'){
//      result[i]= 'h'
//   }
//   else if(result[i]==='h'){
//    result[i]= 'k'
//   }

// }
// return result.join('')
// }
// console.log(replacing());


// program to reverse a string
// let arr=[1,2,3]
// // let result=str.split('').reverse().join('')
// // console.log(result);
// let stroed=[]
// for(let i=arr.length-1;i>=0;i-- ){
//   stroed.push(arr[i])
// }
// console.log(stroed);

// program to convert first letter into uppercase


// let str=['hello',' i',' am',' very',' happy']
// let storing=str.split(' ')
// for(let i=0;i<storing.length;i++){
//   storing[i]=storing[i][0].toUpperCase()+storing[i].slice(1)

// }
// let result= storing.join(' ')
// console.log(result);

// var abc=str.charAt(0)
// var remain=str.slice(1)
// console.log(abc.toUpperCase()+remain);

// var result=str.map((c,i)=>{
//   return c.charAt(0).toUpperCase()+c.slice(1)
// })
// console.log(result);


// var arr=[3,5,67,8]
// function convert(arr){
// let obj={}
// arr.forEach(ele=>{
//     obj[ele]=ele
// })
// return obj
// }
// console.log(convert(arr))

// COUNT VOWELS IN STRING

// function countVowels(str) {
//   const vowels = 'aeiouAEIOU';
//   let count = 0;

//   for (let char of str) {
//       if (vowels.includes(char)) {
//           count++;
//       }
//   }

//   return count;
// }

// const exampleString = 'Hello World';
// console.log(`Number of vowels: ${countVowels(exampleString)}`);



// CONVERT DECIMAL TO BINARY NUMBER
// let number=12
// let result=number.toString(2)
// console.log(result);


// program find ASCII VALUE OF CHARACTER
// let char ='hello'
// let result=char.charCodeAt(2)
// console.log(result);

// let result=char.codePointAt(0)
// console.log(result);



// check palindrome

// let str='level'
// function palindrome(str) {
//   for(let i=0;i<str.length/2;i++){
//     if(str[i]!==str[str.length-1-i]){
//       return 'string is not palindrome'
//     }
  
//   }
//     return 'string is palinndrome'
// }
// console.log(palindrome(str));

