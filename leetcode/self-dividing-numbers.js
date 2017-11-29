/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let result = [],
      numArr = [],
      num = 0,
      backWhile = false;
  while(left <= right){
      num = left++;
      numArr = Array.from(num.toString());
      backWhile = false;
      for(let n of numArr){
          if( n === 0 || num % n !== 0){
              backWhile = true;
              break;
          }
      }
      if(!backWhile){
          result.push(num);
      }
  }
  return result;
};
console.time('time');
for(let i = 800 ; i < 900 ; i++){
  selfDividingNumbers(1,i)
}
console.timeEnd('time');