function countToTen(num) {
  if (num <= 10) {
    console.log(num);
    countToTen(num + 1);
  }
}

countToTen(7);
