/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const num = Math.floor(n / 2);
    let step = n > 0 ? 1 : 0;
    for(let i = 1 ; i <= num ; i++){
        step += ( n - i * 2 ) * (n - i * 2 - 1) / 2;
    }
    if(num　> 0 ){
        step++;
    }
    return step;
};

for(let i = 0; i < 7 ; i++){
    console.log(i,climbStairs(i))
}