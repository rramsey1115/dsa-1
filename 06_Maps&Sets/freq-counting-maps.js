function countFrequency(array) {
  const frequencyMap = new Map();

  for (const item of array) {
    if (frequencyMap.has(item)) {
      frequencyMap.set(item, frequencyMap.get(item) + 1);
    } else {
      frequencyMap.set(item, 1);
    }
  }

  return frequencyMap;
}

// Example usage
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCounts = countFrequency(fruits);

console.log(fruitCounts.get("apple")); // 3
console.log(fruitCounts.get("banana")); // 2
console.log(fruitCounts.get("orange")); // 1


// ------------------------------------------------------------------------------------------------------------------