// Memoization example: Fibonacci with caching
function fibonacciWithCache() {
  const cache = new Map();

  function fib(n) {
    // Check if result is in cache
    if (cache.has(n)) {
      return cache.get(n);
    }

    // Base cases
    if (n <= 1) {
      return n;
    }

    // Calculate and cache result
    const result = fib(n - 1) + fib(n - 2);
    cache.set(n, result);

    return result;
  }

  return fib;
}

const fibonacci = fibonacciWithCache();
console.log(fibonacci(40)); // Fast calculation with caching
