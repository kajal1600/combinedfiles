// class kaalu{
//     constructor(name,age,color){
//         this.name=name;
//         this.age=age;
//         this.color=color
        
//     }
//     golu(){
//         var x="moluu"
//         return `${x}pilu`
//     }
//     static hemu(){
//         console.log("hello aakash");
//     }
// }
// // var obj=new kaalu("sanju",10,"blue")
// // console.log(obj.color)
// // console.log(obj.golu())
// // console.log(obj.age);
// // console.log(kaalu.hemu())

// class aakash extends kaalu{
//     constructor(age,marks,height){
//         super(age)
//         // thage;is.age=
//         this.marks=marks;
        
//         this.height=height;
//     }
//     badal(){
//         return `${this.marks}`
//     }
// }
// var obj2= new aakash("20",99,6)
//  console.log(obj2.golu());
//  console.log(obj2.age);

// class employee{
//     constructor(firstname,salary,sex){
//         this.firstname=firstname;
//         this.salary=salary;
//         this.sex=sex;
//     }
//     csdepartment(){
//         return `${this.salary} of science students`;
//     }
//     mathsdepart(){
//         return `${this.sex} of maths students`
//     }
//     static notchange(){
//         var firstname="aakashpagal"
//         // console.log("hello i am never change because i am static")
//         return `${firstname} it seen inside the class only`
//     }
// }
// var getsvalue=new employee("hemlata",300000,"female")
// // console.log(getsvalue.csdepartment());
// // console.log( getsvalue.firstname);
// // console.log(getsvalue.mathsdepart()); 
// console.log(employee.notchange ());


// class user{
//     constructor(username,email,password){
//            this.username=username;
//            this.email=email;
//            this.password=password; 
//        }
//        getpassword(){
//            console.log(this)
//            return `${this.password}abc`  
//        }
//        changeusername(){
//            // return`${this.username.Uppercase()}`
//          return { name:"aakash"}
//        }
//        static myaccount(a,b){
//            return a+b
//        }
//    }
   // console.log(user.myaccount(10,30))
//    var kajal=new user('hemlata','kaju@abc' ,123)
//    console.log(kajal.getpassword())
//    console.log(kajal.changeusername());
//    console.log(user.myaccount(2,3));

// class kaju extends user{
//     constructor(username,email,password){
//         super(username,email,password)
//     }
//     addcolor(){
//         return "red color"
//     }
// }
// var obj=new kaju("khushi","@kajugmail.com","123")
// console.log(obj.addcolor);


// Define a base class Animal
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     sound() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// // Define a subclass Dog that extends Animal
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     // sound() {
//     //     console.log(`${this.name} barks.`);
//     // }

//     describe() {
//         var x="abc";
//         console.log(`${this.name} ${x}is a ${this.breed} dog.`);
//     }
// }


// Create instances of Dog 
// const dog = new Dog("labrador", "buddy");


// // Call methods on instances
// dog.sound();        // Output: Buddy barks.
// dog.describe();     // Output: Buddy is a Labrador dog.


class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
     this.#height = height;
     this.#width = width;
     }
    }
    var ob=new Rectangle(30,40)
console.log(ob.height);
console.log(ob.width);




