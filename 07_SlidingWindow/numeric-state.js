function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Add the next element to the window
    windowSum += arr[windowEnd];

    // When we hit the window size, update max and slide the window
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);

      // Remove the element going out of the window
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return maxSum;
}


