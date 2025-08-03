const fruits = new Set(["apple", "banana", "orange"]);

// Method 1: Using for...of
for (const fruit of fruits) {
  console.log(fruit);
}

// Method 2: Using forEach
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Method 3: Using values() method with for...of
for (const fruit of fruits.values()) {
  console.log(fruit);
}

// Converting to array and using array methods
const fruitArray = [...fruits];
fruitArray.forEach((fruit) => {
  console.log(fruit);
});
