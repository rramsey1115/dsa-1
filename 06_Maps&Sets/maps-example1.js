const fruitInventory = new Map([
  ["apples", 50],
  ["bananas", 30],
  ["oranges", 25],
]);

// Method 1: Using for...of with entries()
for (const [fruit, count] of fruitInventory.entries()) {
  console.log(`${fruit}: ${count}`);
}

// Method 2: Using for...of directly (same as entries())
for (const [fruit, count] of fruitInventory) {
  console.log(`${fruit}: ${count}`);
}

// Method 3: Using forEach
fruitInventory.forEach((count, fruit) => {
  console.log(`${fruit}: ${count}`);
});

// Getting all keys
console.log([...fruitInventory.keys()]); // ['apples', 'bananas', 'oranges']

// Getting all values
console.log([...fruitInventory.values()]); // [50, 30, 25]
