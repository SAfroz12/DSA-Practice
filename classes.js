// your code goes here
// 1) class example 
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`this is ${this.name} and this is ${this.age}`);
    }
    
    
}
let p1=new Person("ali",34);
// p1.greet();

// 2) polymorphism
class Animal{
    
    sound(){
        console.log("Animal barks")
    }
}
class Dog extends Animal{
    sound(){
        console.log("dog barks")
    }
}
class Cat extends Dog{
    sound(){
        console.log("cat bites")
    }
    
}
let dog=new Dog();
let cat=new Cat();
// dog.sound();
// cat.sound();


// 3) encapsulation 
class Balance{
    #balance=0;
    
    deposit(amount){
        this.#balance+=amount;
    }
    getBalance(){
        return this.#balance;
        
    }
    
}
let user=new Balance();
user.deposit(500);
// console.log(user.getBalance())

