function longestSubstringWithKDistinct(str, k) {
  const charFrequency = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    // Add the current character to the frequency map
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;

    // Shrink the window until we have at most k distinct characters
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];

      // Decrease frequency of the outgoing character
      charFrequency[leftChar]--;

      // Remove the character if its frequency becomes zero
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }

      windowStart++;
    }

    // Update the maximum length
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}
