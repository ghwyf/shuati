/**
 * 2017-12-1 09:30:33
 * beats 28.74 % of javascript submissions.
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let len = 0;
  s = Array.from(s);
  for (let i = s.length - 1 ; i >= 0 ; i--){
      if (s[i] === ' '){
        if (len > 0) break;
        continue;
      } 
      len++;
  }
  return len;
};
console.log(lengthOfLastWord('a'))
console.log(lengthOfLastWord('  a'))
console.log(lengthOfLastWord('a '))
console.log(lengthOfLastWord(' '))
console.log(lengthOfLastWord(''))