
// 1.normal number 2.array 3. string 4. object
//ques 1.print alertnate element from an array.
//input arr=[2,3,4,5,67,8] expected output [2,4,67]
//ques 2.find odd numbers from first 100 naturals numbers
// ques 3. find the sum of first 10 naturals numbers
//4.find odd numbers from first 100 naturals numbers  then add all these vales
//5.find the sum of an array elements
// input arr=[4,4,6,7,8]  output 29
//6.mutiple by 10 in all elements in an array
//7.multiply by 10 in elements which value is greater then 5
//8.find the maximun and minimun element from an array
//9. find the second maximun and minimun element from an array
//10.find the prime numbers from first 20 natural numbers 
//11. find the prime elements from an array

//ques 1.print alertnate element from an array.
// let array=[2,3,4,5,6,7,8,9,2]
// let string=''
// for(let i=0;i<array.length;i+=2){
//     string=string+(array[i]+' ')      isme .push bhi use kr skte h
 
// }
// console.log(string);


//ques 2.find odd numbers from first 100 naturals numbers
// for(let i=0;i<=100;i++){
//     if(i%2!==0){
//         console.log(i);
//     }

// }

// ques 3. find the sum of first 10 naturals numbers
// let totalSum=0
// for(let i=1;i<=10;i++){
//     totalSum=totalSum+i

// }
// console.log(totalSum);

//4.find odd numbers from first 100 naturals numbers  then add all these vales
// let output=0
// for(let i=1;i<=100;i+=2){
    // console.log(i);
// output=output+i

// }
// console.log(output);

//5.find the sum of an array elements
// let arr=[4,4,6,7,8]
// let sum=0
//  let n=arr.length

// for(let i=0;i<n;i++){
//     sum=sum+arr[i]

// }
// console.log(sum);

//6.mutiple by 10 in all elements in an array
// let arr=[1,2,3,4,5,6,7]
// let mul=''
// for(let i=0;i<arr.length;i++){
//     mul=mul+(10*arr[i]+' ')

// }
    
// console.log(mul);

//7.multiply by 10 in elements which value is greater then 5
// let array=[2,3,4,5,6,7,8,9,2]
// let xyz=array.filter(x=>{
//     return x>5
    
// }).map(y=>{
//   return y*10
// })
// console.log(xyz);

//8.find the maximun and minimun element from an array

// let array=[1,2,3,44,5,5,66,77,100]
// let sorting=array.sort((a,b)=>{
//  return a-b;
// })[array.length-1]
// console.log(sorting);

// let array=[1,2,3,44,5,5,66,77,100]
// function second(array){
// let max=array[0]
// let secondmax=Infinity;
// for(let i=0;i<array.length;i++){
//   if(array[i]<max){
//     secondmax=max;
//     max=array[i]
//   }
//   else if(array[i]<secondmax && array[i]!==max){
//     secondmax=array[i]
//   }
// }
// return secondmax
// }
// console.log(second(array));

// let array=[10,4,2,5,6,7,8,9]
// let minimum=array[0]
// for(let i=0;i<array.length;i++){
//   if(array[i]<minimum){
//     minimum=array[i]
//   }
// }
// console.log(minimum);

//9. find the second maximun and minimun element from an array
// let array=[1,2,3,4,5,6,7]
// let secondmin=array.sort((a,b)=>{
//   return a-b
// })[1]
// console.log(secondmin);

// let array=[2,3,44,55,66,77]
// let secondmax=array.sort((a,b)=>{
//   return a-b
// })[array.length-2]
// console.log(secondmax);

// function findSecondMax(arr) {
//   let max = arr[0];
//   let secondMax = array[0];

//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < max) {
//           secondMax = max;
//           max = arr[i];
//       } else if (arr[i] < secondMax && arr[i] !== max) {
//           secondMax = arr[i];
//       }
//   }

//   return secondMax;
// }
// const myArray = [1, 5, 8, 3, 9, 2];
// const secondMax = findSecondMax(myArray);
// console.log("Second maximum element:", secondMax);

