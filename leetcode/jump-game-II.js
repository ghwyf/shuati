/**
 * 2017-12-11 09:42:22
 * beats 56.52 % of javascript submissions.
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.length <= 1) return 0;
    let len = nums.length,
        maxJumpStep = 0,
        maxJumpDistance = 0,
        jumps = 1;
    for (let i = 0; i < len;) {
        maxJumpStep = 0;
        maxJumpDistance = 0;
        if (i + 1 + nums[i] >= len) {
            return jumps;
        }
        for (let j = 1; j <= nums[i]; j++) {
            if (i + j + nums[i + j] + 1 >= len) {
                return ++jumps;
            };
            if (maxJumpDistance < i + j + nums[i + j]) {
                maxJumpStep = j;
                maxJumpDistance = i + j + nums[i + j];
            }
        }
        i = maxJumpStep + i;

        jumps++;
    }
    return jumps;
};
console.log(jump([0]))
console.log(jump([1]))
console.log(jump([1,2]))
console.log(jump([2,0]))
console.log(jump([3, 2, 1]))
console.log(jump([1,2,3]))
console.log(jump([1,3,1,1,1,3]))
console.log(jump([4,2,1,1,1,3]))
console.log(jump([5,1,1,1,1]))
console.log(jump([2,1,1,2,3,1,1,1,1]))