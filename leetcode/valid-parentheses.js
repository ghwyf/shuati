/**
 * 2017-11-29 11:15:57
 * beats 81.11 % of javascript submissions
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let selectedCharCodes = [],
      code = 0;
  for (let i = 0; i < s.length; i++) {
    code = s.charCodeAt(i);
    if (leftCharCode[code]) {
      selectedCharCodes.push(code)
    } else if(rightCharCode[code]){
      if(selectedCharCodes[selectedCharCodes.length - 1] == rightCharCode[code]){
        selectedCharCodes.pop();
      }
      else{
        return false;
      }
    }
  }
  return selectedCharCodes[0] == null || selectedCharCodes[0] == undefined;
};
const leftCharCode = {
  40: 41,
  123: 125,
  91: 93,
};
const rightCharCode = {
  41: 40,
  125: 123,
  93: 91,
};

console.log(isValid(''))
console.log(isValid('{}'))
console.log(isValid('{]}'))
console.log(isValid('{1f34}]}'))