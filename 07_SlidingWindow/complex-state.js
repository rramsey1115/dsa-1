function smallestSubarrayWithGivenSum(arr, targetSum) {
  let windowSum = 0;
  let windowStart = 0;
  let minLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
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

  return minLength === Infinity ? 0 : minLength;
}
