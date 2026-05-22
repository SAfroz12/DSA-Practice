// this example 
let obj={
    name:"js",
    greet:function(){
        console.log(this.name)
    }
}
obj.greet()

// call method
let obj1={
    name:"java"
}
function greet(city){
    return `name is ${this.name} and city is ${city}`
}
// console.log(greet.call(obj1,"hyderabad"))

// apply method
let obj2={
    name:"java"
}
function greet(city,place){
    return `name is ${this.name} and city is ${city} and place is ${place}`
}
// console.log(greet.apply(obj2,["hyderabad","Gachibowli"]));

// bind method

let obj2={
    name:"java",
    age:20
}
function greet(city,place){
    return `name is ${this.name} and city is ${city} and place is ${place} and my age is ${this.age}`
}

let val=greet.bind(obj2,"hyderabad");
// console.log(val("gachibowli"))