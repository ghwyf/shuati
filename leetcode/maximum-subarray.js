/**
 * 2017-11-30 15:11:00
 * beats 71.00 % of javascript submissions
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = Number.MIN_SAFE_INTEGER,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    //总和小于0时，
    if (sum < 0) {
      sum = nums[i];
    }
    else {
      sum += nums[i];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};


console.time('time');
for (let i = 0; i < 1; i++) {
  console.log(maxSubArray([-3, -4, 1]));

}
console.timeEnd('time');