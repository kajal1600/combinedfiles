// function getdata(){
//     const url=('https://jsonplaceholder.typicode.com/posts')

//     fetch(url)
//     .then(x=>x.json())
//     .then(data=>{
//         console.log(data)
//     })


// async await
//    async function setdata(){
//  try{ const response= await fetch ('https://jsonplaceholder.typicode.com/posts')
//   const data=await response.json()
//   console.log(data);
//    }
 
  
   

    // .then(response=>response.json())
    // .then(data=>{
    //     console.log(data);
    //  })

// catch(error){
// console.error('fetch error:',error)
// }
// } 
 

// setdata()
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response=>response.json())
// .then(data=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.error("data not found")
// });

// fetch ("https://jsonplaceholder.typicode.com/posts")
// .then(response=>response.json())
// .then(data=>{
//     console.log(data);
// })
// .catch(()=>{
//     console.error("this provide an some error")
// })
// async function kajala() {
//     const response= await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data= await response.json()
//     console.log(data); 
// }

// kajala()
// function getData(){
//     var URL=('https://jsonplaceholder.typicode.com/posts')
//      fetch(URL)
//     .then(responsae=> responsae.json())
//     .then(data=>{
//         console.log(data)
    
//     })
//     .catch(error=> {
//         // Handle errors
//         console.error('Fetch Error:', error);
//       });
//     }

// getData();

// function getdata() {
//      var url=('https://jsonplaceholder.typicode.com/posts')
//      fetch(url)
//      .then((response)=>response.json())
//      .then((data)=>{
//         console.log(data);
//      })
//      .catch(()=>{
//         console.log("fetch error");
//      })
    
// }
// getdata();

// function getdata() {
//     fetch("https://dummyjson.com/products/1")
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//     })
    
// }
// getdata();

// function wrongdata() {
//     fetch('https://jsonplaceholder.typicod.com/posts')
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(error=>{
//         console.log("error are occured",error);
//     })
    
// }
// wrongdata()
// function takesdata() {
//     fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(error=>{
//         console.log("here are some error",error);
//     })
    
// } 
// takesdata()

function getdata() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log("any error here",error)
    })
}
getdata()
