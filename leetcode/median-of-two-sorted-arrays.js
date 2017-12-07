/**
 * 2017-11-28
 * beats 38.29 % of javascript submissions.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let obj = {},
        arr = [],
        result = 0;
    
    nums1.map(num => {
        obj[num] ? obj[num].push(num) : obj[num] = [num] ;
    });
    nums2.map(num => {
        obj[num] ? obj[num].push(num) : obj[num] = [num] ;
    });
    for (let num in obj) {
        arr.push(...obj[num]);
    }
    if (!isNaN(arr[0])) {
        const len = arr.length;
        if (len % 2 == 0) {
            result = (arr[len / 2 - 1] * 1 + arr[len / 2] * 1) / 2;
        } else {
            result = arr[(len + 1) / 2 - 1];
        }
    }
    return (result * 10).toFixed(0) / 10;
};

// console.log(findMedianSortedArrays([1, 2], [2, 3]))
// console.log(findMedianSortedArrays([1, 3, 4], [2, 3]))
// console.log(findMedianSortedArrays([1, 3, 4], []))
// console.log(findMedianSortedArrays([], []))
// console.log(findMedianSortedArrays([1,7,8], [2,9,10]))
// console.log(findMedianSortedArrays([1,1], [1,2]))