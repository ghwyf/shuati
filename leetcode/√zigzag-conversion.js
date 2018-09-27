/**
 * 2018-09-27 17:27:09
 * beats 93.70 % of javascript submissions.
 * @param {string} s
 * @param {number} numRows
 * @return {string} 
 */
var convert = function (s, numRows) {
    var len = s ? s.length : 0;
    if (numRows < 2) {
        return s || '';
    }

    var arr = [];

    var idx = 0;

    while (idx < numRows) {
        arr[idx++] = '';
    }

    idx = 0;
    var sign; 
    for (var i = 0; i < len; i++) {

        arr[idx] += s[i];
        
        sign =  Math.floor(i / (numRows - 1)) % 2 === 0;
        
        idx = idx + (sign ? 1 : -1);
    }
    var str = '';
    
    arr.forEach( item => str += item);
    return str;

};



console.log(convert('AB', 0) === 'AB');
console.log(convert('AB', 1) === 'AB');
console.log(convert('AB', 2) === 'AB');
console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR');
console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI');