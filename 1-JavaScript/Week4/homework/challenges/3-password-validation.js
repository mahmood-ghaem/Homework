/**
 * Credit to https://adventofcode.com/ for this exercise
 *
 * Each object in the passwordList gives a password policy and then the password.
 * The times field says the minimal and maximal amount of times the letter should be in the password. So 1-3 means at least 1 time, at most 3 times.
 * The letter field gives which letter should be counted
 * The password field gives the password
 *
 * In the list 2 passwords are valid, the middle one is not as there is no b in the password.
 *
 * We expect the output:
 *
 * 'abcde' is VALID, a is present 1 times and should have been present at least 1 and at most 3 times
 * 'cdefg' is INVALID, b is present 0 times and should have been present at least 1 and at most 3 times
 * 'ccccccccc' is VALID, c is present 9 times and should have been present at least 2 and at most 9 times
 */

const passwordList = [
  { times: '1-3', letter: 'a', password: 'abcde' },
  { times: '1-3', letter: 'b', password: 'cdefg' },
  { times: '2-9', letter: 'c', password: 'ccccccccc' },
];

const characterCounter = (password, letter) => {
  const passwordArray = password.split('');
  let count = 0;
  passwordArray.forEach((element) => {
    if (element == letter) {
      count++;
    }
  });
  return count;
};

const checkPassword = (passwordList) => {
  let result = '';
  passwordList.forEach((element) => {
    const count = characterCounter(element.password, element.letter);
    const timesArray = element.times.split('-');
    try {
      if (
        parseInt(timesArray[0]) <= count &&
        count <= parseInt(timesArray[1])
      ) {
        console.log(timesArray[1], parseInt(timesArray[1]));
        result += `'${element.password}' is VALID, ${element.letter} is present ${count} times and should have been present at least ${timesArray[0]} and at most ${timesArray[1]} times \n`;
      } else {
        result += `'${element.password}' is INVALID, ${element.letter} is present ${count} times and should have been present at least ${timesArray[0]} and at most ${timesArray[1]} times \n`;
      }
    } catch (error) {
      console.log(error);
    }
  });
  console.log(result);
};

checkPassword(passwordList);
