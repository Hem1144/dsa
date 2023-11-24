//! 1st method

function twoSum(arr, targetVal) {
  let i = 0,
    arry = [];

  while (i < arr.length) {
    for (k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === targetVal) {
        arry.push(i);
        arry.push(k);
        return arry;
      }
    }
    i++;
  }
}

console.log(twoSum([0, 1, 4, 3, 5], 5));

//! 2nd method
function twoSum(arr, target) {
  const indexedArr = arr.map((value, index) => ({ value, index }));

  indexedArr.sort((a, b) => a.value - b.value);

  let left = 0;
  let right = indexedArr.length - 1;

  while (left < right) {
    const currentSum = indexedArr[left].value + indexedArr[right].value;

    if (currentSum === target) {
      return [indexedArr[left].index, indexedArr[right].index];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

const arr1 = [0, 3, 5, 2, 4];
const target1 = 9;
console.log(twoSum(arr1, target1));

//! 3rd method
function twoSum(nums, target) {
  const index = new Map();

  for (let i = 0; i < nums.length; i++) {
    const newnum = target - nums[i];

    if (index.has(newnum)) {
      return [index.get(newnum), i];
    }

    index.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([3, 2, , 6, 7, 11, 15], 9));
