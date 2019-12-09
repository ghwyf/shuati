/**
 * 2019-12-09
 * 
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (s === '' && p === '') return true
  if (!s || !p) return false

  
};



console.log(isMatch('aa', 'a')) //false
console.log(isMatch('aa', 'a*')) //true
console.log(isMatch('aa', '.*')) //true
console.log(isMatch('aab', 'c*a*b')) //true
console.log(isMatch('mississippi', 'mis*is*p*.')) //false