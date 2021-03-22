// Challenge: throw five dices in sequence
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const results = [];
  // TODO: expand the chain to include five dices
  rollDice(1)
    .then((value) => {
      console.log('value: ', value);
      results.push(value);
      return rollDice(2);
    })
    .then((value) => {
      console.log('value: ', value);

      results.push(value);
      return rollDice(3);
    })
    .then((value) => {
      console.log('value: ', value);

      results.push(value);
      return rollDice(4);
    })
    .then((value) => {
      console.log('value: ', value);
      results.push(value);
      return rollDice(5);
    })
    .then(() => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}
rollTheDices();
//===================================================================
function rollTheDicesDry() {
  const results = [];

  // pushAndRoll is two function value filled by previous call pushAndRoll by return
  const pushAndRoll = (dice) => (value) => {
    results.push(value);
    return rollDice(dice);
  };

  rollDice(1)
    .then(pushAndRoll(2))
    .then(pushAndRoll(3))
    .then(pushAndRoll(4))
    .then(pushAndRoll(5))
    .then(() => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}
rollTheDicesDry();
// ! Do not change or remove the code below
module.exports = rollTheDices;
