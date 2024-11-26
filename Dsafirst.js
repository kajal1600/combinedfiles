// maximum find out
// let arr=[1,2,3,22,4,44]
// let abc=arr.sort((a,b)=>{
//     return b-a
// })
// console.log(arr[0]);



// max method
// let arr=[2,33,44,11,55]
// let maximum=Math.max(...arr)
// console.log(maximum);


// maximum
// let arr=[22,11,44,55,667]
// let maximum=[Infinity]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<maximum)
//         maximum=arr[i]
// }

// console.log(maximum);

// check palindrom
// let str=["oyo","level","ullu",'kajal']

// function isPalindrome(word) {
//     return word === word.split('').reverse().join('');
// }

// str.forEach(word => {
//     console.log(`${word} is palindrome: ${isPalindrome(word)}`);
// });


// reverse of string
// let str='kajal'
// let abc=str.split('').reverse().join('')
// console.log(abc);

// prime no.
// function prime(num) {
//     if (num <= 1) {
//         return 'No. is not prime'; // Numbers less than or equal to 1 are not prime
//     }
    
//     for (let i = 2; i <= Math.sqrt(num); i++) { // Check divisors up to the square root of the number
//         if (num % i === 0) {
//             return 'No. is not prime'; // If divisible by any number other than 1 and itself, not prime
//         }
//     }
    
//     return 'Number is prime'; // If no divisors found, the number is prime
// }

// console.log(prime(4));  // No. is not prime
// console.log(prime(7));  // Number is prime
// console.log(prime(11)); // Number is prime


// nested array largest
// let arr=[[1,2],[66,88],[99]]
// let convertintosinglearray=arr.flat()
// let largest=Math.max(...convertintosinglearray)
// console.log(largest);


// create fibbonacci sequence

// Function to generate Fibonacci sequence up to 'n' numbers
// function fibonacci(n) {
//     let fibSequence = [0, 1]; // Start the sequence with 0 and 1

//     for (let i = 2; i < n; i++) {
//         fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]); // Add the last two numbers
//     }

//     return fibSequence;
// }

// console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// capitalozed the first letter 
// let str='kajal,aakash,lalit'
// let brokestr=str.split(',')
// let conver=brokestr.map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
// let final=conver.join(',')
// console.log(final);


// to empty an array
// let arr=[1,2,3,4,5]
// let empty=arr.length=0
// console.log(arr);

// let arr=[2,3,4,5]
//  arr=[]
//  console.log(arr);

// let empty=arr.splice(0,arr.length)
// console.log(arr);

// while(arr.length){
//     arr.pop()
// }
// console.log(arr);


// add element to start of the array
// let array=[2,3,4,5]
// let add=array.unshift(10)
// console.log(array);



// remove duplicasy from array 
// let arr=[1,2,2,33,33,4,5]
// let uniquearr=[...new Set(arr)]
// console.log(uniquearr);


// let unique=arr.filter((item,index)=>arr.indexOf(item)===index)
// console.log(unique);

// let arr=[1,2,3,4]
// let arr2=[5,3,6,7]
// let mergearray=[...arr,...arr2]
// let removedupilicasy=[...new Set(mergearray)]
// console.log(removedupilicasy);


// compare element of two arrays
// let arr=[2,3,4,5,56,77]
// let arr2=[44,55,22,11,88,3]
// let checkincludes=arr.some((value)=>arr2.includes(value))

// console.log(checkincludes);


// to reverse a string
// let str='hello'
// let reverse=str.split('').reverse().join(',')
// console.log(reverse);

// check no.of occurence
// let  str='hello'
// let checkfor='o'
// let count=0
// for(let i=0;i<str.length;i++){
//     if(str[i]===checkfor){
//         count++
//     }
// }
// console.log(count);


// let str='hello,hemlata,you,are,so,cute'
// let convertintoarray=str.split(',')
// let result=convertintoarray.map((word)=>word.charAt(0).toUpperCase()+word.slice(1).toLocaleLowerCase())


// console.log(result);


// count no.of vowels
// function vowels(word) {
//     let vowels='aeiouAEIOU'
//     let count=0
//     for(let i=0;i<word.length;i++){
//         if(vowels.includes(word[i]))
//             count++
//     }
// return count
// }
// console.log(vowels("hellouuuu"));

// let obj={
//     person:"kajal",
//     age:18
// }

// let obj=new Object()
// obj.name='hema',
// obj.age=18
// console.log(obj);


// function funcobj(name,age) {
//     this.name=name,
//     this.age=age
// }
// let obj1=new funcobj('kaju',18)
// console.log(obj1);


let str='khushi,lalit,kajal'
let broke=str.split(',')
let foundvar='sumit'
let store=[]
for(let i=0;i<broke.length;i++){
    if(broke[i]===foundvar){
        store.push(broke[i])
        console.log(`the index of ${foundvar} is ${i}`);
        
        
    }
}
console.log(store);







 








