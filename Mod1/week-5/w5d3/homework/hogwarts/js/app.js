// Homework wk5 day3    


if (typeof jQuery == 'undefined') {
  //  console.log('oops! I still have to link my jQuery properly!');
  }
  
  else { console.log('I did it! I linked jQuery and this js file!') }
  
  
  
  
  
  /************************Starts here*********************************************************************************************** */
  
  // Year one
  
  
  // test code
  
  
  
  // Query for your div with the id of container and set it to a variable named $container
  
  
  const container = document.querySelector('#container')
  
  console.log(container);
  
  
  
  
  //Create an <h1> element and set it to a variable called $h1 and console log it
  //Add some text inside the h1 element. Example text: 'Hogwarts'
  
  const h1 = document.querySelector('#heading');
  
  const textHeading = document.createTextNode("Hogwarts");
  
  h1.appendChild(textHeading);
  console.log(h1);
  
  
  
  
  // Year 2
  
  
  
  // h2 element with your name
  const h2 =  document.querySelector('#h2');
  
  const nameAdded = document.createTextNode("Hector Perez");
  
  h2.appendChild(nameAdded);
  
  console.log(h2);
  
  
  //h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
  
  const h3 =  document.querySelector('#h3');
  
  const houseName = document.createTextNode("Hufflepuff");
  
  h3.appendChild(houseName);
  console.log(h3);
  
  //h4 element with your pet's name
  //this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
  
  
  const h4 =  document.querySelector('#h4');
  
  const petName = document.createTextNode("Kroffy");
  
  h4.appendChild(petName);
  
  h4.classList.add('Dog')
  
  console.log(h4);
  
  
  const wand =  document.querySelector('#heading4a');
  
  const wandName = document.createTextNode("Wand");
  
  wand.appendChild(wandName);
  
  wand.classList.add('Sprinkles')
  
  console.log(wand);
  
  // Year 3
  //Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):
  const ulist =  document.querySelector('#storage');
  
  ulist.classList.add('trunk')
  
  console.log(ulist);
  
  //this line of code sets the class to the li's elements inside of the Unordered list <ul> <li>...
  
  const node = document.getElementById("storage").getElementsByTagName("li")[1];
  node.setAttribute("class", "secret");
   
  
  const ulMagicMap = document.getElementById("storage").getElementsByTagName("li")[2];
  ulMagicMap.setAttribute("class", "secret");
  
  const turner = document.getElementById("storage").getElementsByTagName("li")[3];
  turner.setAttribute("class", "secret");
  
  
  const leash = document.getElementById("storage").getElementsByTagName("li")[4];
  leash.setAttribute("class", "Dog");
  
  //  This last part, I tried but I could not come out //with anything,
  //const  arraybertieBeans = bertieBeans.append('[lemon, orange, apple]');
  
  let bertieBeans = document.getElementById("storage").getElementsByTagName("li")[5];
  bertieBeans.setAttribute("class", "flavors");
  
  container.appendChild(ulist);
  
  // Year 4
  
  const h5 =  document.querySelector('#h5');
  
  const headingFive = document.createTextNode("Sring 2017");
  
  h5.appendChild(headingFive);
  
  console.log(h5);
  /*
  Year 5
  Things get interesting
  Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
  Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
  Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
  Have your pet come back (remove your pet from the DOM, put it back in its original location)
  */
  
  
  
  //Break your wand! (select the element that contains your wand and remove it)
  // this line of code will eliminate the  wand li element inside of the <Ul>
  
  //const getheadingfour = document.getElementById('heading4a');
  
  //const removed = getheadingfour.removeChild(getheadingfour)
  
  
  
  const parnt = document.getElementById('container')
  
  
  const childr =  parnt.getElementsByTagName('h4') [1];
  //console.log(childr)
  
  const remov = parnt.removeChild(childr) ;
  
  
  
  
  
  
  
  
  //Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
  
  const parent = document.getElementById('container').getElementsByTagName('ul')[0];
  
  
  const child =  parent.getElementsByTagName('li')[0];
  
  const removed = parent.removeChild(child);
  
  
  /*
  Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet
    in the DOM)Make your new wand stand out by adding a color of indigo (or whatever color you like).
     But do it with magic (jQuery): Don't add this css in your main.css file
     */
  
    const newWand =  document.createElement('h4')
    console.log(newWand)
  
  
  
    const newWandName = document.createTextNode("New Wand");
  
    newWand.appendChild(newWandName);
    
    newWand.classList.add('Skittles')
    
    //const setColor = document.querySelector('h4') [0];
  
  
  
  
  
  
    /*
    const petName = document.createTextNode("Kroffy");
    h4.appendChild(petName);
    
    h4.classList.add('Dog')
    
    console.log(h4);
  */
  
  
  
   //const setColor = document.querySelector('h4');
  //console.log(setColor)
  
  
    //const newWandName = document.createTextNode("newWand");
    
    //newWand.appendChild(newwandName);
    
  
    
    //console.log(newWand);