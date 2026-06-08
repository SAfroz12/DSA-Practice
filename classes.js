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

 class BalanceAmount{
    constructor(name,salary){
        this.name=name;
        this._salary=salary;

    }
    get Balance(){
        return this._salary;
    }
    set balanceAmount(amount){
        if(amount<0){
            console.log('salary is not negative');
            return ;
        }
        this._salary=amount;
    }
 }


 const user1=new BalanceAmount('afroz',9000);
//  console.log(user1.Balance);
 user1.balanceAmount=-800;;
//  console.log(user1.Balance)