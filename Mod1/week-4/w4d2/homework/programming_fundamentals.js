///////////////////////////////////
///Common Programming Principles///
///////////////////////////////////

/*
DRY = Do not repeat yourself.
KISS = keep it simple, do not make the code too complex.
Avoid creating a YAGNI = do not add what you don't need until you need it
Do the simplest thing that could possibly work = do the simplest work first.
Don't make me think = if you have to fthink too hard when reading the code, it needs to be simplified
Write code for the maintainer = keep the code simple or leave notes for furture maintainers of the code.
Single responsibility principle =  the component of code should perform a single well defined task.
Avoid premature optimization = Don’t even think about optimization unless your code is working
Separation of concerns = Different areas of functionality should be managed by distinct and minimally overlapping modules of code

If any of these concepts are giving me issues. I would have to say it's YAGNI. I feel I'm thinking to far in advance before making sure the simple things are working.

*/


//////////////////////////
///Commenting Code////////
//////////////////////////

const f = l => { //created function named 'f' with a parameter of 'l'
    let es = 0, p = 0, c = 1, n = 0 //creating multiple variables 'es', 'p', 'n', = 0 and 'c' = 1
    while (c <= l) { //while 'c' is less then or equal to 'l' complete the loop
      n = c + p; //'n' equals 'c' + 'p'
      [c, p] = [n, c] //'c' & 'p' equals 'n' & 'c'
      es += (c % 2 === 0) ? c : 0 //filters to get even numbers
    }
    return es //returns an even sum
  }
  
  console.log(f(55)) //console log the value


  //Comparing the same solution with more semantic variable names

  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))