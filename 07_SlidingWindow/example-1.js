function maxSumSlidingWindow(arr, k) {
  const n = arr.length;

  // Handle edge cases
  if (n < k) {
    return null;
  }

  // Compute sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window and update the maximum sum
  for (let i = k; i < n; i++) {
    // Add the next element and remove the first element of the previous window
    windowSum = windowSum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
