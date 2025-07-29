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

function moveZeroes(nums) {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap with the element at lastNonZero pointer
      [nums[i], nums[lastNonZero]] = [nums[lastNonZero], nums[i]];
      lastNonZero++;
    }
    console.log(nums);
  }
}
