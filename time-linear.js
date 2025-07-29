// Exercise 2: O(n) - Linear Time
// Finding a specific number in an array

// Test data
const small = [1, 2, 3, 4, 5];
const medium = Array.from({ length: 100 }, (_, i) => i + 1);
const large = Array.from({ length: 1000 }, (_, i) => i + 1);

// O(n) function - time grows with input size
function findNumber(arr, target) {
  let operations = 0;

  for (let i = 0; i < arr.length; i++) {
    operations++; // Each comparison is an operation

    if (arr[i] === target) {
      return {
        found: true,
        position: i,
        operations: operations,
      };
    }
  }

  return {
    found: false,
    position: -1,
    operations: operations,
  };
}

// Test with different sizes - looking for the LAST element (worst case)
console.log("=== O(n) LINEAR TIME DEMO ===");
console.log("Searching for the LAST element in arrays (worst case)...\n");

console.log("Small array (5 elements) - looking for 5:");
const result1 = findNumber(small, 5);
console.log(
  `Found: ${result1.found}, Position: ${result1.position}, Operations: ${result1.operations}`
);

console.log("\nMedium array (100 elements) - looking for 76:");
const result2 = findNumber(medium, 76);
console.log(
  `Found: ${result2.found}, Position: ${result2.position}, Operations: ${result2.operations}`
);

console.log("\nLarge array (1000 elements) - looking for 423:");
const result3 = findNumber(large, 423);
console.log(
  `Found: ${result3.found}, Position: ${result3.position}, Operations: ${result3.operations}`
);

console.log("\nLarge array (1000 elements) - looking for 1000:");
const result4 = findNumber(large, 1000);
console.log(
  `Found: ${result4.found}, Position: ${result4.position}, Operations: ${result4.operations}`
);

console.log("\n💡 Notice: Operations = Array Size!");
console.log("When array is 2x bigger, operations are 2x more.");
console.log("This is O(n) - linear time complexity.");
