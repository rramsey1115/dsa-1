// Creating a new Set
const colors = new Set();

// Adding values
colors.add("red");
colors.add("green");
colors.add("blue");

// Adding a duplicate (will be ignored)
colors.add("red");

// Checking the size
console.log(colors.size); // 3

// Checking if a value exists
console.log(colors.has("green")); // true
console.log(colors.has("yellow")); // false

// Deleting a value
colors.delete("blue");
console.log(colors.size); // 2

// Iterating over values
for (const color of colors) {
  console.log(color);
}

// Creating a Set from an array
const numbers = new Set([1, 2, 3, 4, 4, 5, 5, 5]);
console.log(numbers.size); // 5 (duplicates are automatically removed)

// Converting a Set back to an array
const uniqueArray = [...numbers];
console.log(uniqueArray); // [1, 2, 3, 4, 5]

// Clearing the set
colors.clear();
console.log(colors.size); // 0
