// Exercise 7: O(log n) - Logarithmic Time
// Binary Search - Like finding a word in a dictionary!

// Test data - MUST be sorted for binary search to work
const small = [1, 3, 5, 7, 9, 11, 13, 15]; // 8 elements
const medium = Array.from({ length: 100 }, (_, i) => i * 2 + 1); // 100 odd numbers
const large = Array.from({ length: 1000 }, (_, i) => i * 2 + 1); // 1000 odd numbers
const extraLarge = Array.from({ length: 100000 }, (_, i) => i * 2 + 1); // 10,000 odd numbers

// O(log n) Binary Search - cuts problem in half each time!
function binarySearch(sortedArray, target) {
  let operations = 0;
  let left = 0;
  let right = sortedArray.length - 1;
  let steps = []; // Track our search steps

  while (left <= right) {
    operations++;
    let middle = Math.floor((left + right) / 2);
    let middleValue = sortedArray[middle];

    steps.push({
      step: operations,
      left: left,
      right: right,
      middle: middle,
      middleValue: middleValue,
      searchSpace: right - left + 1,
    });

    if (middleValue === target) {
      return {
        found: true,
        position: middle,
        operations: operations,
        steps: steps,
      };
    } else if (middleValue < target) {
      left = middle + 1; // Search right half
    } else {
      right = middle - 1; // Search left half
    }
  }

  return {
    found: false,
    position: -1,
    operations: operations,
    steps: steps,
  };
}

// Compare with linear search for context
function linearSearch(array, target) {
  let operations = 0;
  for (let i = 0; i < array.length; i++) {
    operations++;
    if (array[i] === target) {
      return { found: true, position: i, operations: operations };
    }
  }
  return { found: false, position: -1, operations: operations };
}

console.log("=== O(log n) LOGARITHMIC TIME DEMO ===");
console.log("Binary Search vs Linear Search - The Dictionary Method!\n");

// Test with different sizes - looking for element near the end
console.log("🔍 Small array (8 elements) - looking for 13:");
const target1 = 13;
const binaryResult1 = binarySearch(small, target1);
const linearResult1 = linearSearch(small, target1);
console.log(`Binary Search: ${binaryResult1.operations} operations`);
console.log(`Linear Search: ${linearResult1.operations} operations`);
console.log(
  `Search steps: ${binaryResult1.steps.map((s) => s.middleValue).join(" → ")}\n`
);

console.log("🔍 Medium array (100 elements) - looking for 151:");
const target2 = 151;
const binaryResult2 = binarySearch(medium, target2);
const linearResult2 = linearSearch(medium, target2);
console.log(`Binary Search: ${binaryResult2.operations} operations`);
console.log(`Linear Search: ${linearResult2.operations} operations`);

console.log("🔍 Large array (1,000 elements) - looking for 1501:");
const target3 = 1501;
const binaryResult3 = binarySearch(large, target3);
const linearResult3 = linearSearch(large, target3);
console.log(`Binary Search: ${binaryResult3.operations} operations`);
console.log(`Linear Search: ${linearResult3.operations} operations`);

console.log("🔍 Extra Large array (10,000 elements) - looking for 15001:");
const target4 = 15001;
const binaryResult4 = binarySearch(extraLarge, target4);
const linearResult4 = linearSearch(extraLarge, target4);
console.log(`Binary Search: ${binaryResult4.operations} operations`);
console.log(`Linear Search: ${linearResult4.operations} operations`);

console.log("\n" + "=".repeat(60));
console.log("📊 COMPARISON TABLE:");
console.log("Array Size  | Binary O(log n) | Linear O(n)  | Improvement");
console.log("------------|-----------------|--------------|------------");
console.log(
  `      8     |       ${binaryResult1.operations}         |      ${
    linearResult1.operations
  }       |     ${Math.round(
    linearResult1.operations / binaryResult1.operations
  )}x faster`
);
console.log(
  `    100     |       ${binaryResult2.operations}         |     ${
    linearResult2.operations
  }      |    ${Math.round(
    linearResult2.operations / binaryResult2.operations
  )}x faster`
);
console.log(
  `  1,000     |      ${binaryResult3.operations}         |    ${
    linearResult3.operations
  }     |   ${Math.round(
    linearResult3.operations / binaryResult3.operations
  )}x faster`
);
console.log(
  `10,000     |      ${
    binaryResult4.operations
  }         |  ${linearResult4.operations.toLocaleString()}   |  ${Math.round(
    linearResult4.operations / binaryResult4.operations
  )}x faster`
);

console.log("\n💡 Key Insights:");
console.log("📚 Like finding a word in dictionary - you don't start from 'A'!");
console.log("✂️  Each step cuts the problem IN HALF");
console.log("🚀 10,000 elements? Only ~14 steps max!");
console.log("📈 As data grows 10x, steps grow by only ~3");

console.log("\n🎯 The Magic of O(log n):");
console.log("Even with MASSIVE datasets, search stays lightning fast!");
console.log(
  "This is why databases and search engines use logarithmic algorithms."
);
