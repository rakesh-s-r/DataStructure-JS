// Given an integer array nums, return the length of the longest strictly increasing
// subsequence
// .

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

var lengthOfLIS = function (nums) {
  let a = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        const max = Math.max(a[i], a[j] + 1);
        a[i] = max;
      }
    }
  }
  return Math.max(...a);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
