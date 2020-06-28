

//////////////////////
///Creating Classes///
//////////////////////

//Hamster//

class Hamster {
    constructor(owner, name, price){
        this.owner = owner
        this.name = name
        this.price = price
    }
    wheelRun(){
        console.log('squeak squeak');
    }
    eatFood(){
        console.log('nibble nibble');
    }
    getPrice(){
        let price = this.price
        return price
    }
}
const bill = new Hamster('Bryan', 'Bill', 20)
//console.log(bill.name);

//Person//

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = bankAccount
    }
    getName(){
        let name = this.name
        return name;
    }
    getAge(){
        let age = this.age
        return age;
    }
    getWeight(){
        let weight = this.weight
        return weight;
    }
    greet(){
        console.log('Hi, my name is ' + this.name + '!');
    }
    eat(){
        if (this.weight === 10 && this.mood === 10){
            console.log(++this.weight);
            console.log(++this.mood);
        }
    }
    exercise(){
        if (this.weight === 10){
            console.log(--this.weight);            
        }
    }
    ageUp(){
        let age = ++this.age
        console.log(age);
        let height = ++this.height
        console.log(height);
        let weight = ++this.weight
        console.log(weight);
        let mood = --this.mood
        console.log(mood);
        let bankAccount = (this.bankAccount + 10)
        console.log(bankAccount);        
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood += 10;
        this.bankAccount = this.bankAccount - hamster.price //unable to figure out using getPrice()        
    }

}
const bryan = new Person('Bryan', 34, 72, 10, 10, ['bill', 'jack', 'jill'], 300)
bryan.buyHamster(bill)
console.log(bryan);



//console.log(bryan.getName());
//console.log(bryan.getAge());
//console.log(bryan.getWeight());
//console.log(bryan.eat());
//console.log(bryan.buyHamster());


//////////////////////////////////
///Story with Person class////////
//////////////////////////////////

const timmy = new Person('Timmy', 5, )
