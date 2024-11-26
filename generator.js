// function* x() {
//     let i =100;
//     while(true){
//     i--;
// yield i
//     }
    
// }
// var y=x()
// function kajal() {
//     // console.log(y.next())
//     document.getElementById("newid").innerText=y.next().value
    
// }

// function *counting() {
//     var x=20
// yield x;
    
// }
// var result=counting()
// console.log(result.next());

// var a=0
// function *x() {
//     while(true);
//   i++
// }
// var call=x()
// for(let i=0;i<10;i++)    yield i;

// function *kajal(){

//     console.log('happy')
//     var x=20
//         yield x;
//         console.log('i am not happy')
//         yield 30
//         yield 'third yield'
//         console.log('not good')
//     }
//     var abc=kajal()
//     console.log(abc.next())
//     console.log(abc.next())
//     console.log(abc.next())
//     console.log(abc.next())
  
// function* infiniteSequence() {
//     let i = 0;
//     while (true) {
//         yield i;
//         i++;
//     }
// }
// const generator = infiniteSequence();
// for (let i = 0; i < 10; i++){
// console.log(generator.next().value)}


// function *counting() {
//     let i =1;
//     while(true){
//     yield i;
//     i++;
//     }
    
// }
// let result=counting()
// for(let i=1;i<10;i++)
// console.log(result.next().value);

// function* kajal(){
//     const arr=[1,2,3,4,5,6]
//     yield* arr
//     }
//     const xyz=kajal()
//     for(let i=0;i<=4;i++)
//     console.log(xyz.next().value)
    
    // console.log(xyz.next())
    // console.log(xyz.next())
    // console.log(xyz.next())

    // function* fetchGenerator() {
    //     try {
    //       const response = yield fetch('https://jsonplaceholder.typicode.com/posts/1/comments') // Pause here until fetch completes
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch data');
    //       }
    //       const data = yield response.json(); // Pause here until JSON parsing completes
    //       console.log('Data received:', data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   }
    //   function run() {
    //   var getdata=fetchGenerator()
    //  console.log(getdata.next());
    
    //  promise.then((data)=>{
    //     getdata.next(data);
    //   })
    //   // promise.then(data => {
    //   //   generator.next(data); // Pass the data back to the generator
    //   // }
    // };

    // run();

    // Generator function to handle asynchronous API calls
// function* fetchGenerator() {
//   try {
//     const data = yield fetchData(); // Pause here until fetchData() completes
//     console.log('Data received:', data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// // Function to iterate through the generator
// function runGenerator() {
//   const generator = fetchGenerator();
//   const promise = generator.next().value; // Start the generator

//   promise.then(data => {
//     generator.next(data); // Pass the data back to the generator
//   }).catch(error => {
//     generator.throw(error); // Throw an error if something goes wrong
//   });
// }

// // Run the generator
// runGenerator();

// meri taraf s hua code
// function *generatorfun() {
//   const response= yield fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//   const data=yield response.json()
//   console.log("data is come",data);
  
// }
// function handle(){
// var getdata=generatorfun()
// var result=getdata.next().value
// result.then((response)=>{
    
//     const finalresult=response.json()

//   finalresult.then((data)=>{
//     console.log(data);
//   })
//   })
// }
// handle();


// function *getdata() {
//   const response=yield fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//   const data=yield response.json()
//   console.log(data);
  
// }
// function result() {
//   var get=getdata();
//   var resul=get.next().value;

//   resul.then((data)=>{
//     console.log(data);
//   })
  
// }
// result();


// function* getdata() {
//     const fetcing= yield fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//     const data=fetcing.json()
//     console.log(data);
    

// }
// function handle(params) {
    

// const instance=getdata()
// const nextvalue=instance.next().value

// nextvalue.then((response)=>{
//     const finalresult=response.json()
//     finalresult.then((data)=>{
//         console.log(data);
        
//     })
// })
// }
// handle()


// function* fetchUsers() {
//     try {
//         const response = yield fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//         const users = yield response.json();
//         console.log(users); // Logs the fetched users
//         return users;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// function handle() {
//     const instance=fetchUsers().next().value

    
//     instance.then((response)=>{
//         response.json()
//         .then((data)=>{
//             console.log(data);
            
//         })
//     })
// }
// handle()


// console.log(x)
// let x=5
// x.Uppercase()

//  let arr=new Array(5)
//  console.log(arr);

// function xyz() {
//     for(let i=0;i<=5;i++){
//  xyz(i)
//     }
    

   
// }
// xyz()

// which methid is used to reterive a character from a certain index
// let psropsn={

// }
// let obj=new Object()
// obj.name='kajal'
// obj.age=23

// function add(name,age) {
//     this.name=name,
//     this.age=age
// }

//  let abc=new add('kajal',66)


let a=null
console.log(a);




 

