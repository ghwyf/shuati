/**
 * 2017-12-28 17:29:56
 * runtime beats 64.71 % of javascript submissions.
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 3){
        return n;
    }
    let step = 2,
        lastStep = 1,   
        i = 3;
    while (i <= n){
        [step,lastStep] = [step+lastStep,step];
        i++;
    }
    return step;
};

console.time('time');
for(let i = 0; i < 30 ; i++){
    console.log(i,climbStairs(i))
}
console.timeEnd('time');
// console.log(climbStairs(6))