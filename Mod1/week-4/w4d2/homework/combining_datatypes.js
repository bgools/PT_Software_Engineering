
/////////////////////////////
///Combining Datatypes///////
/////////////////////////////


// 1. Create an object, called crayonBox, that has a property that is an array. 
//The array should have the names of some crayons. Log one of the elements of that array

const crayonBox = {
    listOfCrayons: ['red', 'blue', 'yellow', 'green','black', 'brown', 'purple', 'pink']
}
console.log(crayonBox);
console.log(crayonBox.listOfCrayons[4]);


// 2. Create an object bottle that has a property that is an object: cap. 
//cap can have properties like material: 'metal' or 'plastic', 
//color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: 'plastic',
        color: 'blue'
    }
}

console.log(bottle.cap.material);

// 3. Create an array called receipt that has at least one object in it. 
//The inner objects should be items that have a name and a price. 
//Log one of the properties of that inner object.

const receipt = [
    {
        name: 'Doritoes',
        price: 2
    },
    {
        name: 'Snapple',
        price: 1.19
    }
]

console.log(receipt[1]);


// 4. Create an array called apartmentBuilding that has an array as one of its elements, 
//the inner array should be the names of the tenants. 
//Log one of the elements of the inner array.

const apartmentBuilding = [
    {
        unitNumber: 1,
        tenants: ['bryan', 'steph', 'tre']
    }
]   

console.log(apartmentBuilding[0].tenants[2]);









///////////////////////////////////////////////////////////////////
//Combine objects, arrays, and functions more than one level deep//
///////////////////////////////////////////////////////////////////


// 1.
const knit = () => {
    const obj = {
        item: 'scarf',
        size: '6ft'
    }
    return obj.size
}
console.log(knit());

// 2.
const crayonSelector = () => {
    const crayonBox = {
    listOfCrayons: ['red', 'blue', 'yellow', 'green','black', 'brown', 'purple', 'pink']
    }
    console.log(crayonBox.listOfCrayons[4]);
} 

crayonSelector()


// 3.
const powerButton = () => {
    const options = () => {
    console.log('selct a song');
    }
    options()
}
powerButton()


////////////////////////////////
//Model a Vending Machine///////
////////////////////////////////

const vendingMachine = {
    snacks: [
        {
            name: 'Doritoes',
            price: 2
        },
        {
            name: 'Snapple',
            price: 1.19
        },
        {
            name: 'Brownie',
            price: .75
        }

    ],

    vend: function vend(userInput){
        switch(userInput) {
            case 0:
                return vendingMachine.snacks[0].name;
                break;
            case 1:
                return vendingMachine.snacks[1].name;
                break;
            case 2:
                return vendingMachine.snacks[2].name;
                break;
            default:
                return 'Invalid item please select a different option.'
        }
    }
    
}

console.log(vendingMachine.vend(0));
console.log(vendingMachine.vend(1));
console.log(vendingMachine.vend(2));
console.log(vendingMachine.vend(3));





