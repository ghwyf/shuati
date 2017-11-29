/**
 * 2017-11-29 12:06:25
 * beats 24.64 % of javascript submissions.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  for(let i = 1 ; i < nums.length ; i++ ){
      if(nums[i-1] == nums[i]){
          nums.splice(i,1);
          i--;
      }
  }
  return nums.length;
  
};
// console.log(removeDuplicates([1,1,1,2]))
// console.log(removeDuplicates([1,2,2,3]))
// console.log(removeDuplicates([1,1,2]))
// console.log(removeDuplicates([1,2]))
// console.log(removeDuplicates([1]))
// console.log(removeDuplicates([]))