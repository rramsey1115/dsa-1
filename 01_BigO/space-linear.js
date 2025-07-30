// Exercise 5: O(n) Space - Linear Memory
// Creating a copy of an array with all numbers doubled

// Test data
const small = [1, 2, 3, 4, 5];
const medium = Array.from({ length: 100 }, (_, i) => i + 1);
const large = Array.from({ length: 1000 }, (_, i) => i + 1);

// O(n) space function - creates new array same size as input
function doubleNumbers(arr) {
  let operations = 0;

  // Create new array - this uses O(n) space!
  let doubledArray = [];

  for (let i = 0; i < arr.length; i++) {
    operations++;
    doubledArray.push(arr[i] * 2); // Adding to new array
  }

  return {
    originalArray: arr,
    doubledArray: doubledArray,
    operations: operations,
    originalSize: arr.length,
    newArraySize: doubledArray.length,
    totalMemoryUsed: arr.length + doubledArray.length, // Input + Output
  };
}

// Test with different sizes
console.log("=== O(n) SPACE COMPLEXITY DEMO ===");
console.log("Creating doubled arrays (new memory for each)...\n");

console.log("Small array (5 elements):");
const result1 = doubleNumbers(small);
console.log(`Original: [${result1.originalArray.join(", ")}]`);
console.log(`Doubled:  [${result1.doubledArray.join(", ")}]`);
console.log(`Memory used: ${result1.totalMemoryUsed} array slots`);

console.log("\nMedium array (100 elements):");
const result2 = doubleNumbers(medium);
console.log(`Original size: ${result2.originalSize}`);
console.log(`New array size: ${result2.newArraySize}`);
console.log(`Memory used: ${result2.totalMemoryUsed} array slots`);

console.log("\nLarge array (1000 elements):");
const result3 = doubleNumbers(large);
console.log(`Original size: ${result3.originalSize}`);
console.log(`New array size: ${result3.newArraySize}`);
console.log(`Memory used: ${result3.totalMemoryUsed} array slots`);

console.log("\n💡 Notice: Memory usage grows with input size!");
console.log("Input size 1000 = Memory usage 2000 (original + new array)");
console.log("This is O(n) space complexity - linear memory growth.");
console.log("\n🤔 Compare this to Exercise 4 where memory stayed constant!");
