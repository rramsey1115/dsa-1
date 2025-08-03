function maxSubarraySumSlidingWindow(arr, k) {
  const n = arr.length;

  // Handle edge cases
  if (n < k) {
    return null;
  }

  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window
  for (let i = k; i < n; i++) {
    // Add new element and remove first element of previous window
    windowSum = windowSum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
