/**
 * 2017-11-29 10:27:50
 * beats 77.45 % of javascript submissions.
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let arr = [],
      shortestLength = strs[0] ? strs[0].length : 0,
      prefix = strs[0] ? strs[0] : '';
  //find the shortest str
  for (let i = 0; i < strs.length; i++) {
    if (shortestLength > strs[i].length) {
      shortestLength = strs[i].length;
      prefix = strs[i];
    }
  }
  //compare the prefix
  for (let i = 0; i < strs.length; i++) {
    if (prefix == '') {
      break;
    }
    for (let j = 0; j < shortestLength; j++) {
      if (prefix.charAt(j) != strs[i].charAt(j)) {
        shortestLength = j;
        prefix =  prefix.substring(0,j);
        break;
      }
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(['a', 'ab']))
console.log(longestCommonPrefix(["aa","ab"]))
console.log(longestCommonPrefix(["abca","aba","aaab"]))
console.log(longestCommonPrefix([]))
console.log(longestCommonPrefix(['abc','']))
console.log(longestCommonPrefix(['abcdefghijjfafjasjfas','abcdefghijjfafnuibib']))