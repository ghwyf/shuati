/**
 * 
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // let i = 1;
  // while(i * i <= x){
  //   i++;
  // }
  // return i - 1;

  
  return parseInt(Math.sqrt(x));
};


console.time('time');
for(let i = 0 ; i < 100 ; i++ ){
  console.log(mySqrt(10000000000))
  // console.log(Math.floor(Math.sqrt(10000000000)))
}
console.timeEnd('time');