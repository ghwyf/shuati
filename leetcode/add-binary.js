/**
 * 2017-12-1 11:09:09
 * beats 41.96 % of javascript submissions.
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = Array.from(a);
  b = Array.from(b);
  let len = 0,
      lenDistance = 0;

  if (a.length < b.length) {
    [a, b] = [b, a];
  }
  a.unshift('0');
  len = a.length;
  lenDistance = a.length - b.length;
  for (let i = len - 1 ; i >= lenDistance; i--) {
    if(a[i] == '1' && b[i-lenDistance] == '1'){
      a = plusOne(a,i);
    } else if(a[i] == '1' || b[i-lenDistance] == '1'){
      a[i] = '1';
    }
  }
  if(a[0] == '0') a.shift();
  return a.join('');
};

function plusOne(a,i){
  
  if(a[i] == '0'){
    a[i] = '1';
    return a;
  } else {
    a[i] = '0';
    return plusOne(a,i-1);
  }
}

console.log(addBinary('0', '1')) // 1
console.log(addBinary('11', '11')) // 110
console.log(addBinary('1010', '1011')) // 10101