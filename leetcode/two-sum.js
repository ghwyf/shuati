/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let anotherNum = 0;


	// const len = nums.length;
	// for (let i = 0 ; i < len ; i++){
	// 		anotherNum = nums.indexOf(target - nums[i]);
	// 		if ( anotherNum >= 0 && anotherNum !== i){
	// 				return [nums[i],nums[anotherNum]] 
	// 		}
	// }

	
	let count = 0;
	for(let num of nums ){
		
		anotherNum = nums.indexOf(target - num);
		if ( anotherNum >= 0 && anotherNum !== count){
							return [count,anotherNum] 
		}
		count++;
	}
	return [];
};


console.log(twoSum([3,2,4],6))