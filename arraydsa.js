// do empty an array

// let array=[1,2,3,4]
// function emptyaerray(arr) {
    // arr=[]
    // another way
//     arr.length=0
//     return arr
// }
// const result=emptyaerray(array)
// console.log(result);


// add element start of the array
// let arr=[1,2,3,4,5]
// let b=[...arr]
// b.unshift(11)
// // arr.unshift(22)
// console.log(b);

// remove duplicasy of an array elements
// program to remove duplicate value from an array
// let arr=[1,2,3,4,3,2]
// var uniqueArr = [];
// function getUnique(arr){
//     // loop through array
//     for(let i of arr) {
//         if(uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }
// getUnique(arr)

// another way duplicasy remove
// var result=[...new Set(arr)]
// console.log(result);



// let arr = ["apple", "mango", "apple",
//     "orange", "mango", "mango"];

// function removeDuplicates(arr) {
// return arr.filter((item,
//   index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr))

// merge array and find duplicasy

// let array1=[1,4,8,6,12]
// let array2=[4,6,1,12,5,3]
// let all=[...array1,...array2]
// console.log(all);

// console.log(array1.concat(array2));


// compare two arrays
// let array1=[4,8,9,0,3]
// let array2=[8,0,1,34,4]
// // const result=array1.filter(cvalue =>array2.includes(cvalue))
// const result2=array1.filter((cvalue)=>{
//     return array2.includes(cvalue)
// })
// console.log(result2);


// delete specific item in array
// let array=[1,2,3,4,5,6,7,8]
// function deleteelement(array,ele) {
//     for(let i=0;i<array.length;i++){
//         if(array[i]===ele){
// array.splice(i,1)
//         }
//     }
//     return array
// }
// console.log(deleteelement(array,8));


// let array=[1,2,3,4,5,6,7]
// array.unshift(5)

// // let newarray=array.slice(1,4)
// // console.log(newarray);
// console.log(array);

// array.splice(2,5,11,12)
// console.log(array);



// let newstring=sre.slice(2)
// console.log(newstring);
// sre.splice(0,2,'lalit')
// console.log(sre);


// let arr=[1,2,3,4,5,6]
// arr.splice(4,0,11)
// console.log(arr);



// let array=[1,2,3,4,5]
// array.pop(12)
// console.log(array);

// check whether element is include or not

// let arr=[1,2,3,4]
// // console.log(arr.includes(10))
// function includeele(arr,ele) {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===ele){
//             return i;
//         }
       
//     }
//      return -1

// }
// console.log(includeele(arr,4));


// add object in array

// let arr=[1,2,3,4]
// arr.unshift({'0':'10'})
// console.log(arr);


// to check an object is an array
// let arr=[1,2,3,4] 
// let obj={1:'hello',2:'aakash'}
// function checkIsarray(array) {
//     if(Array.isArray(array)){
//         console.log('yes the object is  an array');
        
//     }
//     else{
//         console.log('no object is not an array');
        
//     }
// }
// checkIsarray(obj)


// check leap year

// function checkleapyear(year) {
    // if(year%4===0){
    //     console.log(` ${year} is a leap year`);
        
    // }

    // another way

//   if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
//     console.log(` ${year} is a leap year`);
//   }
//     else {
//         console.log(`${year} is not leap year`);
        
//     }
// }
// checkleapyear(0)


// get day,date,month

// let date=new Date()
// console.log(date.getMonth()+1);
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());



// // program to format the date


// // get current  date
// let currentDate = new Date();

// // get the day from the date
// let day = currentDate.getDate();

// // get the month from the date
// // + 1 because month starts from 0
// let month = currentDate.getMonth() + 1;
// console.log(currentDate);

// // get the year from the date
// let year = currentDate.getFullYear();

// // if day is less than 10, add 0 to make consistent format
// if (day < 10) {
//     day = '0' + day;
// }

// // if month is less than 10, add 0
// if (month < 10) {
//     month = '0' + month;
// }

// // display in various formats
// const formattedDate1 = month + '/' + day + '/' + year;
// console.log(formattedDate1);

// const formattedDate2 = month + '-' + day + '-' + year;
// console.log(formattedDate2);

// const formattedDate3 = day + '-' + month + '-' + year;
// console.log(formattedDate3);

// const formattedDate4 = day + '/' + month + '/' + year;
// console.log(formattedDate4);



// compafre date values
// let dateone=new Date()
// let datetwo =new Date()
// function compare(dateone,datetwo) {
// if(dateone<datetwo){
//     console.log('dateone is greater');
    
// }
// else{
//     console.log('datetwo is grater');
    
// }
// }
// compare(dateone,datetwo)




// program to compare value of two dates


// create two dates
// const d1 = new Date();
// const d2 = new Date();

// // comparisons
// const compare1 = d1 < d2;
// console.log(compare1);

// const compare2 = d1 > d2;
// console.log(compare2);

// const compare3 = d1 <= d2;
// console.log(compare3);

// const compare4 = d1 >= d2;
// console.log(compare4);

// const compare5 = d1.getTime() === d2.getTime();
// console.log(compare5);



let timercount=new Date()
setInterval(()=>{
    console.log(`${timercount.getHours()+timercount.getHours()}:${timercount.getMinutes()+timercount.getMinutes()}: ${timercount.getSeconds()+timercount.getSeconds()}`);

},1000)

