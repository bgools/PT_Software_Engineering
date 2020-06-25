

//////////////////////
///Creating Classes///
//////////////////////

//Hamster//

class Hamster {
    constructor(owner, name, price){
        this.owner = ''
        this.name = name
        this.price = 15
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
//const bill = new Hamster('Bryan', 'Bill', 20)
//console.log(bill);

//Person//

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
        this.mood = mood
        this.hamsters = hamsters
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
    //buyHamster(hamster)

}
const bryan = new Person('Bryan', 34, 72, 10, 10, ['bill', 'jack', 'jill'], 300)
console.log(bryan.getName());
console.log(bryan.getAge());
console.log(bryan.getWeight());


