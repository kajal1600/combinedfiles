// async function kajal(x,y) {
//     return 8+9;
// }
// async function aakash(a,b) {
//      return 6*7;
// }
// async function lalit(c,d,e,f) {
//      await console.log(c(),d(),e,f);
// }
// lalit(kajal,aakash,10,70)
// const count=true;
// const kaju= new Promise((resolve , reject) =>{
//     if(count==1){
//         resolve("promise resolved")
//     }
//     else {
//         reject("promise rejected")
//     }
    
    
//  })
// kaju.then(()=>{
// console.log("promise are");
// })
// .catch((err)=>{
//     console.error("error")
// })
//  console.log(kaju)


// let count=true;
// let countvariable=new Promise(function(resolve,reject) {
//     if(count){
//         resolve("count is resolved")
//     }
//     else{
//         reject("count is rejected")
//     }
    
// })
// console.log(countvariable);

// let count=false;
// let countvariable=new Promise(function (resolve,reject) {
//     if(count){
//         resolve("count is resolve")
//     }
//     else{
//         reject("count is rejected")
//     }
    
// })
// console.log(countvariable);

// var a="hello i am kajal massey"
// var b="hello i am kajal mssey"
// let checkvariable=new Promise(function(resolve,reject) {
//     if(a===b){
//         resolve();
//     }
//     else{
//         reject();
//     }
    
// })
// checkvariable
// .then(()=>{
//     console.log("yes its resolved");
// })
// .catch((err)=>{
//     console.log("some error are occured",err);
// })


// let promisevariable=new Promise(function(resolve,reject) {
//     resolve(promisevariable.reject("test"))
    
// })
// promisevariable.then(
// ()=>{
//     console.log("yes its resolved");
// },
// (error)=>{
//     console.log("error are catch here",error);
// }
// )
// function addition(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val + 5);
//     });
// }

// function Subtract(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val - 3);
//     });
// }

// function multiplication(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val * 5);
//     });
// }

// addition(2)
//     .then(result => {
//         return Subtract(result);
//     })
//     .then(result => {
//         return multiplication(result);
//     })
//     .then(result => {
//         console.log(result);
//     })

// function addition(x) {
//     return new Promise((resolve,reject)=>{
//         resolve(x+10)
//     })
    
// }
// function multiply(x) {
//     return new Promise((resolve,reject)=>{
//         resolve(x*2)
//     })
    
// }
// function divide(x) {
//     return new Promise((resolve,reject)=>{
//         resolve(x/2)
//     })
    
// }
// addition(10).
// then((y)=>{
//     return multiply(y)
// }).
// then((y)=>{
//     return divide(y)
// }).
// then((y)=>{
//     console.log(y);
// })

// function asyncFunction1() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Async Function 1 Done");
//         resolve();
//       }, 1000);
//     });
//   }

//   function asyncFunction2() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Async Function 2 Done");
//         resolve();
//       }, 1000);
//     });
//   }

//   function asyncFunction3() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Async Function 3 Done");
//         resolve();
//       }, 1000);
//     });
//   }

//   asyncFunction1()
//     .then(() => asyncFunction2())
//     .then(() => asyncFunction3())
//     .then(() => {
//       console.log("All Async Functions Completed");
//     })
//     .catch((error) => {
//       console.error("An error occurred:", error);
//     })

// function first(x,y) {
//     return new Promise((resolve,reject)=>{
//         resolve();
//         console.log(x+y);
//     })
    
// }
// function second(x,y) {
//     return new Promise((resolve,reject)=>{
//         resolve()
//         console.log(x-y);
//     })
    
// }
// function third(x,y) {
//     return new Promise((resolve,reject)=>{
//         resolve();
//         console.log(x*y);
//     })
    
// }
// first(20,10).
// then((rejult)=>second(20,30)).
// then((rejult)=>third(40,50)).
// then((rejult)=>{
//     console.log("all functions are resolved");
// })
// .catch("some error are occured")


// function naming() {
//     return new Promise((resolve,reject)=>{
//         resolve();
//         console.log("hello i am kajal massey your heavenly sister");
//     })
    
// }
// function about() {
//     return new Promise((resolve,reject)=>{
//         resolve()
//         console.log("i want to become a full stack developer ");
//     })
    
// }
// naming().
// then((x)=>{
//     return about()
// }).
// then((x)=>{
//     console.log("both are successfully run");
// })
// .catch("uff any error are occured!")