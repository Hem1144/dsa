function sumNums(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + sumNums(num - 1);
  }
}

const number = 5;
const result = sumNums(number);
console.log(`The sum of numbers between 1 and ${number} is: ${result}`);
