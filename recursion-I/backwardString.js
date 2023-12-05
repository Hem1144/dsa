function backwardString(str) {
  if (str === "") {
    return;
  } else {
    console.log(str.slice(-1));
    backwardString(str.slice(0, -1));
  }
}

backwardString("happy");
