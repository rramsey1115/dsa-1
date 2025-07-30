/*
Hi 👋,
You'll be guiding your partner through the coding problem on the right side of your screen.

⚠️ Please do not share this URL / problem before class.
Revealing the question early defeats the purpose of simulating a real-world interview, where candidates do not know the problem in advance. Let's give your partner the chance to experience the challenge authentically.

🧠 Before class:
Take time to study the problem. During the session, you'll have 90 minutes in your breakout room to run a mock interview with your partner. Be sure to take turns acting as the interviewer and interviewee.

🗣️ As the interviewer, your responsibilities are:

Send this URL to your partner (copy and past the whole url and slack it directly to you partner)
Briefly introduce the problem
Never give away the answer
Take notes and provide feedback
Fill out this feedback form
🗣️ As the interviewee, your responsibilities are:

Ask clarifying questions
Follow the steps in the solving guide:
Step 1: Clarify
Step 2: Plan
Step 3: Implement
Step 4: Test
Step 5: Optimize
🪞 After the first interview:
Leave 10–15 minutes to reflect, share feedback, and then switch roles.

Best of luck, and enjoy the practice! 🚀

-----------------------------------------------------------------------------------------------------------------

Problem: Move Zeros to End

Write a function that moves all zeros in an array to the end while maintaining the relative order of non-zero elements.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- Can you solve this using the two-pointer technique?
- How does swapping compare to the two-pass approach?

Move all zeros to the end while maintaining relative order
Requirements:
- Modify the array in-place
- Maintain the relative order of non-zero elements
- Do not use extra space for another array
- Use efficient swapping technique

Example:
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Your code here
--------------------------------------------------------------------------------------------*/

// solution 1
// most optimal with O(n) time complexity - only one pass through input array
function moveZeroes1(numsArray) {
  let lastNonZero = 0;
  // iterate array of numsArray
  for (let i = 0; i < numsArray.length; i++) {
    // check if the current index is non-zero
    if (numsArray[i] !== 0) {
      // if is non-zero, swap with last non-zero
      [numsArray[i], numsArray[lastNonZero]] = [
        numsArray[lastNonZero],
        numsArray[i],
      ];
      // increment our counter so that the next swap is in the following index
      lastNonZero++;
    }
  }
  return numsArray;
}

// solution 2
// two pass version (less optimal althrough same time complexity O(n))
function moveZeroes2(numsArray) {
  // used to track which index our non-zeroes exist on
  let pointer = 0;

  // copies all non-zeroes to the front of the array, NOT replacing them
  for (let i = 0; i < numsArray.length; i++) {
    if (numsArray[i] !== 0) {
      numsArray[pointer++] = numsArray[i];
    }
  }

  // based on where the pointer of non-zeroes ended, fill the rest of the array with 0s
  while (pointer < numsArray.length) {
    numsArray[pointer] = 0;
    pointer++;
  }
  // return updated array
  return numsArray;
}

console.log("solution 1: ", moveZeroes1([0, 2, 3, 6, 0, 0, 7, 2, 0]));
console.log("solution 2: ", moveZeroes2([0, 2, 3, 6, 0, 0, 7, 2, 0]));
