function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

function mergeSort(arr) {
  // base case: array of length one or zero is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  //* split the array into two halves
  const midpointIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midpointIndex);
  const rightHalf = arr.slice(midpointIndex);

  //* recursively sort each half
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  //* combine the sorted halves in order
  return merge(sortedLeftHalf, sortedRightHalf);
}

console.log(mergeSort([1, 9, 2, 0, 8]));
