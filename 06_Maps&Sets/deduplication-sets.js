function removeDuplicates(array) {
  return [...new Set(array)];
}

// Example usage
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
