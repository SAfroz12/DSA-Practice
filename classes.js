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

// without encapsulation 
 class Balance{
    
    constructor(name,salary){
        this.name=name;
        this.salary=salary;

    }

 }
 const user=new Balance("js",10000);
 user.salary=-100000;
//  console.log(user.salary);
 

 //with encapsulation 

 class Balance {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    addMoney(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
}

const u1 = new Balance("js", 10000);

u1.addMoney(1000);

console.log(u1.balance);


//inheritance 
class Employee{
    constructor(name,email){
        this.name=name;
        this.email=email
    }
    login(){
        console.log(`${this.name} was logged in`)
    }

}
class Developer extends Employee{
     code(){
        console.log("writing a code")
     }
}
class Manager extends Employee{
    work(){
        console.log("manager checked")
    }

}
// const u1=new Employee("affroz","affrozali");
// u1.login();
// const u2=new Developer("ali","aaaa");
// u2.login()