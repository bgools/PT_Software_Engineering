


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

////////////
///Every////
////////////

// 1.
const greaterThenZero = (currentValue) => currentValue < 40;

console.log(nums.every(greaterThenZero))

// 2.
const shortWord = (currentValue) => currentValue < 40;

console.log(panagram.every(shortWord))


/////////////////////
///Filter////////////
/////////////////////

// 1.
const lessThan = nums.filter(num => num < 4);

console.log(lessThan);

// 2.
const result = panagram.filter(word => word.length % 2 === 0);

console.log(result);

//////////////////////
///Find///////////////
//////////////////////

// 1.
const found = nums.find(element => element % 5 === 0);

console.log(found);

// 2.
const foundWord = panagram.find(word => word.length > 5);

console.log(foundWord);


/////////////////////
///Find Index////////
/////////////////////

// 1.
let index = nums.findIndex(rank => rank ===3);
console.log(index);


// 2.
let wordIndex = panagram.findIndex(word => word.length <= 2)

console.log(wordIndex);

//////////////////////
///forEach////////////
//////////////////////

// 1.
nums.forEach(element => console.log(element*3));

// 2.
panagram.forEach(element => console.log(element+'!'));

///////////////
///Map/////////
///////////////

// 1.
const map1 = nums.map(x => x * 100);

console.log(map1);

// 2.
const upper = panagram.map(x => x.toUpperCase());

console.log(upper);

//////////////////
///Some///////////
//////////////////

// 1.
const even = (element) => element % 7 === 0;

console.log(nums.some(even));

// 2.
const a = (element) => element.charAt('a');

console.log(panagram.some(a));
