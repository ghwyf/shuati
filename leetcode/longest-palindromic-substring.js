/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  s = '#' + s;
  let palindrome = '';
    // index = Math.ceil(s.length / 2);
  // if (s.charAt(leftIndex) == s.charAt(rightIndex)) {
  //   palindrome = s.substring(leftIndex, rightIndex + 1);
  // }
  for ( let i = 1; i < s.length ;i++ ) {
    
    let half = Math.floor(palindrome / 2);

    //先判断当前s[i]字符下双向扩展 half 长度的字符串是否是回文
    //如果是回文,进入 expandPalindrome函数,扩展以s[i]为中心的回文串
    //如果不是回文，


    if(s.substring(i - half, i) == Array.from(s.substring(i+1, i + half)).reverse().join('')){

    }



    // if (s.substring(i - half, i + 1) == Array.from(s.substring(i+1, i + half)).reverse().join('')) {
    //   palindrome = s.slice(leftIndex - half, leftIndex + half);

    // }
  }

  return palindrome;
};
function expandPalindrome(left,right,s){

}

console.log(longestPalindrome('abcbcba'));

