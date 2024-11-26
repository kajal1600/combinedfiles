// callback function
// const kajal=()=>{
// return "hello"
// }
// const lalit=()=>{
//     return"namaste"
// }
// const aakash=(y,z,x)=>{
//     console.log(y()+" "+z + " " +x());
// }
// aakash(kajal,80 , lalit)

// let cart=()=>{
//     return"add items"
// }
// let wallet=()=>{
//     return"update wallet"
// }
// let payment=()=>{
//     return"cash on deleivery"
// }
// let proceed=(x,y,z,a)=>{
//     console.log(x(), " ",y(), " ", z()," ",a)
// }
//  const finalresult=()=>{
//     return proceed(cart , wallet , payment,"kajal")}

// settimeout function
// setTimeout((proceed)=>{
//     console.log(cart , wallet , payment,"kajal")
// },10000)
// setTimeout(finalresult,3000)
// function print(i){
//     console.log("This is call number "+i);
// }

// function fun1(callback){
//     setTimeout(()=>{
    

//         callback(1); i++ ;
//         setTimeout(()=>{
     
//       	    callback(i); i++;
//       	    setTimeout(()=>{
        
//         	    callback(i); i++ ;
//         	    setTimeout(()=>{
          
//           		    callback(i); i++ ;
//           		    setTimeout(()=>{
            
//             		    callback(i); i++ ;
//             		    // .... and so on
            		    
//           		    }, 8000)
//         	    }, 7000)
//       	    }, 5000)
//         }, 3000)
//     }, 1000)
// }
// fun1(print);



// function aakash(){
// return("i , love uhhhhhhhhhhh")
// }
// function kajal(x,y){
// 	console.log(x()+" "+y)
// }
// kajal(aakash,"i ,love uh tooooo")
// const hello=(lovely)=>{
// return "say hello"
// }
// const lovely=()=>{
// 	return "cutie pie"
// }
// const hii=(x,y,z)=>{
// 	console.log(x()+" "+y  +" "+z())
// }
// hii(hello,"say hii",lovely)

// settime out function
// const kajal=()=>{
// 		console.log("hello world"); 
// 	}

// setTimeout(kajal,2000)
// let add=(value,callback)=>{
// 	return callback(value+5,false)
// }
// let sub=(value,callback)=>{
// 	return callback(value-3,false)
// }
// let mul=(value,callback)=>{
// 	return callback(value*3,false)
// }
// add(5,function(addres,err){
	
// 		sub(addres,function(subres,err) {
			
// 				mul(addres,function(mulres,err){
					
// 						console.log("result"+mulres);
// 					}
					
//                 )
			
			
// 		})
	
// })


// print all odd even values
// const arr= [1,2,3,4,5,6,7,8,9];
// const array =()=>{
// 	const newarr=[];
// 	for(let i=0; i<arr.length; i++){
// 		if(arr[i]%2 ==0){
// 			newarr.push(arr [i])
// 		}
// 	}
// 	console.log(newarr);;
// };
// array()


// assignment basic
// const currentyear=2024;
// const data=[{
//     first_name:"khusboo",
//     birthtyear:2005,
// },{
//     first_name:"Aakash",
//     birthtyear:2000,
// },{

//     first_name:"kajal",
//     birthtyear:2004,
// }];
// const result=data
// // .map(item=>currentyear- item.birthtyear)
// console.log(currentyear-data[0].birthtyear);

// const arr=[{
//     first:"aakash",
//     last:"rawat",
// },
// {
//     first:"kajal",
//     last:"massey"
// }
// ];
// const newarr=arr.map(x=>{
//     return x.first + " "+x.last
// })
// console.log(newarr)

// const ages=[1,2,3,4,5,6,7,8,9,13,16,19]
// const newarr=ages.filter(x=>{
//  return (x>5 && x<10)
// })
// console.log(newarr);

// const differentoperation=[add, mul , devide]
// const add=()=>{
// const result=5+7;
// return result
// }
// const sub=()=>{
//     const result=7-5;
//     return result
//     }
//     const mul=()=>{
//         const result=7*5;
//         return result
//         }
//         let operation=(x,y,z)=>{
// console.log(x(),y(),z());
//         }
//         operation(add,sub,mul)

// callback function
// const kajal=(x,y)=>{
// 	return (x+y);
// }
// const lalit=(a,b,c)=>{
// 	console.log(a(10,20),b+c);
// }
// lalit(kajal,90,100)

