// const kajal=[1,2,3,4,5]
// console.log(kajal);
// var kajalarray=['kajal','hema','aakash','sumit']
// console.log(kajalarray)
// const kajalarray=[{name:"hemlata",age:34,mothername:"guddi"},{fathername:"samaysingh",brothername:"lalit"}]
// // console.log(kajalarray)
// concat mathod of array
// var kajal=["kajal","massey"]
// var lalit=[1,2,3]
// console.log(kajal.concat(lalit))
//  function kajal(x) {
//     return x;
// }
// console.log(kajal (20))

// join method of array
// let lalit=["hii" ,"hello"] 
// console.log(lalit.join("$ "))

// index of array
// var arr=[1,2,3,"undefined"]
//  console.log(arr.indexOf("undefined"))     
// console.log(arr[3])

// push element into array
// var kajalarray=[1,2,3,4,5,6,""]
// console.log(kajalarray.push("hello"),kajalarray)

// pop element into the array 
// const hello=[9,10,5,7,9]
// console.log(hello.pop(),hello)

// unshift  shift method into the array
// var num=["num1","num2","num3","num4"]
// console.log(num.shift(),num)

// find  method
// const hlo=[1,2,3,4,5,6]
// console.log(hlo.find(x=> x<5))

// find index mathod in array
//  const hlo=[1,22,3,4,5,6]
//  console.log(hlo.findIndex(x=>x>5))

//every method
// const kajal=[1,2,3,4,5]
// console.log(kajal.every(y=> y>1))

//some method
// const kajal=[1,2,3,4,5]
// console.log(kajal.some(y=> y<1))

//include
// const kajal=[1,2,3,4,5]
// console.log(kajal.includes(15))

//reverse method
// const kajal=[1,2,3,4,5]
// console.log(kajal.reverse())

//short method
// const kajal=[19,442,103,94,65]
// console.log(kajal.sort())

// map method in array
// var kajal=[2,3,4,5,6]
// console.log(kajal.map((x)=>{
// return x+2;
// }));
// console.log(kajal);

// const price=[50,80,70,60,90]
// console.log(price.map((x)=>{
// return x*90
// }))
// filter method of array
// const arr=[2,3,4,5,6]
// console.log(arr.filter((x)=>{
//     return x>2||x<5
// }))

// sort method
// var kajal=[2,3,89,45,78,98,23,60]
// let arr=kajal.sort(()=>{ 
// })
// console.log(arr)

// reduce method
// let clap=[1,2,3,4,47,,5,56]
// console.log(clap.reduce((x,y)=>{
// return x*y
// }))

// foreach method
// var hello=[1,2,3,4,55,66]
// console.log(hello.forEach((x)=>{
// return x+4
// }))    foreach does not give any array it gives undefined   

// another type of foreach method
// var arr=[2,44,55,66,7,78]
// var result=arr.forEach(x=>
//     console.log(x+3)
//     )




// ARRAY'S METHOD IN JAVASCRIPT WITH EXAMPLE:--

// let arr=[1,2,3,4,5]
// console.log(arr.indexOf(5));  value s index nikalna

// findindax is method that contain a callback function isnide as a argument it gives index no.

// let array=[1,2,3,4,5]
// console.log(array.findIndex(x=>x==2));

//  index s value nikalna
// let arr=[1,2,3,45]
// console.log(arr[3]);


// concat method
// let arr=["kajal"]
// let arr2=["massey"]
// console.log(arr.concat(arr2));


// join method like:-$,#,@,!,*,- etc. we can join with array

// let array=[1,2,3,4,5,6,7]
// console.log(array.join( ' @ ' ));

// shift method:- it remove the element the at starting it gives a new array

// let arr=[22,33,4,55,6,,7]
// console.log(arr.shift());

// unshift method:- it add the element at starting of array and its not give new array it modified the array

// let array=["kajal","kgushi","payal"]
// array.unshift("aakash");
// console.log(array);

// slice method:-it takes two argument values 1.starting 2.ending it take one less element into array it also give an new array

// let array=[22,33,44,5,6]
// console.log(array.slice(1,2));

// spilce method:- it takes three argument 1.index no. 2.how many no. to be deleted 3.what you want to add new it takes one more or one extra element

// let array=[1,2,3,44,5,66]
// array.splice(1,2,"kaju")
// console.log(array);

// some method;-it give ouput in boolean form if some elements are satisfied the condition

// let array=[2,3,4,5,66,77]
// console.log(array.some(x=>x>2))

// every method:- if all the elements are satisfied the condition then its give ouput also in boolean form

