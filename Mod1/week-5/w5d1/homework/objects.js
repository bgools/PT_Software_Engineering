

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


//1. Instantiate a new Person named Timmy
const Timmy = new Person ('Timmy',);
console.log(Timmy);
//2. Age Timmy five years
for(let i = 1; i <= 5; i++) {
    Timmy.ageUp();
}
console.log(Timmy);
//3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for(let i = 1; i <= 5; i++) {
    Timmy.eat();
}
console.log(Timmy);
//4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times.
for(let i = 1; i <= 5; i++) {
    Timmy.exercise();
}
console.log(Timmy);
//5. Age Timmy 9 years
for(let i = 1; i <= 9; i++) {
    Timmy.ageUp();
}
console.log(Timmy);
//6. Create a hamster named "Gus" & 7. Set Gus's owner to the string "Timmy"
const Gus = new Hamster('Timmy','Gus');
console.log(Gus);
//8. Have Timmy "buy" Gus
Timmy.buyHamster(Gus);
console.log(Timmy);
//I can't get the cost of the hamster to subtract from the bank balance the value keeps coming up as undefined
//9. Age Timmy 15 years
for(let i = 1; i <= 15; i++) {
    Timmy.ageUp();
}
//10. Have Timmy eat twice
for(let i = 1; i <= 2; i++) {
    Timmy.eat();
}


//////////////
///Our Hero///
//////////////

class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {sprinkleSpray: 5, sugarShock: 10};
        this.catchPhrase = ['I\'m fresher than day old pizza', 'You can\'t count my calories'];
    }
    talkSass() {
        let phrases = this.catchPhrase;
        let random = Math.random();
        let totalPhrase = this.catchPhrase.length;
        let randomIndex = Math.floor(random * totalPhrase);
        let randomPhrase = phrases[randomIndex];
        return randomPhrase;
    }
    announceHealth() {
        return `${this.name}'s health is ${this.health}.`;
    }
        fight(enemy) {
            //console.log('i\'m ready to rumble');
            let random = Math.round(Math.random());
            if (random == 1) {
                enemy.health -= this.weapons.sugarShock;
                return (`${this.name} has used sugar shock`)
            } else {
                enemy.health -= this.weapons.sprinkleSpray;
                return (`${this.name} has used sprinkle spray`)
            }
        }
}
const Dougie = new Hero('Dougie');
//Our Enemy
class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {pepperoniStars: 5, cheeseGrease: 10};
        this.catchPhrase = ['I\'m youtube famous', 'I\'m more dangerous than an uncovered sewer'];
    }
    talkSmack() {
        let phrases = this.catchPhrase;
        let random = Math.random();
        let totalPhrase = this.catchPhrase.length;
        let randomIndex = Math.floor(random * totalPhrase);
        let randomPhrase = phrases[randomIndex];
        return randomPhrase;
    }
    announceHealth() {
        return `${this.name}'s health is ${this.health}.`;
    }
    fight(hero) {
        //return 'I\'m gonna flatten you like a slice of pepperoni'
            let random = Math.round(Math.random());
            if (random == 1) {
                hero.health -= this.weapons.pepperoniStars;
                return (`${this.name} has used pepperoni stars`)
            } else {
                hero.health -= this.weapons.cheeseGrease;
                return (`${this.name} has used cheese grease`)
            }
        }
}
const PizzaRat = new Enemy('Pizza Rat');
//Walking Down the Street
console.log(Dougie.talkSass());
console.log(PizzaRat.talkSmack());
console.log(Dougie.announceHealth());
console.log(PizzaRat.announceHealth());
//Fight!
console.log(Dougie.fight(PizzaRat));
console.log(PizzaRat.fight(Dougie));
console.log(PizzaRat.announceHealth());
console.log(Dougie.announceHealth());
