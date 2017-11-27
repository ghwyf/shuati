/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var s = Array.from(s),
        charObj = {},
        longestNum = 1,
        strArr = [],
        len = s.length;

    //找出所有组合
    let str = '',
        lastStr = '',
        num = 0;
    for (let i = 0; i < len; i++) {
        if (longestNum * 2 >= len || longestNum > len - i) {
            break;
        }
        lastStr = s.slice(i, i + longestNum).join('');
        for (let j = (longestNum > i ? longestNum : i); j < len; j++) {
            num = lastStr.indexOf(s[j]);
            console.log(lastStr,s[j],num)
            if (num != -1) {
                break;
            }

            lastStr += s[j];
            longestNum = longestNum > lastStr.length ? longestNum : lastStr.length; 
            // console.log(i,j)
        }
    }
    return longestNum;
};

console.log(lengthOfLongestSubstring('aasdaaa'))