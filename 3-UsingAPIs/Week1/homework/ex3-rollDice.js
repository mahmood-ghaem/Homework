'use strict';
/*------------------------------------------------------------------------------
- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollBack()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDice()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

// TODO Remove callback and return a promise
function rollDice() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Dice scheduled for ${randomRollsToDo} rolls...`);
    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Dice value is now: ${value}`);
      if (roll > 6) {
        reject(new Error('Oops... Dice rolled off the table.'));
      }
      if (roll === randomRollsToDo) {
        resolve(`Success! Dice settled on ${value}.`);
      }
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };
    rollOnce(1);
  });
}

// TODO Refactor to use promise
rollDice((error, value) => {
  if (error !== null) {
    console.log(error.message);
  } else {
    console.log(`Success! Dice settled on ${value}.`);
  }
});

// ! Do not change or remove the code below
module.exports = rollDice;

// In promise version => if there is an error we don't get `Success!`
// In callback version => if there is an error we always get `Success!`
