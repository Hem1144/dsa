function callCount() {
  let count = 0;
  return function () {
    return (count += 1);
  };
}

let newFunction1 = callCount();
newFunction1();
newFunction1();
console.log(newFunction1());

let newFunction2 = callCount();
newFunction2();
newFunction2();
console.log(newFunction2());
