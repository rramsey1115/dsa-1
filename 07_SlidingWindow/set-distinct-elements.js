function longestSubstringWithoutRepeating(str) {
  const charSet = new Set();
  let windowStart = 0;
  let maxLength = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    // If the character is already in the window, shrink the window
    while (charSet.has(rightChar)) {
      charSet.delete(str[windowStart]);
      windowStart++;
    }

    // Add the current character to the set
    charSet.add(rightChar);

    // Update the maximum length
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}
