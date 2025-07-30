// Exercise 3: O(n²) - Quadratic Time
// Finding all pairs of numbers that add up to a target

// Test data
const small = [1, 2, 3, 4, 5];
const medium = Array.from({ length: 50 }, (_, i) => i + 1);
const large = Array.from({ length: 100 }, (_, i) => i + 1);

// O(n²) function - nested loops!
function findPairsThatSum(arr, targetSum) {
  let operations = 0;
  let pairs = [];

  // Outer loop
  for (let i = 0; i < arr.length; i++) {
    // Inner loop - this creates the n² complexity!
    for (let j = i + 1; j < arr.length; j++) {
      operations++; // Each comparison is an operation

      if (arr[i] + arr[j] === targetSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return {
    pairs: pairs,
    operations: operations,
    totalPairs: pairs.length,
  };
}

// Test with different sizes
console.log("=== O(n²) QUADRATIC TIME DEMO ===");
console.log("Finding all pairs that sum to 7...\n");

console.log("Small array (5 elements):");
const result1 = findPairsThatSum(small, 7);
console.log(
  `Pairs found: ${result1.totalPairs}, Operations: ${result1.operations}`
);
console.log(`Expected operations: 5² = ${5 * 5} (roughly)`);

console.log("\nMedium array (50 elements):");
const result2 = findPairsThatSum(medium, 7);
console.log(
  `Pairs found: ${result2.totalPairs}, Operations: ${result2.operations}`
);
console.log(`Expected operations: 50² = ${50 * 50} (roughly)`);

console.log("\nLarge array (100 elements):");
const result3 = findPairsThatSum(large, 7);
console.log(
  `Pairs found: ${result3.totalPairs}, Operations: ${result3.operations}`
);
console.log(`Expected operations: 100² = ${100 * 100} (roughly)`);

console.log("\n😱 Notice: When array doubles from 50 to 100...");
console.log("Operations roughly QUADRUPLE!");
console.log("This is O(n²) - quadratic time complexity.");
console.log("Nested loops are dangerous for large data!");
