// / LocalStorage and sessionStorage are both part of the Web Storage API, providing web developers with a way to store data locally within the user's browser.
            
// localStorage and sessionStorage provide a convenient and efficient way to store data locally within web applications, improving performance, enabling offline capabilities, and enhancing the user experience.

// Web Storage APIs are used by developers to store data into the browser. Now the data here refers to the key-value pair of strings. Now storing this data can be done by 2 mechanisms: either by using the sessionStorage API and the localStorage API

// It’s used a lot even by many big companies to store some less relevant user-specific data into their browsers. Some companies even use it to optimize the performance of the web page speed as access localStorage is faster than making a request to the server and getting the data.
//1. Scope:

// localStorage: Data persists even after the browser is closed and can be accessed across browser sessions.
// sessionStorage: Data persists only for the duration of the page session. Once the tab is closed, the data is deleted.




// If we talk about localStorage, it is almost the same as the session storage but the major difference is that it does not have an expiry. So Even if you close the browser and restart your system and come back again anytime the data persists. That makes it unique and very useful. And among these 3, localStorage has higher memory limit.
//2. Capacity:

// Both have storage limits, typically around 5-10MB per origin (domain).

// 3.Usage:

// localStorage is often used for storing user preferences, settings, or any data that should persist across sessions.
// sessionStorage is useful for storing temporary data, such as data that needs to be available only for the current session.

//4 Security:


// One more important thing to note here is that due to security reasons it follows the same-origin policy. Same-Origin refers to the same Protocol, same host, and the same port.  

// Both localStorage and sessionStorage are scoped to the origin (domain) and are subject to the same-origin policy. This means that scripts from one domain cannot access data stored by another domain.
// However, localStorage data is persistent and can potentially be accessed by other scripts running on the same domain at a later time. sessionStorage data is cleared when the session ends, providing a bit more privacy.