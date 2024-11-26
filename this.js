// in js this keyword refers to the object, where it is called.
// this inside global scope refer to glowal object
// console.log(this)


// this inside fn refers to glowal window object
// function xyz(){
//     console.log(this)
    
// }
// xyz()

// this inside object method
//  const person={
//     name:"jack",
//     age:23,
//     greet(){
//         console.log(`${this.name}`)
//     }
    
//  }
//  person.greet()



// this inside constructor function
// when a fn is used as a constructor fn this refres to the object inside is used
// function person(){
//   this.name='jack';

// }
// let person1=new person()
// console.log(person1.name)

// this  inside object method 
// const person={
//     name:"jack",
//     age:23,
//     greet(){
//         console.log(this)
//     }
    
// }
// person.greet()


// this inside arrow fn  refers to parent scope means glowal object
// arrow fn do not have their own this
// const scope=()=>{
//   console.log(this)
// }
// scope()
 
// strict inside strict mode this refrs to undefined
//  'use strict'
//  this.name='kaju'
//  function abc(){
//   console.log(this)
//  }
//  abc()


// this inside ineer fun
function abc(){
  
  console.log(this)
  function xyz(){
console.log(this)
  }
  xyz()
 }
 abc()