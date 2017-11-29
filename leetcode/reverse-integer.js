/**
 * 2017-11-28
 * beats 35.13 % of javascript submissions.
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

  let max = 2147483647,
    sign = 1,
    result = 0;
  if (x < 0) {
    sign = -1;
    x = sign * x;
  }

  result = sign * Array.from(String(x)).reverse().join('');
  if (max * -1 > result || max < result) {
    return 0;
  }
  return result;
};
console.log(reverse(1534236469))
console.log(reverse(2147483647))
console.log(reverse(-123))