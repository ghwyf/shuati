/**
 * 2017-11-30 09:40:08
 * beats 72.35 % of javascript submissions.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0;
  for(; i < nums.length ; i++ ){
      if(target <= nums[i]){
          break;
      }
  }
  return i;
};


console.log(searchInsert([1,2],1));