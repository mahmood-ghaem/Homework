/**
 * Credit to https://adventofcode.com/ for this exercise
In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.
Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */

const list = [1721, 979, 366, 299, 675, 1456];

// Write your code here

// let result;
// for (let i = 0; i < list.length - 2; i++) {
//   if (result === undefined) {
//     list.forEach((first) => {
//       if (result === undefined) {
//         list.forEach((second) => {
//           if (list[i] === first || list[i] === second || first === second) {
//             return;
//           } else if (list[i] + first + second === 2020) {
//             result = list[i] * first * second;
//             console.log(`${list[i]} * ${first} * ${second} = result`);
//           }
//         });
//       }
//     });
//   } else {
//     return;
//   }
// }

//-------------------------------After Frank's review-----------------------------------

let result;
for (let i = 0; i < list.length && result === undefined; i++) {
  const firstNum = list[i];
  for (let j = 0; j < list.length && result === undefined; j++) {
    const secondNum = list[j];
    for (let y = 0; y < list.length && result === undefined; y++) {
      const thirdNum = list[y];
      if (firstNum + secondNum + thirdNum === 2020) {
        result = firstNum * secondNum * thirdNum;
        console.log(`${firstNum} * ${secondNum} * ${thirdNum} = result`);
      }
    }
  }
}

// TEST CODE, do not change
console.assert(
  result === 241861950,
  `The result is not correct, it is ${result}, but should be 241861950`
);
