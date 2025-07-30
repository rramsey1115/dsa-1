// ==============================
// Exercise 1: Help Eleanor Find Book Pairs
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Find two books whose publication years sum to a target year

// Use converging pointers to find a pair that sums to targetYear

function findBookPairForTargetYear(bookYears, targetYear) {
  let left = 0;
  let right = bookYears.length - 1;

  while (left < right) {
    let book1 = bookYears[left];
    let book2 = bookYears[right];

    if (book1 + book2 === targetYear) {
      return {
        book1: book1,
        book2: book2,
      };
    } else if (book1 + book2 > targetYear) {
      right--;
    } else if (book1 + book2 < targetYear) {
      left++;
    }
  }
  return { message: "No two book years add up to given target year." };
  // Return an object with the pair information or null if not found
}

const libraryBooks = [1920, 1945, 1960, 1975, 1980, 1995, 2000, 2012];
// console.log(
//   "Finding pair for 3945:",
//   findBookPairForTargetYear(libraryBooks, 3945)
// );
// console.log(
//   "Finding pair for 2020:",
//   findBookPairForTargetYear(libraryBooks, 2020)
// );

// ==============================
// Exercise 2: Help Eleanor Detect Patterns
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Find the middle book in a reading list and detect if a list has cycles

// Use fast and slow pointers to find the middle book
// Return the middle book and its position

function findMiddleBookInList(bookList) {
  if (bookList.length === 0) {
    return { message: "Empty list has no middle" };
  }
  let fast = 0;
  let slow = 0;
  while (fast < bookList.length - 1) {
    slow++;
    fast += 2;
  }
  return {
    middleBook: bookList[slow],
    position: slow,
    totalBooks: bookList.length,
    message: `Middle book is "${bookList[slow]}" at position ${slow}`,
  };
}

function hasDuplicateInSortedList(sortedBooks) {
  // Use two pointers to detect if there are consecutive duplicates
  // Return true if duplicates found, false otherwise
  let left = 0;
  let right = 1;
  while (sortedBooks[left] !== sortedBooks[right]) {
    left++;
    right++;
  }
  return {
    duplicateValue: sortedBooks[left],
    book1: sortedBooks[left],
    book2: sortedBooks[right],
    book1Position: left,
    book2Position: right,
  };
}

const readingList = ["Book A", "Book B", "Book C", "Book D", "Book E"];
const sortedBooks = ["Animal Farm", "Dune", "Dune", "Foundation"];
// console.log("Middle book:", findMiddleBookInList(readingList));
// console.log("Has duplicates:", hasDuplicateInSortedList(sortedBooks));

// ==============================
// Exercise 3: Help Eleanor Analyze Book Sequences
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Find the best consecutive sequence of books based on popularity scores

// Use sliding window to find the sequence with highest total popularity
// Return the starting index and total popularity score

function findBestBookSequence(popularityScores, sequenceLength) {
  // early return if sequence length is too large for array
  if (sequenceLength > popularityScores.length) {
    return { message: "Sequence length larget than array!" };
  }

  let left = 0;
  let sequenceSum = 0;
  let maxVal = 0;
  let bestStartingIndex = 0;

  // add up sum for the current sequence
  for (let i = 0; i < sequenceLength; i++) {
    sequenceSum += popularityScores[i];
  }
  // store as initial maxVal
  maxVal = sequenceSum;
  console.log("starting maxVal: ", maxVal);

  for (let end = sequenceLength; end < popularityScores.length; end++) {
    sequenceSum = maxVal - popularityScores[left] + popularityScores[end];
    left++;

    if (sequenceSum > maxVal) {
      maxVal = sequenceSum;
      bestStartingIndex = left;
    }
  }

  return {
    startingIndex: bestStartingIndex,
    sequenceLength: sequenceLength,
    sequenceScore: maxVal,
  };
}

// Use dynamic sliding window to find shortest sequence above threshold
// Return the length and starting position of the shortest sequence

function findShortestSequenceAboveThreshold(scores, threshold) {
  if (scores.length === 0) {
    return { message: "No scores provided" };
  }
  if (!Number(threshold)) {
    return { message: "Provided threshold is not a valid number." };
  }

  let windowStart = 0;
  let windowSum = 0;
  let minLength = Infinity;
  let bestStart = 0;
  let bestLength = 0;

  // expand window to right using for loop
  for (let windowEnd = 0; windowEnd < scores.length; windowEnd++) {
    windowSum += scores[windowEnd];

    // while the sum reaches the threshold, but window doesn't collapse
    while (windowSum >= threshold && windowStart <= windowEnd) {
      // calculate size of current window
      let currentLength = windowEnd - windowStart + 1;

      if (currentLength < minLength) {
        // if our current length is the shortest seen so far, save data
        minLength = currentLength;
        bestStart = windowStart;
        bestLength = currentLength;
      }

      // try to shrink the window from left
      windowSum -= scores[windowStart];
      windowStart++;
    } //end of while loop
  } // end of for looop

  if (minLength === Infinity) {
    return {
      message: `No sequence found with popularity above threshold: ${threshold}`,
    };
  }
  return {
    startingPosition: bestStart,
    length: bestLength,
    value: scores
      .slice(bestStart, bestStart + bestLength)
      .reduce((a, b) => a + b, 0),
  };
}

const bookPopularity = [2, 1, 3, 2, 4, 1, 2, 5, 7];
// console.log("Best sequence of 3:", findBestBookSequence(bookPopularity, 3));
console.log(
  "Shortest above 15:",
  findShortestSequenceAboveThreshold(bookPopularity, 15)
);

// ==============================
// Exercise 4: Help Eleanor Solve Palindrome Mysteries
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Check if book titles are palindromes and find the longest palindromic substring

// function isPalindrome(text) {
//   // Use converging pointers to check if text reads the same forwards and backwards
//   // Ignore spaces, punctuation, and case
//   // Return true if palindrome, false otherwise
// }

// function longestPalindromicSubstring(text) {
//   // Find the longest substring that is a palindrome
//   // Return the palindromic substring
// }

// const mysteryTitles = ["A Santa at NASA", "Racecar", "Hello World", "Madam"];
// mysteryTitles.forEach(title => {
//   console.log(`"${title}" is palindrome: ${isPalindrome(title)}`);
// });
// console.log("Longest palindrome in 'A Santa at NASA':", longestPalindromicSubstring("A Santa at NASA"));
