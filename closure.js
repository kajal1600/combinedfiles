// var a = 90;
// function x() {
//   var y=10;
//   function z() {
//     console.log(a,y);
//   }
//   z()
// }

// const { MockScope } = require("undici-types/mock-interceptor")

// const ijjat=x()
// ijjat()


// function khusha() {
//     return "kajal"; 
    
// }
// function aakash(x){
//     console.log(x()+"lulu");
    
// }
// aakash(khusha)

// function kalu(){
//     let a=999;
//     function nilu(){
//         var b=1000;
    
    
//     function tilu(){
//         console.log(a,b);
//     }
//     tilu()
//     }
//    return nilu

// }
//  const sinu=kalu()
//  sinu()

// var global=100;
// const kaju=()=>{
//     const x="hello kajal"
//     const tina=()=>{
//         const tinu="hello tinnaa"
//         const lalit=()=>{
//             console.log(global,tinu,x)
//         }
//          lalit()
//     }
//     return tina
// }
// const lata=kaju()
// lata()


// function closure() {
//   var x=10;
//   var y=100;
//   function inside() {
//     console.log(x,y);
    
//   }
//   inside()
// }
// closure()

  // var z=x()
  // console.log(z)
  // z()
// function z(){
//     var b=900
//     a=10
//         function y(){
//             console.log(a,b)
//         }
//         return y
//     }
// var result=z()
// console.log(result)

// var b=20

// function kajal(){
//  var a=10
//     function aakash(){
//         console.log(a)
//              function hemlata(){
//                console.log(b)
//             }
//         return hemlata
        
//     }
//     var kkk=aakash()
//     console.log(kkk)
//     kkk() 
//    return aakash

// }
// var xyz=kajal()
// console.log(xyz)
// xyz()


// function outer(){
//   var x=10
//   var y=20
//   function inner() {
  
//     console.log(x);
   
    
//   }
 
//   function innermost(){
//     console.log(y);
    
//   }
//   return {inner,innermost}
// }

// let xyz=outer()
// console.log(xyz);
// xyz.inner()
// xyz.innermost()


// a function bind together with its lexical environment is form of closure
// a function along with its lexical enoronment
// when a inner function can accsess property,variables etc.of outer function or parent function is calld closure
// a closure is an inner function that has accessed to the outer function variable
// 
// advanatge
// closre have accsess to three scope variable
// local Scope 
// outer function variable
// global variable

// function outer() {
//   var a=20
//   return function inner() {
//     console.log(a);
//     var b=30

//     return function secondinner() {
//       console.log(a);
//       console.log(b);
      
      
//     }
//   //  return secondinner

//   }
//   let xyz=inner()
//   console.log(xyz);
//   xyz()
  
//   // return inner
// }
// let abc=outer()
// console.log(abc);
// abc.inner()
// abc.secondinner()


// function a() {
//   var abc=900
//   function b() {
//     console.log(abc);
//     var y=90
//     function c() {
//       console.log(y);
      
//     }
//     return c
//   }
//   let invokeCfunction=b()
//   // console.log(invokeCfunction);
//   invokeCfunction()
  
//   return b

// }
// let xyz=a()
// console.log(xyz());


function a() {
  console.log(b);
  
}

a()
let b=10
