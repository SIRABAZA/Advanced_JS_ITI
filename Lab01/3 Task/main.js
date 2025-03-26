function createMemorizedFactorial() {
  var cache = {};
  return function factorial(n) {
    if (n == 0 || n == 1) {
      cache[n] = 1; // ====> {1:  1, 0: 1 }
      return 1;
    }
    if (cache.hasOwnProperty(n)) {
      return cache[n];
    }

    cache[n] = n * factorial(n - 1); // =====> assign new prop in cache with the factorial { 4: 24}
    return cache[n];
  };
}

var factorial = createMemorizedFactorial();

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
