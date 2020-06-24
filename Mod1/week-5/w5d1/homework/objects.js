

//////////////////////
///Creating Classes///
//////////////////////

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
