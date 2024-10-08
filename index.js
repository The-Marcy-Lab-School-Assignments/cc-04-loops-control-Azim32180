//Write your solutions in this file, don't forget to test your functions.

// 1
const countFromOne = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};
// countFromOne(9);

// 2
const countEveryOdd = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
};
// countEveryOdd(10);

// 3
const isNegative = (num) => {
  return num < 0;
};

// console.log(isNegative(3));
// console.log(isNegative(-2));
// console.log(isNegative(Math.PI));

// 4
const betweenFiveAndTwenty = (num) => {
  return num >= 5 && num <= 20;
};
// console.log(betweenFiveAndTwenty(12));
// console.log(betweenFiveAndTwenty(5));
// console.log(betweenFiveAndTwenty(100));

// 5
const sumOfThreeOrFive = 