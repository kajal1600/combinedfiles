// class car{
//     constructor(){
//       let color;
//       let model;
//       let cost;
//     }
//     setcolor(color){
//         this.color=color;
//     }
//     setmodel(model){
//         this.model=model;
//     }
//     setcost(cost){
//         this.cost=cost;
//     }
//     getcolor(){
//         return console.log(this.color);
//     }
//     getmodel(){
//         return console.log(this.model);
//     }
//     getcost(){
//         return console.log(this.cost);
//     }

// }
// var result=new car()
// result.setcolor("black")
// result.setmodel(2024);
// result.setcost(120000)
// result.getcolor()
// result.getcost()

// practice example
class book{
    constructor(title,author){
        this.title=title;
        this.author=author;
    }
    gettitle(){
        return (`${this.title}`)
    }
    getauthor(){
        return (`${this.author}`)
    }
}
var result=new book("c++","dennis ritche")
console.log(result.gettitle());