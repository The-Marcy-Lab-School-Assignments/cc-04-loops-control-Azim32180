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
const sumOfThreeOrFive = () => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

// console.log(sumOfThreeOrFive());

//6

const isAllLowerCase = (str) => {
  if (str === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
// console.log(isAllLowerCase("hello"));
// console.log(isAllLowerCase("Seven Eleven has the worst"));

// Bonus

const countMultiplesOfFive = (array) => {
  let count = 0;
  for (let i = 1; i <= array.length; i++) {
    if (i % 5 === 0) {
      count += 1;
    }
  }
  return count;
};
console.log(countMultiplesOfFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
