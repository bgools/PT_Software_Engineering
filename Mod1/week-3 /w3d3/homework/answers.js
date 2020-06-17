/*
/////////////////////////
///Datatype Refresher////
/////////////////////////

// 1.
//datatype: Boolean
//data structure example: 
const light = true;

// 2.
//datatype: string
//data structure example: 
let email = "johndoe@email.com";

// 3.
//datatype: Array
//data structure example: 
const spaceship = ['hull', 'laser blasters', 'tractor beams', 'warp drive']

// 4.
//datatype: Array
//data structure example: 
const studentNames = ['Antwan Brinkley', 'Arron Aman', 'Beth Mallett', 'Thomas Vinson']

// 5.
//datatype: Array of Objects
//data structure example: 

const studentNames_Locations = [
    {name: 'Antwan', location: 'Columbus, OH'},
    {name: 'Arron', location: 'Columbus, OH'},
    {name: 'Beth', location: 'Columbus, OH'},
    {name: 'Thomas', location: 'Columbus, OH'}
]
console.log(studentNames_Locations);

// 6.
//datatype: Array of Objects with Array
//data structure ezample:
const studentNames_Locations1 = [
    {name: 'Antwan', location: 'Columbus, OH', favTvShows: ['Grimm', 'Agents of Shield', 'The Simpsons']},
    {name: 'Arron', location: 'Columbus, OH', favTvShows: ['Bones', 'Smallville', 'Darkwing Duck']},
    {name: 'Beth', location: 'Columbus, OH', favTvShows: ['The Mentalist', 'Flash', 'Family Guy']},
    {name: 'Thomas', location: 'Columbus, OH', favTvShows: ['Betas', 'Silicon Valley', 'Care Bears']},
]
console.log(studentNames_Locations1);


//////////////////////////
///Take It Easy///////////
//////////////////////////

// 1.
const colorsOfTheRainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']


// 2.
console.log(colorsOfTheRainbow[4]);

// 3.
const bryan = {
    favFood: 'Pizza',
    hobby: 'Music',
    currentCity: 'Columbus, OH',
    favDataType: 'Objects'
}

// 4.
console.log(bryan.hobby);



////////////////////////
///Crazy Object!////////
////////////////////////

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

  // 1.
  console.log(crazyObject.taco[1].salsa[5]);

  // 2. 
  console.log(crazyObject.larry.quotes[0]);

  // 3.
  console.log(crazyObject.larry.characters[2].favourtieHobby);

  // 4.
  console.log(crazyObject.larry.nicknames[1]);

  // 5.
  console.log(crazyObject.larry.characters[1]);

  // 6.
  crazyObject.larry.quotes.push("I\'m trying to elevate small talk to medium talk");
  console.log(crazyObject.larry.quotes);



////////////////////////
///Object-ception///////
////////////////////////

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null);

*/


///////////////////////
///Bond Films//////////
///////////////////////

const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];


// 1.
const bondTitles = [];

for (let i=0; i < bondFilms.length; i++) {
    bondTitles.push(bondFilms[i].title);
}
console.log(bondTitles)

/// ALL MY ORIGINAL FAILURES!!!! LOL!!! /////

//const bondTitles = []

//for (let i = 0; i <bondFilms.length; i++){
    //bondTitles.push(Object.keys(bondFilms[i]).title);
    //}
    //console.log(bondTitles);

//for (let key in bondFilms) {
   // console.log(Object.keys(bondFilms));
//}

  //for (i = 0; i < bondFilms.length; i ++){
    //  console.log(bondFilms[i].title);
  //}
  //const bondTitles = bondFilms[i].title;
  //console.log(bondTitles);

/////////////////////////////////////////////

// 2. 
const oddBonds = [];

for (let i=0; i < bondFilms.length; i++) {
    if(bondFilms[i].year % 2 !== 0){
    oddBonds.push(bondFilms[i].year)};
}
console.log(oddBonds);

// 3.
let bondGross = 0;
for (z = 0; z < bondFilms.length; z++) {
 let h = (bondFilms[z]["gross"].replace(/\$|,/g, ''));
 let p = (parseInt(h));
 bondGross += p;
}
console.log('$' + bondGross)

