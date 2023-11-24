function twoSum(arr, targetVal) {
  let i = 0;

  while (i < arr.length) {
    for (k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === targetVal) {
        return [i, k];
      }
    }
    i++;
  }
}
