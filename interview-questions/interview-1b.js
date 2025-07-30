/*
Problem: Reverse Array In-Place

Write a function that reverses an array in-place without using any built-in reverse methods or creating a new array.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- Can you solve this using the two-pointer technique?
*/

// Reverse an array in-place without using built-in methods
// Requirements:
// - Modify the original array directly (in-place)
// - Do not use built-in reverse() method
// - Do not create a new array
// - Use only constant extra space
//
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1] (original array is modified)
// [5, 2, 3, 4, 1]
// [ 5, 4, 3, 2, 1]
// [ ]

// Your code here
// array can be empty - will contain only numbers
// return just the array of numbers
// input: [1, 2, 3, 4]
//  output; [4, 3, 2, 1]
// [4, 2, 3, 1]
// [ 4, 3, 2, 1]

testArr = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  // iterate array from beginning
  // create var to remember the index
  var i = 0;

  // take the first item, swap with last item
  for (let j = arr.length - 1; j >= 0; j--) {
    // move to next item, swap with second from end.... etc
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;

    // if the indexes match or i surpasses j, we can end the function
    if (i >= j) {
      return arr;
    }
  }
}

reverseArray(testArr);

// keep track of when to terminate the function
