// class poly{
//     aakash(){
//         console.log("he says i am dogy");
//     }
//     khushi(){
//         console.log("she says i just chill out my life");
//     }
// }
// class kajal extends poly{
//     aakash(){
//         console.log("now he says i am chamanchutiya not dogy");
//     }
// }
// class badal extends poly{
//     khushi(){
//         console.log("now she is brilliant girl");
//     }
// }
// var aaku=new poly()
// aaku.aakash()
// aaku.khushi()
// var khush=new kajal()
// khush.aakash()
// var badl=new badal()
// badl.khushi()

// practice examples
// private keyword example using # keyword

// class pet{
//     #name;
//     #age;
//     constructor(name,age){
//         this.#name=name;
//         this.#age=age;
//     }
    
//     print(){
//         return(`i have a pet ${this.#name} " " its ${this.#age}" " years old`)
//     }
//     static hello(){
//         return 2+5;
//     }
// }

// class dog extends pet{
//     constructor(name,age,breeds){
//         super(name,age);
//         this.breeds=breeds;

//     }
//     show(){
//         return(`i have a pet, its name is ${this.name} and its age is ${this.age} and its breed is ${this.breeds}`)
//     }
// }
// let result=new dog("lussy",20,"lebradog")
// console.log(result.show())
// let aakash=new pet("aakash",101)
// console.log(aakash.print());
// console.log(pet.hello());

// polymosphism :- polymosrphism refer two words 1.poly=>many , 2>morpshism=>forms
// polymorshism allow overriding a function
// thats why its is also known as function overloading
// it provide the ability to call the saME METHOD ON DIFFERENT JAVASCRIPT OBJECTS


// example

// class superclass{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//    base(x,y){
//     console.log(`${this.name}`)
//         return x+y;
//     }
//     base2(){
//         console.log("hello its wonderful day! yeaaah");
//     }
// }

// class subclass extends superclass{
//     constructor(name,age){
//         super(name,age);
//     }
//     // override the function here
//      base4(x,y){ 
//         console.log(`${this.name}`);     
//         return x-y;
//     }
//       // override the function here
//     base2(){
//         console.log("hay i am so cool teacher");
//     }
// }
// var obj=new subclass("kajal","16")


// console.log(obj.base(2,5));
//   console.log(obj.base4(10,5));
  