function removeDuplicates(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] !== arr[i + 1]) {
      i++;
    } else {
      arr.slice(i, 1);
    }
  }
  return arr.length;
}
