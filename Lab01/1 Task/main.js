function createCounter() {
  var count = 0;
  return function () {
    count += 1;
    return count;
  };
}

console.log(createCounter());
