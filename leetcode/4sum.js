
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (!nums || isNaN(target)) {
        return [];
    }

    let result = [];
    let obj = {};
    
    num.filter(value => target <= value)
        .map(value => {
            obj[value]
                ? obj[value].push(value)
                : obj[value] = [value];
        });

    num = [null];
    for (let key in obj) {
        num.push(...obj[key]);
    }
    let cursor1 = 1;
    let cursor2 = 2;
    let cursor3 = 3;
    let cursor4 = num.length - 1;
    let sum;
    for (let i = 1; i < num.length; i++){
        sum = num[cursor1] + num[cursor2] + num[cursor3];
        while(cursor3 < cursor4 && sum < ){
            sum = num[cursor1] + num[cursor2] + num[cursor3] + num[cursor4];
            if(sum > target){
                num.length = num.length - 1;
            }
        }
        if(sum === target){
            result.push([num[cursor1], num[cursor2], num[cursor3], num[cursor4]])
        }



    }

    return result;

};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));