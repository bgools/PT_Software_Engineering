/*
//Loop numbers 1 - 20
for (i=1; i<=20; i++){
    console.log(i);
}
////////////////////
//Easy Going////////
////////////////////

//Even numbers Loop 0-200
for (i=0; i<=200; i+=2){
    console.log(i);
}
//////////////////////
//Get Even Answered///
//////////////////////

//////////////////////
//FizzBuzz///
//////////////////////
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else if (i % 3 === 0){
        console.log("Fizz")
    }
    console.log(i)
}

////Wild Wild Life////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
plantee[2] = 5001;
wolfy[3] = "Gothem City";
dart.push ("Hawkins");
wolfy[0] = "Gameboy";

console.log(wolfy);
console.log(sharky);
console.log(plantee);
console.log(porgee);
console.log(dart);


//Yell at the Ninja Turtles///
const turles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (name of turles){
    let yellAtTurtles = name.toUpperCase();
    console.log(yellAtTurtles);
}

///////////////////////
//Methods, Revisited///
///////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 
'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];



console.log(favMovies[8]);
// 1.
favMovies.sort(); //sorts the array
console.log(favMovies);

// 2.
favMovies.pop(); //removes the last element of the array
console.log(favMovies);

// 3.
favMovies.push("Guardians of the Galexy");
console.log(favMovies);

// 4.
favMovies.reverse(); //reverse the order of the array
console.log(favMovies);

// 5.
favMovies.shift(); //suppose to remove the last element of the array, not sure how to make it remove "Fast and Furious"
console.log(favMovies);

// 6.
favMovies.unshift("Batman"); //allows you to add additional elements to the front of the array
console.log(favMovies);

// 7.
//const seven = favMovies.indexOf("Django Unchained")
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar"); 
//favMovies.splice(15,1,"Avatar"); //splice allows you to replace an element within an array base off of starting location
console.log(favMovies)

// 8.
//const eight = favMovies.slice(9,19);
const eight = favMovies.slice(Math.ceil(favMovies.length / 2)); //Not sure why this worked
console.log(eight);

// 9.
const value = eight.length;
console.log(value);

//console.log(favMovies.slice());
//console.log(favMovies.slice(0, Math.ceil(favMovies.length / 2))); //Testing why the code from question 8 removed the first half of the slice

// 10.
console.log(favMovies);


///////////////////////
//Where is Waldo///////
///////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);

console.log(whereIsWaldo);

whereIsWaldo[1].splice(2, 1, "No One");

console.log(whereIsWaldo);

*/

////////////////////////
//Excited Kitten////////
////////////////////////

// 1.
const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
//for (i = 1; i <= 20; i ++){
   // console.log("Love me, pet me! HSSSSSS!");
//}

// 2.
for (i = 1; i <= 20; i ++){
    if (i % 2 === 0){
        console.log(kittyTalk[Math.floor(Math.random() * kittyTalk.length)]);
    } else if (i % 2 !== 0){
        console.log("Love me, pet me! HSSSSSS!")
    }
}
