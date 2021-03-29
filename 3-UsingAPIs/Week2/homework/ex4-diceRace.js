'use strict';
/*------------------------------------------------------------------------------
1. Complete the function `rollTheDices()` by using `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

async function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  return await Promise.race(dices.map((dice) => rollDice(dice)));
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    await rollTheDices()
      .then((results) => console.log('Resolved!', results))
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

main();

// ! Do not change or remove the code below
module.exports = rollTheDices;
