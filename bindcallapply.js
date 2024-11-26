// let kajaldetails={
//   firstname:"kajal",
//   lastname:"massey",
//   class:"bca",
//   age:16,
//   printfulldetail:function(){
//     console.log(this.firstname+' '+this.lastname+' '+this.class+' '+this.age)
//   }
// }
// let printfulldetail=function(gender,hometown){
//     console.log(this.firstname+' '+this.lastname+' '+this.class+' '+this.age+' '+gender+hometown)
//   }
//   printfulldetail.call(kajaldetails,"female",'delhi')
// kajaldetails.printfulldetail()
// let lalitdetails={
//     firstname:"lalit",
//     lastname:"massey",
//     class:"secondary",
//     age:15,
// }
//function borrow
// printfulldetail.call(lalitdetails,'male',"palwal")
// printfulldetail.apply(lalitdetails,['male',"palwal"])
// kajaldetails.printfulldetail.call(lalitdetails)
// let print=printfulldetail.bind(lalitdetails,'male',"palwal")
// print()



// using call function 
let person={
    firstname:"raju",
    lastname:"jain",
    field:"IT",
    salary:"1000000",
   
}
let basicdetail=function(amount,gender){
    console.log(this.firstname+ ' '+ this.lastname+ ' '+this.field+' '+this.salary+' '+gender+' '+amount);
        }
basicdetail.call(person,"male","20000")

// using call method
let lalitid={
    firstname:"username",
    lastname:"@lait.com",
    field:"yes"
}
basicdetail.call(lalitid,"male","400000")
