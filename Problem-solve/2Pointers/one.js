var maxOperations = function (nums, k) {
  for (let i = nums.length - 1; i >= 0; i--) {
    let j = 0;
    while (j < nums.length) {
      console.log(nums[i], nums[j], nums[i] + nums[j]);
      if (nums[i] + nums[j] == k) {
        nums.splice(i, 1);
        nums.splice(j, 1);
        break;
      }
      j++;
    }
  }
  console.log(nums);
};

console.log(maxOperations([3, 1, 3, 4, 3], 6));
