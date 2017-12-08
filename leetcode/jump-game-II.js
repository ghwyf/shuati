/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if(nums.length <= 1) return 0;
  let len = nums.length,
      maxJumpStep = 0,
      maxJumpDistance = 0,
      jumps = 0;
  for(let i = 0 ; i < len ;){
      jumps++;
      maxStep = 0;
      maxJumpDistance = 0;
      for(let j = 1 ; j <= nums[i] ; j++){
          if(i + nums[i+j] + 1 >= len) {
            return jumps;
          };
          if(maxJumpDistance < i + nums[i+j]){
              maxStep = j;
              maxJumDistance = i + nums[i+j];
          } 
      }
      i = maxStep + i;
  }
  return jumps;
};
// console.log(jump([0]))
// console.log(jump([1]))
// console.log(jump([1,0]))
console.log(jump([1,2,3]))