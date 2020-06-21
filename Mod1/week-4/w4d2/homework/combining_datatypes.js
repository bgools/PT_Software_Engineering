
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
