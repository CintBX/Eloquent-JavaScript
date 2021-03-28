/*
  In this chapter, you walked through creating a 2D platform game using pure JavaScript.
  
  It’s traditional for platform games to have the player start with a limited number of lives
  and subtract one life each time they die.
  When the player is out of lives, the game restarts from the beginning.

  Adjust runGame to implement lives.
  Have the player start with three.
  Output the current number of lives (using console.log) every time a level starts.
*/

// My Solution
async function runGame(plans, Display) {
  let lives = 3;
  
  for (let level = 0; level < plans.length;) {
    console.log(lives == 1 ? `You have ${lives} life.` : `You have ${lives} lives.`);
    
    let status = await runLevel(new Level(plans[level]), Display);

    if (status == "lost") lives--;
    if (status == "won") level++;

    if(lives == 0) {
      console.log("Game over.  Please try again.");
      level = 0;
      lives = 3;
    };
  };
  
  console.log("You've won!");
}
runGame(GAME_LEVELS, DOMDisplay);


// Text Solution
async function runGame(plans, Display) {
  let lives = 3;
  
  for (let level = 0; level < plans.length && lives > 0;) {
    console.log(`Level ${level + 1}, lives: ${lives}`);
    let status = await runLevel(new Level(plans[level]), Display);
    
    if (status == "won") level++;
    else lives--;
  }
  
  if (lives > 0) {
    console.log("You've won!");
  } else {
    console.log("Game over");
  }
}
runGame(GAME_LEVELS, DOMDisplay);


/*
  What I like about the text solution is the inclusion of Level number in the console.
  It is also more efficient in it's addition to "lives > 0" in the for loop, as well as
  the "else lives--" statement.

  However, the text solution ends the game completely at the end of 3 lives, whereas mine
  returns you back to level 1 to start anew, refreshing the lives count.
*/