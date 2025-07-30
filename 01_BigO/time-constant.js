// Exercise 1: O(1) - Constant Time
// Getting the first element of an array

// Test data - different sizes
const small = [1, 2, 3, 4, 5];
const medium = Array.from({ length: 100 }, (_, i) => i + 1);
const large = Array.from({ length: 10000 }, (_, i) => i + 1);

// O(1) function - always takes the same time
function getFirstElement(arr) {
  let operations = 0;

  operations++; // This is our "step" - accessing arr[0]
  return {
    value: arr[0],
    operations: operations,
  };
}

// Test with different sizes
console.log("=== O(1) CONSTANT TIME DEMO ===");
console.log("Getting first element from arrays of different sizes...\n");

console.log("Small array (5 elements):");
const result1 = getFirstElement(small);
console.log(
  `First element: ${result1.value}, Operations: ${result1.operations}`
);

console.log("\nMedium array (100 elements):");
const result2 = getFirstElement(medium);
console.log(
  `First element: ${result2.value}, Operations: ${result2.operations}`
);

console.log("\nLarge array (10,000 elements):");
const result3 = getFirstElement(large);
console.log(
  `First element: ${result3.value}, Operations: ${result3.operations}`
);

console.log(
  "\n💡 Notice: No matter how big the array gets, we always do exactly 1 operation!"
);
console.log("This is O(1) - constant time complexity.");