// let array=[1,2,3,2,5,10,22]
// function abc(array){
//   let max=array[0];
//   let min=array[0]
//   for(let i=0;i<array.length;i++){
//     if(array[i]>max){
//       max=array[i]
//     }
//      else{
//       if(array[i]<min){
//         min=array[i]
//       }
//      }
    
//   }

//   return [min,max];

// }
// console.log(abc(array));








// let array=[1,2,3,4,5,6,10]
// let alter=0
// for(let i=0;i<array.length;i+=2){
//   alter=alter+(array[i])
  

// }
// console.log(alter);

// console.log(alter);

// let array=[2,3,4,5,6]
// let alternate=[]
// for(let i=0;i<array.length;i+=2){
//     alternate.push(array[i])
  

 
// }
// console.log(alternate);

// let array=[1,2,3,4,5,6]
// let even=[]
// for(let i=0;i<array.length;i++){
//     if(array[i]%2==0){
//         even=(array[i])
//         console.log(even);
        
//     }
    
// }
// let odd=[]
// for(let i=1;i<=100;i+=2){
//     odd.push(i)
   
// }
// console.log(odd);

// let sum=0
// for(let i=0;i<=10;i++){
//     sum=sum+i
// }
// console.log(sum);

// let oddSum=0
// for(let i=1;i<=100;i+=2){
//     oddSum=oddSum+i

// }
// console.log(oddSum);

// let arr=[4,4,6,7,8]
// let sum=0
// for(let i=0;i<=arr.length;i++){
//     sum=sum+arr[i]
//     console.log(sum);
// }
// console.log(sum);

// let array=[1,2,3,4,5]
// let mul=[]
// for(let i=0;i<array.length;i++){
//     mul=10*array[i]
//     console.log(mul);

// }

// let array=[1,7,6,4,8,9]
// let max=0
// let mul=0
// for(let i=0;i<array.length;i++){
//     if(array[i]>5){
// max=array[i]
// mul=10*max

// console.log(mul);
//     }
// }

// let array=[1,2,33,44,55,77]
// let maximum=array[0]
// for(let i=0;i<array.length;i++){
//     if(array[i]>maximum){
//         maximum=array[i]
        
//     }
// }
// console.log(maximum);

// let array=[1,2,3,44,55,66]
// let maximum=array.sort((a,b)=>{
//     a-b;
// })[array.length-1]
// console.log(maximum);

// let array=[1,3,4,52,7,89]
// let minimum=array[0]
// for(let i=0;i<array.length;i++){
//     if(array[i]<minimum){
//         minimum=array[i]
//     }
// }
// console.log(minimum);

// let array=[2,3,4,51,67]
// let minimum=array.sort((a,b)=>{
//     a-b
// })[0]
// console.log(minimum);


// 10. reverse the array
// let array=[1,2,3,44,55,77,10,79] 
// let stringvariable=''
// for(let i=array.length-1;i>=0;i--){
//     stringvariable=stringvariable+(array[i]+' ')

// }
// console.log(stringvariable);

// let number=12345
// let convert=number.toString().split("").reverse("").join("")
// console.log(convert);

// let about="hello chutiya"
// let conatiner=''
// for(let i=about.length-1;i>=0;i--){
//     conatiner=conatiner+(about[i])
// }
// console.log(conatiner);

// let array=[1,1,2,3,3,4,5,66,22]
// let unique=[...new Set(array)]
// console.log(unique);

// let filerarray=array.filter((c,i)=>{
//     return array.indexOf(c)===i
// })
// console.log(filerarray);

// write j.s code all delete occurance of element in given array
// input arr=[1,2,3,4,5] output [1,2,3,5]

// let arr=[1,2,3,4,5]
// function deletelment(arr,ele) {
//     for(let i=0;i<arr.length;i++){
// if(arr[i]===ele){
//     arr.splice(i,1)
// }
//     }
//     return arr;
// }
// console.log(deletelment(arr,5));

