// <!-- - What is Prototype?
// - What is Prototypal Inheritance?
// - What is Prototype Chain?
// - Why we call it proto ?
// - What is inhertance in Javascript? -->



// <!-- inheritance in JS => When an object trying to access variables and properties of another object.

//     whenever you creat fn/object /array/method js engine automatically attach an object without even leting you  know.

// prototype is an Object that get attach to function/method/object and this object has some hidden properties

// Whenever we create object/ function/ methods/ array/ variable , these all are attached with some hidden properties, which we call prototype

//  proto is reference to prototype ( or it points towards prototype ), if we want to access prototype, we do proto

// prototype object has a prototype of its own, and so on until an object is reached with null as its prototype,  this is called prototype chaining -->
// <!-- arr._proto_     Array.prototype 
// arr._proto.proto_      object.prototype 
// arr._proto.proto.proto_     null


// object._proto_       function protype
// object._proto.proto_   object.prototype  
// object._proto.proto.proto_  null 


// object prototype example here:-

// let person={
//     firstname:"kajal",
//     lastname:"massey",
//     gender:"female",
//     age:18

// }

// let animal={
//     firstname:"aakash",
//     // lastname:"rawat",
//     // age:"infinite"
// }
// animal.__proto__=person;
// console.log(animal.age)
// console.log(animal.gender);
// console.log(animal.lastname);


// function prototype:-
// function employee(firstname,salary,workmode) {
//     this.firstname=firstname
//     this.salary=salary
//     this.workmode=workmode
// }

// employee.prototype.user=function(firstname,salary,workmode) {
//     return (firstname,salary,workmode)

//     }
    


// let obj=new employee("arvinda",500000,"work from home")
// console.log(obj.firstname);








// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>
// good morning have a great day
// </h1>
// <script> -->
//     // var arr=[1,2,3,5,6]

//     //object prototype
    
//     // var obj={
    //     name:"aakash",
    //     city:"palwal",
    //     age:21
    // }
    
    // var obj2={
    //     name:"kajal",
    //    _proto_:obj
    // }
  
    // obj2.age
     


 // const person={
    //     name:'kaju'
    // }
    // const student={
    //     rollno:1,
    //     _proto_:person
    // }
    // console.log(student.name)

  
//function prototype

// function employ(name,salary,experience){
//     this.name=name;
//     this.salary=salary;
//     this.experience=experience;

// }
//  employ.prototype.slogan=function(){
//     return `this company is best regards ${this.name}`
//  }
//  let abc=new employ("kajal",40000,1)
//  console.log(abc.slogan())

//  function workers(name,salary,experience) {
//     employ.call(this,name,salary,experience)
    
//  }
//  workers.prototype=Object.create(employ.prototype)
//  workers.prototype.constructor=workers
//  let obj=new workers("aakash","2 rupey","ghanta")
//  console.log(obj.experience);
//  console.log(obj.slogan());

//prototype inhertance
// function employ(name,salary,experience){
//     this.name=name;
//     this.salary=salary;
//     this.experience=experience;

// }
//  employ.prototype.slogan=function(){
//     return `this company is best regards ${this.name}`
//  }
//  let abc=new employ("kajal",40000,1)
//  console.log(abc.slogan())

//  function programmer(name,salary,experience,language){
//     employ.call(this,name,salary,experience)
//     this.language=language;
   
//  }
//  programmer.prototype=Object.create(employ.prototype) //inherit prototye
//  programmer.prototype.constructor=programmer //manually set the constructor
//  let xyz=new programmer("aakash",20000,2,"js")
//  console.log(xyz)
//  console.log(xyz.slogan())

// function employee(firstname,salary,workmode) {
//     this.firstname=firstname
//     this.salary=salary
//     this.workmode=workmode
// }

// function user(firstname,salary,workmode) {
//     employee.call(this,firstname,salary,workmode)
    
// }

// let obj=new user("arvinda",500000,"work from home")
// console.log(obj.firstname);

    

  
// </script>
    
// </body>
// </html>




// manually makes protoype

// var crr=[1,2,3,4,5]
// var arr=[44,55,66,77,88]
// Array.prototype.addarr=function(){
//    sum=0
//    for(let i=0;i<this.length;i++){
//       sum +=this[i]
//    }
//    return sum;
// }

// console.log(crr.addarr());
// console.log(arr.addarr());


// Array.prototype.division=function(){
//   let divide=[];
//      for(let i=0;i<this.length;i++){
//       divide.push(this[i]/2);
//      }
//      return divide;
   
// }

// var array=[2,4,6,8]
// console.log(array.division());


// Array.prototype.alldivision=function(){
//    let allsum=0
  
//    for(let i=0;i<this.length;i++){
// allsum=allsum+this[i]
//    }
//    let alldivide=[]
//    alldivide.push(allsum/2)
//    return alldivide

// }

// Array.prototype.alldivision = function() {
//    let allsum = 0;
//    for (let i = 0; i < this.length; i++) {
//        allsum += this[i];
//    }
//    let alldivide = [];
//    alldivide.push(allsum / 2);
//    return alldivide;
// }


// let arr=[2,4,6,8]
// console.log(arr.alldivision());


// Array.prototype.indexadd=function(){
//    let index=0
// }










// var arr=[2,4,57,7]
// var abc=[4,6,7]
// // var xyz=[8,3,2]
// Array.prototype.addarr=function(){
//     sum=1
//     for(let i=0;i<this.length;i++){
//         sum=sum*this[i]
//     }
//     return sum
// }
// let finalresut=abc.addarr()
// console.log(finalresut) 
// const city=['delhi','palwal']
// Array.prototype.show=function(){
//     console.log(this)
// }
// city.show()
// const city=['delhi']
// const language=['js','c','c++']
// Array.prototype.covertarraytoobject=function(){
//     let obj={}
//     this.forEach(ele=>{
//         obj[ele]=ele
//     })
//     return obj
// }
// console.log(language.covertarraytoobject())


// let person={
//    firstname:"lalit",
//    lastname:"massey",
//    age:15,
// }

// let pooja={
//    firstname:"pihu",
//    __proto__:person
// }

// console.log(pooja.lastname);