// let array=[2,3,4,,55,,6,0]
// console.log(array.every(x=>x>3));

// include method:-its check the elements whether the element are include or not array

// let includearray=[2,3,4,5,77,88,99,4,445]
// console.log(includearray.includes(88));

// reverse array

// let reversearray=['hello','i','am','kajal']
// console.log(reversearray.reverse);

// length of array:- this is not a function

// let arr=[1,2,7,8,0,3]
// console.log(arr.length);


// map example:-

// let array=[1,2,3,4,55]
// let sum=0
// let result=array.map((ele,item)=>{
//    sum=ele+3
//    return sum
    
// })
// console.log(sum);
// console.log(result);

// filter:-
// let array=[1,5,7,9,4,3]
// let Result=array.filter(x=>
//     x > 3 && x < 9)
// console.log(Result);

// let array = [1, 5, 7, 9, 4, 3];
// let conaiter = array.filter(x => x > 3 && x < 9);
// console.log(conaiter); // Output: [5, 7, 4]

// let array=['apple','banana','orange','papaya','grapes']
// let result=array.filter(word=>word.length<6)
// console.log(result);

// let evennumbers=[1,2,4,3,6,8,10,44,66]
// let even=evennumbers.filter(x=>x%2==0)
// console.log(even);
// console.log(evennumbers);

// let objectarray=[{name:'kajal' , lastname:'massey' , age:18},{name:"lalit", lastname:'massey',age:15},
// {name:'khushi',lastname:'jain',age:20},{name:'aakash',lastname:'rawat',age:20}]

// let agebelow=objectarray.filter((x)=>{
//     x>18})
// agebelow=x.name

    
// console.log(agebelow);


// let objectarray = [
//     { name: 'kajal', lastname: 'massey', age: 18 },
//     { name: "lalit", lastname: 'massey', age: 15 },
//     { name: 'khushi', lastname: 'jain', age: 20 },
//     { name: 'aakash', lastname: 'rawat', age: 20 }
// ];

// let ageBelow18 = objectarray.filter((x) => {
//     return x.age > 18;
// }).map((x) => {
//     return x.name+' '+x.lastname;
// });

// console.log(ageBelow18);


// flat method

// let array=[[1,2],[3,4,5],6,7,[8,9],[0]]
// let arraymerge=array.flat()
// console.log(arraymerge);

// let array=[[1,2,3],[4,[6.7],8],[9,109]]
// let result=array.flat(Infinity)
// console.log(result);

// maximum number
// let array=[1,2,3,5,6,8]
// console.log(Math.max(...array));

// minimum number
// let minimumarray=[1,2,4,6,7,90]
// console.log(Math.min(...minimumarray));

// sort method 
// let array=[3,4,5,77,88,4,5,1,6]

// let sorting=array.sort((x,y)=>{
//     return x-y;
    
// })
// [array.length-1]
// console.log(sorting);

// let array=[1,20,77,17,19,90,40,20]
// let minimum=array.sort((a,b)=>{
//     return a-b;
// })
// [array.length-1]
// console.log(minimum);
// console.log(array);

// let array=[1,2,3,4,6,7]
// let result=array.reduce((max,b)=>{
//     if(b>max){
//         max=b
//     }
//     return max
// })
// console.log(result);

// let array=[2,3,4,5,6,77,8]
// let max=[]
// for(let i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i]
//     }
//     return max
// }
// console.log(array);

// let array=[{firstname:"kajal",lastname:"massey",age:18},{firstname:"komal",lastname:"rawat",age:20},{firstname:"kusum",lastname:"tanwar",age:18},{firstname:"aakash",lastname:"rawat",age:20}]

// let filteroutput=array.filter(x=>{
//     return x.age>18
// })
// let sirname=array.map(x=>{
//     return x.lastname
// })
// let outputName=array.map(x=>{
//    return x.firstname
// })
// console.log(outputName);
// console.log(filteroutput);
// console.log(sirname);


// sort the array using for loop in acending order

// let array=[2,5,1,3,9,6,22,10]
// function sortarray(array) {
// for(let i=0;i<array.length;i++){
//     for(let j=0;i<array.length-i-1;j++){
//         if(array[j]>array[j+1]){
// var swap=array[j]
// array[j]=array[j+1]
// array[j+1]=swap

//         }
       
//     }
// }
// return array
// }
// console.log(sortarray(array));

let array = [2, 5, 1, 3, 9, 6, 22, 10];

function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array; // Return the sorted array
}

console.log(sortArray(array));






