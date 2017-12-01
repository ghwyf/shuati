/**
 * 2017-11-30 10:52:22
 * beats 76.47 % of javascript submissions
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let result = [1],
      arr = [],
      count = 1,
      currentNum = 0;
  for (let i = 1 ; i < n ; i++){
      currentNum = result[0];
      for(let j = 1 ; j < result.length ; j++){
          if(currentNum != result[j]){
              arr.push(count);
              arr.push(currentNum);
              count = 1;
              currentNum = result[j];
          } else{
              count++;
          }
      }
      if (count != 0){
          arr.push(count);
          arr.push(currentNum);
          count = 1;
      }
      result = [...arr];
      arr = [];
  }
  return result.join('');
};

console.time('time');
for(let i = 0 ; i < 30 ; i ++){
  console.log(countAndSay(i))
}
console.timeEnd('time');