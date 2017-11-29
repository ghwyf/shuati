/**
 * 2017-11-27
 * beats 10.37 % of javascript submissions.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var longestNum = s ? 1 : 0,
        s = Array.from(s),
        len = s.length;

    //找出所有组合
    let lastStr = '',
        num = 0;
    for (let i = 0; i < len; i++) {
        if (longestNum >= len - i) {
            return longestNum;
        }
        lastStr = s[i];
        for (let j = i + 1; j < len; j++) {
            num = lastStr.indexOf(s[j]);
            if (num != -1) {
                break;
            }

            lastStr += s[j];
            longestNum = longestNum > lastStr.length ? longestNum : lastStr.length; 
        }
    }
    return longestNum;
};

console.log(lengthOfLongestSubstring('asdaaa'))
console.log(lengthOfLongestSubstring('aaa'))
console.log(lengthOfLongestSubstring('abcde'))
console.log(lengthOfLongestSubstring(''))
console.log(lengthOfLongestSubstring('au'))
console.log(lengthOfLongestSubstring('anviaj'))