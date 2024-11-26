// check value equal to index 
// let array=[14,8,2,5,4]
// var storeelement=[]
// for(let i=0;i<array.length;i++){
//     if(array[i]===i){
//         storeelement.push(array[i])
//     }
// }
// console.log(storeelement);


// check array is palindrome or perfect array
// let array=[1,2,3,9,1]
// function isperfectarray(array) {
//     for(let i=0;i<array.length;i++){
//         if(array[i]!==array[array.length-1-i]){
//             return 'false'
//         }
//     }
// return 'true'
// }
// console.log(isperfectarray(array))


// swap kth element of an array 
// let array=[1,2,3,4,5,55,66,77]
// let k=4;
// function swapfunction(array,k) {
// for(let i=0,j=array.length-1;i<array.length && j<=0;i++,j--){
// if(i===k-1){
//     var startingvariable=array[i]
//     array[i]=array[j]
// array[j]=startingvariable
// }
// }
// }
// console.log(swapfunction(array,k));


// let array = [1, 2, 3, 4, 5, 55, 66, 77,88,100,99];
//  let array=[1,2,3,4,5,55,66,77]
// let k = 4;

// function swapfunction(array, k) {
//     for (let i = 0, j = array.length - 1; i < array.length && j >= 0; i++, j--) {
//         if (i === k) {
//             let startingVariable = array[i];
//             array[i] = array[j];
//             array[j] = startingVariable;
//         }
//     }
//     return array; // Return the modified array
// }

// console.log(swapfunction(array, k));


// immeadiate samller element in array
// let array=[1,5,4,3,2,10,11,9]
// function immeadiatesmall(array) {
// for(let i=0;i<array.length;i++){
//     if (array[i]>array[i+1]){
//         return array[i+1]
//     }
//    else{
//     return array[i]=-1 
//    } 
// }
// return array
// }
// console.log(immeadiatesmall(array));

// let array=[1,5,4,3,2,10,11,9]
// var i=0
// var x=9
// while(array[i]<x){
//     i++;
// }
// console.log(i);

// for(;array[i]<x;){
//     i++
// }
// console.log(i);

// let output=[]
// for(let i=0;i<array.length;i++){
//     if(array[i]<9){
//         output.push(array[i])
//     }
// }
// console.log(output);

// remove white space  from a string
// let about='hello i am happy'
// console.log(about.split(" ").join(""));

//  list of elements convert into string
// let array=['h','e','l','l','o' ,'i', 'a','m', 'h','a','p','p','y']
// console.log(array.join(""));


// remove the vowels from a string

// let strin='hello i am happy'
// var stringavraible=''
// for(let i=0;i<strin.length;i++){
//     if(strin[i]=='a'|| strin[i]=='e' || strin[i]=='i' || strin[i]=='o' || strin[i]=='u'){

//     }
//     else{
//         stringavraible=stringavraible+(strin[i])
//     }
// }
// console.log(stringavraible);

// let array=[1,3,2,6,7,8,8,2]
// let unique=array.filter((c,index)=>{
//   return  array.indexOf(c)===index
// })
// console.log(unique);

let array=['hello', 'good' ,'person']
// let pusharray=[]
// // console.log(strin.toUpperCase());
// for(let i=0;i<array.length;i++){
//     var strin=array[i]
//     for(let i=0;i<strin.length;i++){
//       var ouput=strin.charAt(0).toUpperCase()+strin.slice(1)
     
//     }
//     pusharray.push(ouput)
// }
// console.log(pusharray);


// let ouput=array.map(c=>{
//   return  c.charAt(0).toUpperCase()+c.slice(1)
// })
// console.log(ouput);

// let output=array.filter(c=>{
//     return c.charAt(0)=='h'
// })
// console.log(output);

// let outputvari=array.reduce((a,b)=>{
//    return a.length<b.length?a:b;
// })
// console.log(outputvari);


// const string=['aakash','kajal','lalit']
// const abc=string.map((c)=>{
//     return c[0].toUpperCase()+c.slice(1)
// })
// console.log(abc)
// const strings = ['hello', 'world', 'krishna', 'apple', 'banana','kallu'];
// const krStrings = strings.filter(c => c.charAt(0) === 'k');

// console.log(krStrings);

// const arr = ['hell', 'world', 'krishna', 'apple', 'banana','kallu']
// const abc=arr.reduce((a,b)=>{
// return b.length-a.length?a:b
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

// console.log(capitalizeLast(arr));



// let str='hello world                    '
// console.log(str.trim());






