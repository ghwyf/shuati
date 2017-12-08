/**
 * 2017-12-8 16:16:55
 * beats 21.73 % of javascript submissions.
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	if (!s) return '';
	if (s.length == 1) return s;
	if (s.length % 2 === 0) s = '#' + s;

	let palindrome = s.charAt(1);

	for (let i = 1; i < s.length;i++ ) {
		//先判断当前s[i]字符下双向扩展 half 长度的字符串是否是回文
		//如果是回文,进入 expandPalindrome函数,扩展以s[i]为中心的回文串
		//如果回文串长度大于等于2时,不需要再进行单侧比较,单侧形成的回文最多只有2个字符
		if (palindrome.length < 2) {
		  //与左侧字符进行比较
		  if (s.charAt(i - 1) == s.charAt(i)) {
		    palindrome = s.substr(i - 1, 2);
		  }
		  //与右侧字符进行比较 
		  if (s.charAt(i) == s.charAt(i + 1)) {
		    palindrome = s.substr(i, 2);
		  }
		}
		//双向比较
		palindrome = expandPalindrome(s, i, palindrome);
	}

	return palindrome;
};
function expandPalindrome(s, idx, palindrome) {
	idx = Math.floor(idx);
	let len = Math.ceil(palindrome.length / 2),
		palindrome1 = '',
		palindrome2 = '';
	if (idx - len >= 0 && (idx + len) < s.length && s.substr(idx - len, len) == (s.substr(idx + 1, len)).split('').reverse().join('')) {
		palindrome1 = s.substr(idx - len, 2 * len + 1);
	}
	let idx2 = idx + 0.5;
	let len2 = palindrome.length % 2 === 0 ? palindrome.length / 2 + 1 : (palindrome.length + 1) / 2;
	if (Math.ceil(idx2 - len2) >= 0 && Math.ceil(idx2 + len2) <= s.length && s.substr(Math.ceil(idx2 - len2), len2) == (s.substr(Math.ceil(idx2), len2)).split('').reverse().join('')) {
		palindrome2 = s.substr(Math.ceil(idx2 - len2), 2 * len2);
		
	}

	if (palindrome.length < palindrome1.length && palindrome2.length < palindrome1.length) {
		return expandPalindrome(s, idx, palindrome1);
	}
	if (palindrome.length < palindrome2.length && palindrome1.length < palindrome2.length) {
		return expandPalindrome(s, idx2, palindrome2);
	}
	return palindrome;
}
console.time('time');

console.log(longestPalindrome('a'))                                 //a
console.log(longestPalindrome('aa'))                                //aa
console.log(longestPalindrome('aaa'))                               //aaa
console.log(longestPalindrome('aaaa'))                              //aaaa 
console.log(longestPalindrome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 
console.log(longestPalindrome('aab'))                               //aa
console.log(longestPalindrome('baa'))                               //aa
console.log(longestPalindrome('bab'))                               //bab
console.log(longestPalindrome('xbab'))                              //bab
console.log(longestPalindrome('babx'))                              //bab
console.log(longestPalindrome('abcbcba'));                          //abcbcba
console.log(longestPalindrome('aaasdfghjkkjhgfdsaaa'));             //aaasdfghjkkjhgfdsaaa
console.log(longestPalindrome('xaaasdfghjkkjhgfdsaaa'));            //aaasdfghjkkjhgfdsaaa
console.log(longestPalindrome('aaasdfghjkkjhgfdaaaassdasfasfvbb')); //dfghjkkjhgfd
console.log(longestPalindrome('aaasdfghjkkjhgfdsaaaaabsasfasfvbb'));//aaasdfghjkkjhgfdsaaa
a = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
f = 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
num = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
// console.log(f.length,g.length)
console.log(f == longestPalindrome(a))
console.log(f == longestPalindrome(f))
console.log(num == longestPalindrome(num))
console.timeEnd('time');