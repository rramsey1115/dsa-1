function findAveragesSlidingWindow(arr, k) {
  const n = arr.length;
  const result = [];

  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    windowSum += arr[windowEnd];

    // When we hit the window size, calculate average and slide the window
    if (windowEnd >= k - 1) {
      result.push(windowSum / k);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return result;
}
