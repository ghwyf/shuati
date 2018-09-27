/**
 * 2017-11-30 09:20:20  
 * beats 93.36 % of javascript submissions.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let idx = 0,
      len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[0] == val) {
      nums.shift();
    }else{
      nums.push(nums.shift());
      idx++;
    }
  }
  return idx;
};



console.time('time')
for(let i = 0 ; i < 1000000 ; i++){
  removeElement([3, 2, 2,2, 3], 3);
}
console.timeEnd('time')