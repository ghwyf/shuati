/**
 * 2017-11-28
 * beats 3.19 % of javascript submissions.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0){
      return false;
  }else if(x < 10){
      return true;
  }
  x = Array.from(String(x));
  let len = x.length;
  if(x % 2 == 0){
      for( let i = 0 ; i < len/2 ; i++ ){
          if(x.shift() !== x.pop()){
              return false;
          }
      }
  } else {
      for( let i = 0 ; i < (len-1)/2 ; i++ ){
          if(x.shift() !== x.pop()){
              return false;
          }
      }
  }
  return true;
};
console.time('time');
for(let i = -1111111 ; i <= 1111111 ; i++ ){
  isPalindrome(i)
}
console.timeEnd('time');