// linear search
// let arr=[1,2,3,4,5,6]
// function linearsearch(arr,ele) {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===ele){
//             return i
//         }
//        }
//    return -2
// }
// console.log(linearsearch(arr,18));


// write a j.s code to find the power of number using for loop

// function powerofelemnt(num,pow) {
//     var result=1;
//     for(let i=0;i<pow;i++){
//         result=result*num;
//     }
//     return result
// }
// console.log(powerofelemnt(4,3));

// reverse an araay
// let array=[1,2,3,4,5]
// let reversevariable=[]
// for(let i=array.length-1;i>=0;i--){
//     reversevariable.push(array[i])
// }
// console.log(reversevariable);


// maximum
// let array=[1,2,3,466,77]
// let maximum=array[0]
// let secondmax=Infinity
// function secondmaximum(array) {
    

// for(let i=0;i<array.length;i++){
//     if(array[i]<maximum){
//         secondmax=maximum
//         maximum=array[i]
// }
// else{
//     if(array[i]<secondmax && array[i]!==maximum){
//         secondmax=array[i]

//     }
// }
// }
// return secondmax
// }
// console.log(secondmaximum(array));

// let number=12345
// let converintostrin=number.toString().split("").reverse("").join("")
// console.log(converintostrin);


// let array=[1,2,3,4,5]
// function deleteelement(array,ele) {
//     for(let i=0;i<array.length;i++){
//         if(array[i]===ele){
//             array.splice(i,1)
//         }
//     }
//    return array 
// }
// console.log(deleteelement(array,4));

// let array=[1,2,33,44,55]
// var addelement=[...array,3]
// console.log(addelement);

// let array=[1,2,33,44,55]
// array[array.length]=10
// console.log(array);

// let array1=[1,2,33,44,55,66]
// let array2=[2,3,4,5,6]
// mergearray=[...array1,...array2]
// console.log(mergearray);



// palindrome
// const array2 = ["hello", "world", "banana"];

// const array1 = ["radar", "level", "noon"];

// function isPalindrome(array1) {
//     const len = array1.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (array1[i] !== array1[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome(array1));

// function everyElementIsPalindrome(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!isPalindrome(arr[i])) {
//             return false;
//         }
//     }
//     return true;
// }


// all element of an array are palindrome
// var arr=['oyo','level','ullu']
// function checkpalindrome(arr){
//     for (let index = 0; index < arr.length; index++) {
//         var str=arr[index]
//         for(let i=0;i < str.length/2;i++){
//             if(str[i]!==str[str.length-1-i]){
//                 return 'all itmes are not palindrome'
//             }
//         }
        
        
//     }
//     return 'all elements are palindrome'
// }
// console.log(checkpalindrome(arr))


// let str='hello aakash ji how are you'
// let result=str.split('')
// for(let i=0;i<result.length;i++){
//     let final=result[i].sort()
    
// }
// console.log(result);


// let str = 'hello aakash ji how are you';

// // Split the string into an array of words
// let wordsArray = str.split(' ');

// // Sort the array of words alphabetically
// wordsArray.sort();

// // Join the sorted words back into a string
// let sortedStr = wordsArray.join(' ');

// console.log(sortedStr);







// var array=['oyo','kajak','ullu']
// function isPalindrome(array) {
   
//     for(let i=0;i<array.length;i++){
//         var str=array[i]
//         for(let i=0;i<str.length;i++){
//             if(str[i]!==str[str.length-1-i]){
//                 return 'it is not palindrome'
//             }
//         }
//     }
//     return 'yes it is palindrome'
// }
// console.log(isPalindrome(array));



// function isArmstrongNumber(num) {
//     const arr = num.toString();
//  let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//         sum=sum+Math.pow(parseInt(arr[i]), arr.length);
//     }

//     return sum === num;
// }
// console.log(isArmstrongNumber(153)); 
 
// find the common/intersection from two array
// var arr1=[1,2,3]
// var arr2=[3,4,5]
// const abc=arr1.filter(c=>{
//   return  arr2.includes(c)
// })
// console.log(abc)


