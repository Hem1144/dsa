function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (!Array.isArray(val)) {
      sum += val;
    } else {
      sum += arraySum(val);
    }
  }
  return sum;
}

console.log(arraySum([8, [6, [7, 5, 3], [0, 9]]]));
// console.log(arraySum([1, 2, 3, 4, 5]));