// callback function
// function add(x,y){
//     return x+y;
// }
// function sub(x,y){
//     return x-y;
// }
// function expected(call){
//     return call(30,40);
// }
// console.log(expected(add))
// console.log(expected(sub,40,10));

// function print(i){
//     console.log("this is call number"+i);
// }
// function print(i){
//     console.log("This is call number "+i);
// }
// function fun1(callback){
//     setTimeout(()=>{
//         let i=1
//     callback(i); i++ ;
//         setTimeout(()=>{
     
//       	    callback(i); i++;
//       	    setTimeout(()=>{
        
//         	    callback(i); i++ ;
//         	    setTimeout(()=>{
          
//           		    callback(i); i++ ;
//           		    setTimeout(()=>{
            
//             		    callback(i); i++ ;
//             		    // .... and so on
            		    
//           		    }, 8000)
//         	    }, 7000)
//       	    }, 5000)
//         }, 3000)
//     }, 1000)
// }

// // Calling fun1 with print function as parameter
// fun1(print);

// function testing(abc,xyz){
//     return abc(8,xyz)
// }
// function testA(numA,numB){
//     return (numA-numB(8))
// }
// function testB(numA){
//     return (numA+5)
// }
// console.log(testing(testA,testB))

// function primathon(){
//     console.log("hello primathon"); 
// }
// function greet(message){
//     console.log("message here",message);
// }
// setTimeout(primathon,1000)
// greet("hello world")
// setTimeout(() => {
//     console.log("hii i am kajal massey");
//     setTimeout(() => {
//         console.log("hello i am aakash rawat");
//         setTimeout(() => {
//             console.log("hello i am khusboo jain");
//             setTimeout(() => {
//                 console.log("hello i am all your's");
//             }, 4000);
//         },3000);
//     }, 2000);
// },1000);


// function stepOne(data, callback) {
//     setTimeout(function() {
//         console.log("Step One completed with data:", data);
//         callback(data + 10);
//     }, 1000);
// }

// function stepTwo(data, callback) {
//     setTimeout(function() {
//         console.log("Step Two completed with data:", data);
//         callback(data * 3);
//     }, 1000);
// }

// function stepThree(data, callback) {
//     setTimeout(function() {
//         console.log("Step Three completed with data:", data);
//         callback(data - 5);
//     }, 1000);
// }

// stepOne(5, function(result1) {
//     stepTwo(result1, function(result2) {
//         stepThree(result2, function(result3) {
//             console.log("Final result:", result3);
//         });
//     });
// });

// function addition(val,callback){
//     callback(val+5);
//   }
//   function Subtract(val,callback){
//       callback(val-3);
//     }
//     function multiplication(val,callback){
//       callback(val*5);
//     }
  
//     addition(2, function kaju(add) {
//       Subtract(add, function kaju2(sub) {
//           multiplication(sub, function kaju3(mul) {
//               console.log(mul);
//           });
//       });
//   })
// function naming(callback) {
//     return callback()
//     console.log("hay hello");
// }
// function about(callback) {
//     return callback()
//     console.log("hay namaste");
// }
// naming(x)

// callback function example
// function greeting() {
//   return "good morning dear"
  
// }
// function saynamaste(x,y) {
//  console.log(x()+y);
  
// }
// saynamaste(greeting,30)

// const kajal=()=>{
// return "hello"
// }
// const lalit=()=>{
//     return"namaste"
// }
// const aakash=(y,z,x)=>{
//     console.log(y()+" "+z + " " +x());
// }
// aakash(kajal,80 , lalit)


// function x() {
//   console.log("hello world");
  
// }


// function add(callback) {
//     return callback(5 + 5);
// }

// function mul(callback) {
//     return callback(5 * 5);
// }

// function div(callback) {
//     return callback(5 / 5);
// }

// add(function (addResult) {
//     mul(function (mulResult) {
//         div(function (divResult) {
//             console.log('finally', addResult, mulResult, divResult); 
//         });
//     });
// });




function one(data,callback) {

        console.log('this is first',data);
        callback(data+5)
    
}

function two(data,callback) {
    
        console.log('this is second',data);
        callback(data+5)
    
}

function three(data,callback) {
    
        console.log('this is third',data);
        callback(data+5)

}

one(5, function(result1) {
    two(result1,function(result2) {
        three(result2,function(result3) {
            console.log('finall result',result3);
            
        })
    })
})