// a number is perfect square or not
// function findsquare(num){
// for(let i=0;i<num;i++){
//     if(i*i===num){
//         return 'number is perfect square'
//     }
// }
//  return 'number is not perfect square'
// }
// console.log(findsquare(16))


// is Armstrong number

// function isarmstrong(num) {
//         const arr = num.toString();
//     let sum=0
//     for(let i=0;i<arr.length;i++){
// sum=sum+Math.pow(parseInt(arr[i]),arr.length)
//     }
//     return sum===num
// }
// console.log(isarmstrong(153));


// average value of an array
// let array=[10,20,30,40,50]
// let sum=0

// for(let i=0;i<array.length;i++){
// sum=sum+array[i]

// }
// let avearge=sum/array.length
// console.log(avearge);

// remove dupilcasy into array

// let array=[1,1,2,3,4,4,5,6.6]
// var output=[...new Set(array)]
// console.log(output);


// remove 'a' charactor into string

// var str='hello aakash baby'
// var remove='a'
// var ouput=''
// for(let i=0;i<str.length;i++){
// if(str[i]===remove){
    
// }
// else{
// ouput=ouput+(str[i])
// }
// }
// console.log(ouput)

// let str='hello i am';
// let arr=str.split("")
// let ouput=arr.splice(1,0,'u')
// let joining=arr.join("")
// console.log(joining);


// const str=['aakash','kajal','lalit']

// const abc=string.map((c)=>{
//     return c[0].toUpperCase()+c.slice(1)
// })
// console.log(abc)

// const str = ['aakash', 'kajal', 'lalit'];

// for (let i = 0; i < str.length; i++) {
//     let first = str[i].charAt(0).toUpperCase();
//     let capitalizedString = first + str[i].slice(1);
//     str[i] = capitalizedString; // Update the array element with capitalized string
//     console.log(`Modified string at index ${i}: ${str[i]}`);
// }


// const strings = ['hello', 'world', 'krishna', 'apple', 'banana','kallu'];
// const krStrings = strings.filter(c => c.charAt(0) === 'k');

// console.log(krStrings);

// const arr = ['hell', 'world', 'krishna', 'apple', 'banana','kallu']
// const abc=arr.reduce((a,b)=>{
// return a.length>b.length?a:b
// })
// console.log(abc)

// 


// const arr = ['aakash', 'kajal', 'lalit'];

// function capitalizeLast(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let str = arr[i];
//         let lastChar = str.charAt(str.length - 1);
//         str = str.slice(0, str.length - 1)+lastChar.toUpperCase();
//         arr[i] = str;
//     }
//     return arr;
// }

// console.log(capitalizeLast(arr))


// const user = {
//     firstname: 'hema',
//     lastname: 'massey',
//     location: 'palwal'
// };

// let querystring = '?';
// // ?firstname=hema&lastname=massey&location=palwal&
// for (let key in user) {
//     querystring += '${key}=${user[key]}&';
// }

// // Remove the trailing '&' if there are more elements in the query string
// querystring = querystring.slice(0, -1);

// console.log(querystring);


// my practice of objects

// let person={
//     firstname:'aakash',
//     salary:200000,
//     age:'twenty three',
//     sex:'male'
// }
// let querystring='?'
// for(let key in person){
//     querystring+='${key}=${person[key]}&'
// }
// querystring=querystring.slice(0,-1)
// console.log(querystring);


// convert an array into object form

// var arr=[3,5,67,8]
// var obj={}
// function convert(arr){

// arr.forEach(ele=>{
//     obj[ele]=ele
// })
// return obj
// }
// console.log(convert(arr))

// let str = "hello world";
// function printCharFrequency(str) {
//     const count = {};

//     // Step 1: Count frequency of each character in the string
//     for (let i = 0; i < str.length; i++) {
//         var char = str.charAt(i);
//         if (count[char]) {
//             count[char]++;
//         } else {
//             count[char] = 1;
//         }
//         console.log(`${char}: ${count[char]}`);
//     }

