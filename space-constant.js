// Exercise 4: O(1) Space - Constant Memory
// Finding the largest number WITHOUT creating new arrays

// Test data
const small = [3, 1, 4, 1, 5, 9, 2];
const medium = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 1000)
);
const large = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 1000)
);

// O(1) space function - only uses a few variables
function findLargest(arr) {
  // These variables don't grow with input size
  let largest = arr[0]; // 1 variable
  let operations = 0; // 1 variable
  let currentIndex = 1; // 1 variable

  // Loop through array
  while (currentIndex < arr.length) {
    operations++;

    if (arr[currentIndex] > largest) {
      largest = arr[currentIndex];
    }

    currentIndex++;
  }

  return {
    largest: largest,
    operations: operations,
    variablesUsed: 3, // largest, operations, currentIndex
  };
}

// Test with different sizes
console.log("=== O(1) SPACE COMPLEXITY DEMO ===");
console.log("Finding largest number using constant memory...\n");

console.log("Small array (7 elements):");
const result1 = findLargest(small);
console.log(`Largest: ${result1.largest}`);
console.log(`Operations: ${result1.operations}`);
console.log(`Variables used: ${result1.variablesUsed}`);

console.log("\nMedium array (100 elements):");
const result2 = findLargest(medium);
console.log(`Largest: ${result2.largest}`);
console.log(`Operations: ${result2.operations}`);
console.log(`Variables used: ${result2.variablesUsed}`);

console.log("\nLarge array (10,000 elements):");
const result3 = findLargest(large);
console.log(`Largest: ${result3.largest}`);
console.log(`Operations: ${result3.operations}`);
console.log(`Variables used: ${result3.variablesUsed}`);

console.log("\n💡 Notice: We always use exactly 3 variables!");
console.log("No matter how big the input gets, memory usage stays the same.");
console.log("This is O(1) space complexity - constant memory usage.");
