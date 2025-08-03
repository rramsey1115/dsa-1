function smallestSubarrayWithSum(arr, targetSum) {
  const n = arr.length;
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    // Add the next element to the window
    windowSum += arr[windowEnd];

    // Shrink the window as small as possible while maintaining the sum >= targetSum
    while (windowSum >= targetSum) {
      // Update the minimum length
      minLength = Math.min(minLength, windowEnd - windowStart + 1);

      // Remove the leftmost element
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  // Return the minimum length or 0 if no such subarray exists
  return minLength === Infinity ? 0 : minLength;
}