//     // Step 2: Print characters in alphabetical order along with their frequencies
//     let keys = Object.keys(count).sort(); // Get sorted keys

//     for (let i = 0; i < keys.length; i++) {
//         let char = keys[i];
      
       
//     }
// }

// Example usage:

// let str = "hello world";
//  printCharFrequency(str);


// let anystring='hello i am beautifull'
// var count={}
// function frequency(anystring) {
// for(let i=0;i<anystring.length;i++){
//     let char=anystring.charAt(i)
//     if(count[char])
//         count[char]++;
//     else{
//         count[char]=1;
//     }
   
// }
// }
// console.log(`${char}:${count[char]}`);
// frequency(anystring)


// let array=[1,2,3,4,5]
// var obj={}
// function convert(array){
//     array.forEach((x)=>{
//         obj[x]=x
//     })
//     return obj
// }
// console.log(convert(array));

// let str='hello my beautifull'
// var count={}
// function countfunction(str) {
   
//     for(let i=0;i<str.length;i++){
//         let char=str.charAt(i)
// if(count[char]){
//     count[char]++
//     }
//     else{
//         count[char]=1
//     }
//     console.log(`${char}:${count[char]}`);
    
// }
// }
// countfunction(str)

// var str='hello world'
// function printCharFrequency(str) {
//     const count = {};

//     // Step 1: Count frequency of each character in the string
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);
//         if (count[char]) {
//             count[char]++;
//         } else {
//             count[char] = 1;
//         }
//         console.log(`${char}:${count[char]}`);
//     }
   
    
// }
// printCharFrequency(str)



// function printCharFrequency(str) {
//     const count = {};

//     // Step 1: Count frequency of each character in the string
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);
//         if (count[char]) {
//             count[char]++;
//         } else {
//             count[char] = 1;
//         }
//     }

//     // Step 2: Print characters in alphabetical order along with their frequencies
//     let keys = Object.keys(count).sort(); // Get sorted keys

//     for (let i = 0; i < keys.length; i++) {
//         let char = keys[i];
//         console.log(`${char}: ${count[char]}`);
//     }
// }

// // Example usage:
// let str = "hello world";
// printCharFrequency(str);




// printCharFrequency(str)var str = 'hello world';
// let str='hello world'
// function printCharFrequency(str) {
//     const count = {};

//     // Step 1: Count frequency of each character in the string
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);
//         if (count[char]) {
//             count[char]++;
//         } else {
//             count[char] = 1;
//         }
//         console.log( `${char}:${count[char]}`);
        
//     }

//     // Step 2: Print frequency of each character
//     for (const char in count) {
//         console.log(`${char}:${count[char]}`);
//     }
// }

// printCharFrequency(str);




    // Step 2: Print characters in alphabetical order along with their frequencies
    // let keys = Object.keys(count).sort(); // Get sorted keys

    // for (let i = 0; i < keys.length; i++) {
    //     let char = keys[i];
    //     console.log(`${char}: ${count[char]}`);
    // }



// // Example usage:

// let array=[1,2,3,4,5,6]
// var obj={}
// function convert(array) {
//     array.forEach(x=>{
//         obj[x]=x
//     })
//     return obj
// }
// console.log(convert(array));

// let gdhaquality={
//     firstname:'Aakash',
//     taillength:'6inch',
//     facelength:'7meter',
//     fat:'kuposan shikar'
// }
// var querstring='?'
// for(let key in gdhaquality){
// querstring+=`${key}=${gdhaquality[key]}&`
// }
// querstring=querstring.slice(0,-1)
// console.log(querstring);

// practice time

// / let str='hello kaju baby'
// var count={}
// function frequency(str) {
//     for(let i=0;i<str.length;i++){
//     let char=str.charAt(i)
//     if(count[char])
//         count[char]++
//     else{
//         count[char]=1
//     }
   
// }

