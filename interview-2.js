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

Problem: Remove Element
Given an array nums and a value val, remove all occurrences of val in-place and return the new length of the array. 
The order of elements can change. Do not use extra space for another array.

Follow-up Questions:

What is the time complexity of your solution?
What is the space complexity?
How would this change if we needed to preserve order?
*/

/*
Problem: Remove Element

Given an array nums and a value val, remove all occurrences of val in-place and return the new length of the array.
The order of elements can change. 
Do not use extra space for another array.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would this change if we needed to preserve order?
*/

// beginning of your code ---------------------------------------------------------------------------------------------------------------------------

// 1. clarify -------------------------------------------------------------
/* 
    Will val always be an integer
    Will val always be present in nums
    Will nums always be an array with values or can it be empty
    Should I handle cases of faulty data passed to function
  */

// 2. plan ----------------------------------------------------------------
// iterate through array
// any instance of val will be sent to the end of the array
// a counter will track how many times val occurs
// after for loop ends, remove however many occurences of val from the end of the array
// return updated array length

// 3. implement -----------------------------------------------------------
function removeElement(nums, val) {
  // console.log(`Nums: ${nums} - Val: ${val} - Length: ${nums.length}`);
  if (nums.length === 0) {
    return 0; // early return if array is empty
  }

  // iterate array from first index
  for (let i = 0; i < nums.length; i++) {
    // while index is a match with val, remove index
    // use while loop so that when array shifts over, the value at i could be val again
    while (Number(nums[i]) === Number(val)) {
      // console.log("Found Val at idex", i);
      //remove val from array
      nums.splice(i, 1);
    }
  }
  // console.log(`Nums: ${nums} - Val: ${val} - Length: ${nums.length}`);
  return nums.length;
}

// 4. test -----------------------------------------------------------------
const numbers = [4, 5, 5, 7, 9, 11, 0, 3, 6, 22, 8, 5, 8, 1, 5];
const value = 5;
console.log("My solution: ", removeElement(numbers, value));

// 5. optimize -------------------------------------------------------------
/* 
my solution offers linear time complexity O(n) - which I believe is as optimal as you can offer
*/

//  given solution from NSS -------------------------------------------------------------

function removeElement2(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  nums.length = k;
  console.log("nums; ", nums);
  return k;
}

console.log("NSS solution: ", removeElement2(numbers, value));
