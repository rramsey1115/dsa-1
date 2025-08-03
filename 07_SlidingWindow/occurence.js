function countAnagramsSlidingWindow(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  let count = 0;

  // Create frequency map for pattern
  const patternFreq = {};
  for (const char of pattern) {
    patternFreq[char] = (patternFreq[char] || 0) + 1;
  }

  let windowStart = 0;
  let matched = 0;

  // Sliding window
  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    const rightChar = text[windowEnd];

    // If character is in pattern, decrement its count
    if (rightChar in patternFreq) {
      patternFreq[rightChar]--;

      // If frequency becomes zero, we've matched one character completely
      if (patternFreq[rightChar] === 0) {
        matched++;
      }
    }

    // If all characters have been matched, we found an anagram
    if (matched === Object.keys(patternFreq).length) {
      count++;
    }

    // If window size exceeds pattern length, shrink window
    if (windowEnd >= m - 1) {
      const leftChar = text[windowStart];
      windowStart++;

      // If the outgoing character was part of pattern, adjust counts
      if (leftChar in patternFreq) {
        if (patternFreq[leftChar] === 0) {
          matched--;
        }
        patternFreq[leftChar]++;
      }
    }
  }

  return count;
}
