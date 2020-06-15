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

*/

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
 


