//! 1st method
const arr = [0, 0, 2, 2, 3, 4, 4, 5];

function removeDuplicate() {
  let i = 0;
  while (i < arr.length) {
    let firstVal = arr[i];
    let secondVal = arr[i + 1];

    if (firstVal === secondVal) {
      arr.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  return arr.length;
}

console.log(removeDuplicate(arr));
console.log(arr);

//! 2nd method
function removeDuplicates(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let uniqueIndex = 0;
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      arr[uniqueIndex] = arr[i];
      uniqueIndex++;
    }
  }

  arr.length = uniqueIndex;

  return uniqueIndex;
}

const arr1 = [0, 0, 1, 2, 2, 3, 3, 5];
console.log(removeDuplicates(arr1));
console.log(arr1);
