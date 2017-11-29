/**
 * 2017-11-29 9:04:59
 * beats 87.48 % of javascript submissions.
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  let result = 0,
      lastChar = '',
      nowChar = '',
      i = s.length - 1;
  while(i >= 0){    
    nowChar = s.charAt(i--);
    if(lastChar && (nowChar == 'I' || nowChar == 'X' || nowChar == 'C') && romanNum[nowChar] < romanNum[lastChar]){
      result -= romanNum[nowChar];
    } else{
      result += romanNum[nowChar];
      lastChar = nowChar;
    }
  }
  return result;
};

console.log(romanToInt('I')); //1
console.log(romanToInt('III')); //3
console.log(romanToInt('V')); //5
console.log(romanToInt('XVI'));//17
console.log(romanToInt('XVII'));//17
console.log(romanToInt('XVIII'));//18
console.log(romanToInt('XLII'));//42