// }
// frequency(str)
// let keys=Object.keys(count).sort()
// for(let i=0;i<keys.length;i++){
//     let char=keys[i]
//     console.log(`${char}:${count[char]}`);
   
// }

// let str='hello madam ji '
// var count={}
// function frequency(str) {
//     for(let i=0;i<str.length;i++){
//         let char=str.charAt(i)
//         if(count[char])
//             count[char]++
//         else{
//         count[char]=1
//         }
//     }

    
// }
// frequency(str)
// let sorting=Object.keys(count).sort()
// for(let i=0;i<sorting.length;i++){
//     let char=sorting[i]
//     console.log(`${char}:${count[char]}`);
// }

// let person={
//     firstname:'kajal',
//     lastname:'massey',
//     age:18,
//     gender:"female"
// }
// let querstring='?'
// for(let key in Object){
//     querstring+=`${key}=${person[key]}&`
   
// }

// querstring=querstring.slice(0,-1)
// console.log(querstring);


// let array=[1,2,3,4,5]
// var obj={}
// function convert(array) {
//     array.forEach(x=>{
//         obj[x]=x
//     })
//     return obj
// }
// console.log(convert(array));



//practice set:-
// program to check number is odd or even

// let arr=[1,2,3,4,55,66,88]
// let even=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }
// }
// console.log(even); 

// let check=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//     check.push("no.is even")
//     }
//     else{
//        check.push( "no. is odd")
//     }
// }
// console.log(check);

// program to add two numbers
// const AddTwoNumber=(a,b)=>{
//      return a+b;
// }
// console.log(AddTwoNumber(4,5));

// find the sqaure root of no.
// function square(number,exponent){
//     return Math.pow(number,exponent)
// }
// console.log(square(2,2));

// swap two variables values

// let a=10;
// let b=30;
// let swap=a
// a=b
// b=swap;
// console.log(a);

// find the largest number in three number
// let arr=[1,2,7]
// let max=[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }

// }
// console.log(max);

// convert kilometers to miles
// function kilometers(kilom) {
//     return kilom*0.621371
// }
// function main() {
//     let km=parseFloat(50)
//     let miles=kilometers(km)
//     console.log(`${km} is equal to ${miles}`);
// }
// main()


// square root of number
// function sqrt(num) {
//     // let num=25
//     let squareroot=Math.sqrt(num)
//     console.log(`${squareroot}`);
// }
// sqrt(36);

// program to convert celcius to fahrenheit

// function convercelcious(cel){
// let fehranhiet=(cel * 9/5)+32
// return fehranhiet
// }
// function main() {
//     let celcius=parseFloat(18)
//     let fehran=convercelcious(celcius)
//     console.log(`${celcius} are conver into ${fehran}`);
// }
// main()

// check number is posiyive or negative
// let array=[1,2,-4,-6,7,8]
// let num=[]
// for(let i=0;i<array.length;i++){
//     if(array[i]>0){
//         num.push('yes it is positive number')
//     }
//     else{
//         num.push('num is negative')
//     }
// }
// console.log(num);

// program to check number is prime or not

// area of triangle

// function area(height,base) {
//     let trianglearea=1/2*base*height
//     return trianglearea
// }
// function main() {
//     let base=15;
//     let height=10;
//     let float=area(base,height)
//     console.log(`${base} & ${height} Area: ${float}`);
// }
// main()

// display a table

// function table(num) {
//     for(let i=1;i<=10;i++){
//  console.log(num*i);
//     }
   
// }

// table(5);

// function sixtable(num) {
//     for(let i=0;i<=10;i++){
//     console.log(num*i);
//     }
// }
// sixtable(6)

// for(let i=1;i<=4;i++){
//     for(let j=1;j<i;j+1){
//         console.log('*');
//     }
// }

// let str = "Hello World, JAvaScript is awesome!";
// let newStr = str.replace(/[ao]/g, function(match) {
//   return match === 'a' ? 'o' : 'a';
// });
// console.log(newStr);



















