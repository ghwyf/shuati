/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let idx = 0;
  for(let i = 1 ; i < nums.length ; i++ ){
      if( nums[i-1] == val ){
          nums[idx] == nums[i];
          idx++;
          i--;
      }
  }
  nums.splice(i);
};