
// let counter=0
// const getdata=()=>{
//     console.log('Api is call',counter++);
    
// }
// const betterApicalls=(fn,delay)=>{
//     let timer;
// return function(...args) {
//     clearTimeout(timer)
//    timer= setTimeout(()=>{
// fn(...args)
//     },delay)
// }
// }

// let debouncedata=betterApicalls(getdata,300)




// throttling example


const throttle = (fn, limit) => {
    let lastCall = 0; // To track the last execution time
    return function (...args) {
        const now = new Date().getTime(); // Current time
        if (now - lastCall >= limit) {
            lastCall = now; // Update the last call time
            fn(...args); // Call the function
        }
    };
};

// Function to be throttled
const onResize = () => {
    console.log('Window resized at:', new Date().toLocaleTimeString());
};

// Apply throttling to the resize event
const throttledResize = throttle(onResize, 1000); // Function will execute at most once every 1 second

// Add event listener for resizing
window.addEventListener('resize', throttledResize);
