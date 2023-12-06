function flattenArray(arr) {
  let resArry = [];

  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];

    if (!Array.isArray(currVal)) {
      resArry.push(currVal);
    } else {
      resArry = resArry.concat(flattenArray(currVal));
    }
  }
  return resArry;
}

console.log(flattenArray([1, [2, 3, 4, [5, 6, [7, 8]]]]));
