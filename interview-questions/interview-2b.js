/*
Problem: Remove Duplicates from Sorted Array

Given a sorted array, remove duplicates in-place and return the new length. You must modify the array in-place with O(1) extra space.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
*/

// Remove duplicates from sorted array in-place
// Requirements:

// - Array is sorted in ascending order
// - Remove duplicates in-place (modify original array)
// - Return new length after removing duplicates
// - First k elements should contain unique elements
// - Use O(1) extra space complexity
// - Use two-pointer technique
//
// Example:
// Input: nums = [1, 1, 2, 2, 3]
// Output: 3 (array becomes [1, 2, 3, _, _], return 3)
// Your code here

// clarify
// array can be empty
// there could or could not be duplicates in the array
// only return length

function removeDuplicates(nums) {
  // data validation
  if (nums.length === 0) {
    return { message: "Array is empty, so there are no duplicates." };
  }
  // going to need to pointers
  // left pointer will be the value we are finding matches for
  let left = 0;

  // right pointer will move, if it finds a match, remove that value
  for (let right = 1; right < nums.length; right++) {
    // while there's not match, move up
    // if not a match, move both up by 1
    while (nums[left] === nums[right]) {
      nums.splice(right, 1);
    }
    left++;
  }

  // return adjusted array
  return nums.length;
}

// more optimal solution! Doesn't use splice() to add exponential growth
// moves items to end of array, then truncates array in one action instead of slice() having to move all index down each time we remove something
function removeDuplicates(nums) {
  // Handle edge case: empty array
  if (nums.length === 0) {
    return 0;
  }
  // Initialize slow pointer
  let i = 0;
  // Fast pointer starts from second element
  for (let j = 1; j < nums.length; j++) {
    // If current element is different from previous unique element
    if (nums[j] !== nums[i]) {
      // Move slow pointer and update with new unique element
      i++;
      nums[i] = nums[j];
    }
  }
  // truncate the array in order to remove all the duplicates we moved to the end of the array
  // i has been keeping track of the non-duplicates final index
  nums.length = i + 1;
  // Return new length (i + 1 because i is 0-indexed)
  return i + 1;
}
// Time Complexity: O(n) - we visit each element once
// Space Complexity: O(1) - only using constant extra space

console.log(removeDuplicates([1, 1, 2, 2, 3]));
